from django.contrib import admin
from .models import Lightsaber, Character

@admin.register(Lightsaber)
class LightsaberAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'color', 'owner', 'design', 'description', 'image')

@admin.register(Character)
class CharacterAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'full_name', 'alignment', 'home_planet', 'profile_image')
