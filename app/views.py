from django.shortcuts import render
from django.views.generic import ListView, DetailView
from .models import Lightsaber, Character
from django.http import HttpResponse


def home(request):
    return HttpResponse("Welcome to the Jedi Blades app!")


class LightsaberListView(ListView):
    model = Lightsaber
    template_name = 'index.html'  # This is the template we'll use to render the lightsabers page
    context_object_name = 'lightsabers'  # The context object we'll use in the template


class LightsaberDetailView(DetailView):
    model = Lightsaber
    template_name = 'lightsaber_details.html'
    context_object_name = 'lightsaber'


class CharacterListView(ListView):
    model = Character
    template_name = 'characters.html'
    context_object_name = 'characters'


class CharacterDetailView(DetailView):
    model = Character
    template_name = 'character_details.html'
    context_object_name = 'character'
