from django.urls import path
from . import views   #the . means any sibling (same-level) file.
from django.contrib import admin
from django.urls import path, include


#the path for all actors (or shows)  show the ActorList and called it actor-list. It will render it to the screen as  as_view. The name part I'm unsure of. I think it just names it.

#these are just routes for your fetch request to the server.
#api/actors/  will render the json text ActorList.as_view()

# http://localhost:8000/api/actors/ will show you all the actors.


#these are your backend paths to show your data.

urlpatterns = [
#application built off your main urls
    # path('api/', views.ActorList.as_view(), name='both'),

    path('api/actors/', views.ActorList.as_view(), name='actor-list'), #route we're hitting
    path('api/actors/<int:pk>', views.ActorDetail.as_view(), name='actor-detail'),

    path('api/shows/', views.ShowList.as_view(), name='show-list'),
    path('api/shows/<int:pk>', views.ShowDetail.as_view(), name='show-detail'),


    path('api/comments/', views.CommentsList.as_view(), name='comments-list'),
    # path('api/comments/', views.ShowList')

#go to views and run the function CommentsList
]
