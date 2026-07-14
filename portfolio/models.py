from django.db import models
from django.utils.text import slugify

class Project(models.Model):
    CATEGORY_CHOICES = [
        ('vanilla', 'HTML/CSS/JS'),
        ('react', 'React SPA'),
        ('vue', 'Vue SPA'),
        ('angular', 'Angular SPA'),
    ]

    GLOW_CHOICES = [
        ('glow-cyan', 'Cyan Glow'),
        ('glow-purple', 'Purple Glow'),
        ('glow-pink', 'Pink Glow'),
    ]

    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True, max_length=250)
    description = models.TextField()
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='vanilla')
    badge = models.CharField(max_length=100, blank=True, help_text="e.g. React & Tailwind")
    client = models.CharField(max_length=100, blank=True, default="AetherCore Client")
    glow = models.CharField(max_length=20, choices=GLOW_CHOICES, default='glow-cyan')
    image = models.FileField(upload_to='portfolio/', blank=True, null=True)
    github_url = models.URLField(blank=True, verbose_name="GitHub URL")
    live_url = models.URLField(blank=True, verbose_name="Live URL")
    featured = models.BooleanField(default=False)
    published = models.BooleanField(default=True)
    created_date = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        # Ensure default badge if not defined
        if not self.badge:
            cat_label = dict(self.CATEGORY_CHOICES).get(self.category, 'HTML/CSS/JS')
            self.badge = cat_label
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created_date']
