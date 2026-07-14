from django.db import models
from django.utils.text import slugify

class BlogPost(models.Model):
    STATUS_CHOICES = [
        ('draft', 'Draft'),
        ('published', 'Published'),
    ]

    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True, max_length=250)
    content = models.TextField()
    category = models.CharField(max_length=100, default="Engineering")
    tags = models.JSONField(default=list, blank=True)
    cover_image = models.FileField(upload_to='blog/', blank=True, null=True)
    
    # SEO configs
    seo_title = models.CharField(max_length=150, blank=True)
    seo_description = models.TextField(blank=True)
    
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='published')
    created_date = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created_date']
