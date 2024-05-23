from django.shortcuts import render
from django.views.generic import ListView
from .models import Lightsaber, Character
from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to the Jedi Blades app!")

class LightsaberListView(ListView):
    model = Lightsaber
    template_name = 'index.html'  # This is the template we'll use to render the lightsabers page
    context_object_name = 'lightsabers'  # The context object we'll use in the template