from django.db import models

class ServiceRequest(models.Model):
    STATUS_CHOICES = [
        ('new', 'New'),
        ('in_review', 'In Review'),
        ('accepted', 'Accepted'),
        ('rejected', 'Rejected'),
        ('completed', 'Completed'),
    ]

    name = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=50, blank=True)
    company = models.CharField(max_length=150, blank=True)
    country = models.CharField(max_length=100, blank=True)
    service_type = models.CharField(max_length=150, verbose_name="Requested Service")
    budget = models.CharField(max_length=100, blank=True)
    deadline = models.CharField(max_length=100, blank=True)
    description = models.TextField(blank=True, verbose_name="Project Description")
    pages = models.IntegerField(default=1)
    estimate = models.CharField(max_length=50, blank=True, help_text="Total calculated price")
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='new')
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Request by {self.name} for {self.service_type} ({self.estimate})"

    class Meta:
        ordering = ['-created_date']
