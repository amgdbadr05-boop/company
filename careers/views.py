from rest_framework import viewsets, permissions
from .models import JobOpening, JobApplication
from .serializers import JobOpeningSerializer, JobApplicationSerializer

class JobOpeningViewSet(viewsets.ModelViewSet):
    queryset = JobOpening.objects.all()
    serializer_class = JobOpeningSerializer

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]

    def get_queryset(self):
        queryset = JobOpening.objects.all()
        # If not admin, only show active openings
        if not self.request.user.is_staff:
            queryset = queryset.filter(is_active=True)
        return queryset

class JobApplicationViewSet(viewsets.ModelViewSet):
    queryset = JobApplication.objects.all()
    serializer_class = JobApplicationSerializer

    def get_permissions(self):
        if self.action == 'create':
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]
