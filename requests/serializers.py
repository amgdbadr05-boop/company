from rest_framework import serializers
from .models import ServiceRequest

class ServiceRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceRequest
        fields = [
            'id', 'name', 'email', 'phone', 'company', 'country',
            'service_type', 'budget', 'deadline', 'description',
            'pages', 'estimate', 'status', 'created_date'
        ]
