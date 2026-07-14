from rest_framework import serializers
from .models import BlogPost

class BlogPostSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = BlogPost
        fields = [
            'id', 'title', 'slug', 'content', 'category', 'tags',
            'cover_image', 'image_url', 'seo_title', 'seo_description',
            'status', 'created_date'
        ]

    def get_image_url(self, obj):
        if obj.cover_image:
            request = self.context.get('request')
            if request is not None:
                return request.build_absolute_uri(obj.cover_image.url)
            return obj.cover_image.url
        return None
