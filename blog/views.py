from rest_framework import viewsets, permissions
from .models import BlogPost
from .serializers import BlogPostSerializer

class BlogPostViewSet(viewsets.ModelViewSet):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]

    def get_queryset(self):
        queryset = BlogPost.objects.all()
        # Non-admins can only see published articles
        if not self.request.user.is_staff:
            queryset = queryset.filter(status='published')
        return queryset
