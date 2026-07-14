from rest_framework import serializers
from .models import ContactMessage

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = [
            'id', 'name', 'email', 'phone', 'subject', 'message',
            'created_date', 'read', 'replied', 'ip_address', 'user_agent'
        ]
        read_only_fields = ['ip_address', 'user_agent']
