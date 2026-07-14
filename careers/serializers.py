from rest_framework import serializers
from .models import JobOpening, JobApplication

class JobOpeningSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobOpening
        fields = ['id', 'title', 'description', 'requirements', 'is_active', 'created_date']

class JobApplicationSerializer(serializers.ModelSerializer):
    job_title = serializers.ReadOnlyField(source='job.title')

    class Meta:
        model = JobApplication
        fields = ['id', 'job', 'job_title', 'name', 'email', 'phone', 'cv_file', 'cover_letter', 'created_date']
