from django.db import models


class Character(models.Model):
    ALIGNMENT_CHOICES = [
        ('L', 'Light Side'),
        ('D', 'Dark Side'),
    ]

    name = models.CharField(max_length=100, unique=True)
    image = models.URLField(null=True, blank=True)
    full_name = models.CharField(max_length=200)
    alignment = models.CharField(max_length=1, choices=ALIGNMENT_CHOICES)
    home_planet = models.ForeignKey(max_length=50)
    lightsaber = models.ForeignKey(Lightsaber, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Lightsaber(models.Model):
    name = models.CharField(max_length=100, unique=True)
    color = models.CharField(max_length=20)
    owner = models.ForeignKey(Character, on_delete=models.CASCADE, related_name='lightsabers')
    design = models.CharField(max_length=100)
    description = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.name} ({self.color})"