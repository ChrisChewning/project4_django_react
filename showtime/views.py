from django.views.generic import View
from django.shortcuts import render




# Create your views here.
from rest_framework import generics
from .serializers import ActorSerializer, ShowSerializer
#need to import model names to be able to serialize your routes.
from .models import Actor, Show


#this renders a template that will connect to React.
class renderReact(View):
    def get(self, request, *args, **kwargs):
        return render(request, "templates/react-render.html", {})



#this creates Actor list view and create view for the API
class ActorList(generics.ListCreateAPIView):
    queryset = Actor.objects.all()
    serializer_class = ActorSerializer


#this creates Actor show, update, and delete routes for our API.
class ActorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Actor.objects.all()
    serializer_class = ActorSerializer



class ShowList(generics.ListCreateAPIView):
  queryset = Show.objects.all().prefetch_related('artist')
  serializer_class = ShowSerializer

class ShowDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = Show.objects.all().prefetch_related('artist')
  serializer_class = ShowSerializer
