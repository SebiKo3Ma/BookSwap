from django.db import models

class TitleCard(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='titlecard_images/')  # Ensure your media settings are configured

    def __str__(self):
        return self.title