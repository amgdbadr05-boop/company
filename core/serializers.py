from rest_framework import serializers
from .models import Testimonial, FAQ

class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = ['id', 'client_name', 'client_role', 'text', 'rating', 'glow', 'created_date']

class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = ['id', 'question', 'answer', 'display_order', 'created_date']
