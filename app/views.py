from django.shortcuts import render
from django.views.generic import ListView, DetailView, TemplateView
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

class AboutView(TemplateView):
    template_name = 'about_lightsaber.html'


class TeamView(TemplateView):
    template_name = 'team.html'


class CharacterDetailView(DetailView):
    model = Character
    template_name = 'character_details.html'
    context_object_name = 'character'
