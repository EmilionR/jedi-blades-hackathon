from django.db import models

class Lightsaber(models.Model):
    name = models.CharField(max_length=100, unique=True)
    color = models.CharField(max_length=20)
    owner = models.CharField(max_length=15)
    design = models.CharField(max_length=10)
    description = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.name} ({self.color})"


class Character(models.Model):
    ALIGNMENT_CHOICES = [
        ('L', 'Light Side'),
        ('D', 'Dark Side'),
    ]

    name = models.CharField(max_length=100, unique=True)
    full_name = models.CharField(max_length=200)
    alignment = models.CharField(max_length=1, choices=ALIGNMENT_CHOICES)
    lightsaber = models.ForeignKey(Lightsaber, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


