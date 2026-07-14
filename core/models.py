from django.db import models

class Testimonial(models.Model):
    client_name = models.CharField(max_length=150)
    client_role = models.CharField(max_length=150, help_text="e.g. CEO, TechCorp")
    text = models.TextField()
    rating = models.IntegerField(default=5)
    glow = models.CharField(max_length=20, default='glow-cyan', help_text="glow-cyan, glow-purple, glow-pink")
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Testimonial from {self.client_name}"

    class Meta:
        ordering = ['-created_date']

class FAQ(models.Model):
    question = models.CharField(max_length=250)
    answer = models.TextField()
    display_order = models.IntegerField(default=0)
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question

    class Meta:
        ordering = ['display_order', 'created_date']
        verbose_name = "FAQ"
        verbose_name_plural = "FAQs"
