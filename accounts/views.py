from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.middleware.csrf import get_token
from django.views.decorators.csrf import ensure_csrf_cookie
from django.utils.decorators import method_decorator
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions

class LoginView(APIView):
    permission_classes = [permissions.AllowAny]

    @method_decorator(ensure_csrf_cookie)
    def get(self, request):
        """Returns CSRF token to frontend client."""
        return Response({'csrfToken': get_token(request)})

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return Response({
                'isAuthenticated': True,
                'username': user.username,
                'email': user.email,
                'isStaff': user.is_staff
            }, status=status.HTTP_200_OK)
            
        return Response({
            'detail': 'Invalid username or password credentials.'
        }, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        logout(request)
        return Response({'isAuthenticated': False}, status=status.HTTP_200_OK)

class StatusView(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        if request.user.is_authenticated:
            return Response({
                'isAuthenticated': True,
                'username': request.user.username,
                'email': request.user.email,
                'isStaff': request.user.is_staff
            })
        return Response({'isAuthenticated': False})

class RegisterView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')
        first_name = request.data.get('first_name', '')
        last_name = request.data.get('last_name', '')

        if not username or not email or not password:
            return Response({'detail': 'Username, email, and password are required.'}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(username=username).exists():
            return Response({'detail': 'Username is already taken.'}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(email=email).exists():
            return Response({'detail': 'Email is already registered.'}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(
            username=username,
            email=email,
            password=password,
            first_name=first_name,
            last_name=last_name
        )
        login(request, user)
        return Response({
            'isAuthenticated': True,
            'username': user.username,
            'email': user.email,
            'isStaff': user.is_staff
        }, status=status.HTTP_201_CREATED)

class ClientsListView(APIView):
    permission_classes = [permissions.IsAdminUser]

    def get(self, request):
        clients = User.objects.filter(is_staff=False).order_by('-date_joined')
        data = [{
            'first_name': c.first_name,
            'last_name': c.last_name,
            'email': c.email,
            'username': c.username,
            'date_joined': c.date_joined.isoformat()
        } for c in clients]
        return Response(data)
