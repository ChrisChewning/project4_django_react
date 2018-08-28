from django.contrib import admin
from .models import Actor, Show, Comments

# Register your models here.
admin.site.register(Actor)
admin.site.register(Show)
admin.site.register(Comments)  #once you make a model, register it here with the Class name.

#note: you can't do (Actor, Show) in one line.
