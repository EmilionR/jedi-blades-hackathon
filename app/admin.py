from django.contrib import admin
from .models import Lightsaber, Character

@admin.register(Lightsaber)
class LightsaberAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'color', 'owner', 'design', 'description')

admin.site.register(Character)