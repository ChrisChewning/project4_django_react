from django.views.generic import View
from django.shortcuts import render

#NOTE: views is the same idea as express's controllers.


# Create your views hereself.
#IN YOUR VIEWS import your serializer (to read in json) and your models
from rest_framework import generics
from .serializers import ActorSerializer, ShowSerializer, CommentsSerializer
#need to import model names to be able to serialize your routes.
from .models import Actor, Show, Comments
from django.utils.decorators import method_decorator  #
from django.views.decorators.csrf import csrf_exempt  #

#ACTORS ACTORS ACTORS

@method_decorator(csrf_exempt, name='dispatch') #fetch doesnt include the csrf token.


#this creates Actor list view and create view for the API
class ActorList(generics.ListCreateAPIView):
    queryset = Actor.objects.all()
    print(queryset)
    serializer_class = ActorSerializer

#this creates Actor show, update, and delete routes for our API.
class ActorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Actor.objects.all()
    serializer_class = ActorSerializer

#SHOWS SHOWS SHOWS

class ShowList(generics.ListCreateAPIView):
  queryset = Show.objects.all()
  # .prefetch_related('artist')
  serializer_class = ShowSerializer

class ShowDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = Show.objects.all()
  # .prefetch_related('artist')
  serializer_class = ShowSerializer


#COMMENTS COMMENTS COMMENTS

class CommentsList(generics.RetrieveUpdateDestroyAPIView):
  queryset = Show.objects.all()
  serializer_class = CommentsSerializer #this matches up to your views
