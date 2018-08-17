from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .serializers import ActorSerializer, ShowSerializer
#need to import model names to be able to serialize your routes.
from .models import Actor, Show




class ActorList(generics.ListCreateAPIView):
    #creates list view and create view for the API
    queryset = Actor.objects.all()
    serializer_class = ActorSerializer

class ActorDetail(generics.RetrieveUpdateDestroyAPIView):
    #creates show, update, and delete routes for our API.
    queryset = Actor.objects.all()
    serializer_class = ActorSerializer



class ShowList(generics.ListCreateAPIView):
  queryset = Show.objects.all().prefetch_related('artist')
  serializer_class = ShowSerializer

class ShowDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = Show.objects.all().prefetch_related('artist')
  serializer_class = ShowSerializer
