from django.db import models
from django.conf import settings
from django.contrib.auth.models import User


#notes:
#one to many.

class Actor(models.Model):
    actor_name = models.CharField(max_length=70)
    actor_age = models.CharField(max_length=20)
    actor_photo_url = models.TextField()

    def __str__(self):
        return str(self.actor_name)


#LOOK UP an actor and see what shows they've been in.
#user searches in CJ. goes in to the database and finds all the instances of the primary key of CJ.

#ForeignKey is relating the two models.

class Show(models.Model):
    show_title = models.CharField(max_length=100)
    show_photo_url = models.TextField()
    show_actor = models.ForeignKey(Actor, on_delete=models.CASCADE, related_name='shows')
    show_main_url = models.TextField()

    def __str__(self):
        return str(self.show_title) #this needs to be what you show on the screen.

class Comments(models.Model): #save the comments in your database here.
    name = models.CharField(max_length=30)
    message = models.CharField(max_length=300)

#this function is how the model gets identified when you look at it on the admin site.
    def __str__(self):
        return str(self.name)


#ForeignKey: Shows is saying you can tie actors to shows. it's like when you included one schema inside another one.

#The related_name refers to how the model will be referred to in relation to its parent -- you will see this in use later on.

#on_delete specifies how we want the models to act when their parent is deleted. By using cascade, related children will be deleted.
