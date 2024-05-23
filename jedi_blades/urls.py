"""
URL configuration for jedi_blades project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from app.views import LightsaberListView, LightsaberDetailView, CharacterListView, CharacterDetailView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', LightsaberListView.as_view(), name='lightsaber-list'),
    path('lightsaber/<int:pk>/', LightsaberDetailView.as_view(), name='lightsaber-detail'),
    path('characters/', CharacterListView.as_view(), name='character-list'),
    path('character/<int:pk>/', CharacterDetailView.as_view(), name='character-detail'),
]
