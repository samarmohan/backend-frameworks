from django.db import models


class Todo(models.Model):
    name = models.CharField(blank=False, null=False, max_length=255)
    isComplete = models.BooleanField(blank=False, null=False, default=False)
