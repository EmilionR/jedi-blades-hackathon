from django.db import models
from cloudinary.models import CloudinaryField

class Lightsaber(models.Model):
    name = models.CharField(max_length=100, unique=True)
    color = models.CharField(max_length=20)
    owner = models.ForeignKey('Character', on_delete=models.CASCADE, related_name='lightsaber')
    design = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    image = CloudinaryField('image', default='https://res.cloudinary.com/digqsxx3z/image/upload/v1716572753/DALL_E_2024-05-22_21.57.28_-_An_imposing_landscape_of_a_Sith_stronghold_on_a_barren_volcanic_planet_where_lava_rivers_flow_freely_under_a_stormy_ash-filled_sky._The_stronghold_i_ilacid.webp')

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
    home_planet = models.CharField(max_length=100)
    profile_image = CloudinaryField('image', default='https://res.cloudinary.com/digqsxx3z/image/upload/v1716572753/DALL_E_2024-05-22_21.57.28_-_An_imposing_landscape_of_a_Sith_stronghold_on_a_barren_volcanic_planet_where_lava_rivers_flow_freely_under_a_stormy_ash-filled_sky._The_stronghold_i_ilacid.webp')
    lore = models.TextField(default='Details about the character\'s backstory, significant events, and role in the Star Wars universe.')
    def __str__(self):
        return self.name
