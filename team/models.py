from django.db import models

class TeamMember(models.Model):
    name = models.CharField(max_length=150)
    role = models.CharField(max_length=150, verbose_name="Job Role")
    email = models.EmailField(blank=True)
    bio = models.TextField(blank=True)
    initials = models.CharField(max_length=5, blank=True, help_text="e.g. AB")
    langs = models.JSONField(default=list, blank=True, verbose_name="Programming Languages")
    libs = models.JSONField(default=list, blank=True, verbose_name="Libraries")
    fws = models.JSONField(default=list, blank=True, verbose_name="Frameworks")
    glow = models.CharField(max_length=20, default='glow-cyan', help_text="glow-cyan, glow-purple, glow-pink")
    display_order = models.IntegerField(default=0)
    created_date = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.initials and self.name:
            # Generate initials automatically
            parts = self.name.split()
            initials_str = "".join([p[0].upper() for p in parts if p])
            self.initials = initials_str[:2]
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['display_order', 'created_date']
