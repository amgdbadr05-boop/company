from django.db import models

class JobOpening(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()
    requirements = models.TextField(blank=True, help_text="List candidate requirements")
    is_active = models.BooleanField(default=True)
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created_date']

class JobApplication(models.Model):
    job = models.ForeignKey(JobOpening, on_delete=models.SET_NULL, null=True, blank=True, related_name="applications")
    name = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=50)
    cv_file = models.FileField(upload_to='applications/cvs/')
    cover_letter = models.TextField(blank=True)
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        job_title = self.job.title if self.job else "General Application"
        return f"Application by {self.name} for {job_title}"

    class Meta:
        ordering = ['-created_date']
