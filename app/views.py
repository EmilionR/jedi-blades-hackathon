from django.shortcuts import render
from django.views.generic import ListView
from .models import Lightsaber, Character

# Create your views here.

class LightsaberListView(ListView):
    model = Lightsaber
    template_name = 'lightsaber_list.html'  # This is the template we'll use to render the lightsabers page
    context_object_name = 'lightsabers'  # The context object we'll use in the template