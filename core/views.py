from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import Testimonial, FAQ
from .serializers import TestimonialSerializer, FAQSerializer

# API Viewsets
class TestimonialViewSet(viewsets.ModelViewSet):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]

class FAQViewSet(viewsets.ModelViewSet):
    queryset = FAQ.objects.all()
    serializer_class = FAQSerializer

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]

from django.http import HttpResponse

# Main SPA Single-Page Entry View
def index_view(request):
    return render(request, 'index.html')

def robots_view(request):
    content = "User-agent: *\nAllow: /\nSitemap: http://localhost:8000/sitemap.xml"
    return HttpResponse(content, content_type="text/plain")

def sitemap_view(request):
    content = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>http://localhost:8000/</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
</urlset>"""
    return HttpResponse(content, content_type="application/xml")
