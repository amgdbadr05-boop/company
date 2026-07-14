from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers

from core.views import index_view, TestimonialViewSet, FAQViewSet, robots_view, sitemap_view
from portfolio.views import ProjectViewSet
from contact.views import ContactMessageViewSet
from requests.views import ServiceRequestViewSet
from team.views import TeamMemberViewSet
from blog.views import BlogPostViewSet
from careers.views import JobOpeningViewSet, JobApplicationViewSet
from accounts.views import LoginView, LogoutView, StatusView, RegisterView, ClientsListView, ClientDetailView

# Setup DRF Router
router = routers.DefaultRouter()
router.register(r'projects', ProjectViewSet, basename='project')
router.register(r'contact', ContactMessageViewSet, basename='contact')
router.register(r'requests', ServiceRequestViewSet, basename='request')
router.register(r'team', TeamMemberViewSet, basename='team')
router.register(r'blog', BlogPostViewSet, basename='blog')
router.register(r'vacancies', JobOpeningViewSet, basename='vacancy')
router.register(r'applications', JobApplicationViewSet, basename='application')
router.register(r'testimonials', TestimonialViewSet, basename='testimonial')
router.register(r'faqs', FAQViewSet, basename='faq')

urlpatterns = [
    # Admin Panel
    path('admin/', admin.site.urls),

    # Authentication REST APIs
    path('api/accounts/login/', LoginView.as_view(), name='api-login'),
    path('api/accounts/logout/', LogoutView.as_view(), name='api-logout'),
    path('api/accounts/status/', StatusView.as_view(), name='api-status'),
    path('api/accounts/register/', RegisterView.as_view(), name='api-register'),
    path('api/accounts/clients/', ClientsListView.as_view(), name='api-clients'),
    path('api/accounts/clients/<int:pk>/', ClientDetailView.as_view(), name='api-client-delete'),

    # Registered REST APIs
    path('api/', include(router.urls)),

    # SEO files
    path('robots.txt', robots_view, name='robots'),
    path('sitemap.xml', sitemap_view, name='sitemap'),

    # Fallback to single-page application views (routing everything else to index)
    re_path(r'^$', index_view, name='index'),
    re_path(r'^(?!api/|admin/|static/|media/|robots\.txt|sitemap\.xml).*$', index_view, name='index-fallback'),
]

# Serve media and static files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
