from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import ServiceRequest
from .serializers import ServiceRequestSerializer

class ServiceRequestViewSet(viewsets.ModelViewSet):
    queryset = ServiceRequest.objects.all()
    serializer_class = ServiceRequestSerializer

    def get_permissions(self):
        if self.action in ['create', 'my_requests']:
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]

    @action(detail=False, methods=['get'])
    def my_requests(self, request):
        if not request.user.is_authenticated:
            return Response([])
        queryset = self.get_queryset().filter(email__iexact=request.user.email)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
