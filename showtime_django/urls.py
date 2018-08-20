from django.contrib import admin
from django.urls import path, re_path, include #re_path expects reg ex
from django.conf.urls import include
# from showtime.views import renderReact #from folder showtime . views is views.py
from django.views.generic import TemplateView #connecting to django.

from django.contrib.auth import views as auth_views #user authentication.


urlpatterns = [
	path('admin/', admin.site.urls), #admin for your admin side of things
    path('api-auth/', include('rest_framework.urls',   namespace='rest_framework')), #the route for your api request. your requests will be localhost://8000/api-auth/...  maybe it's for your login/logout?
    #react will use this route to talk to the database.

    path('api/', include('showtime.urls')), #this is where it goes for the urls.  however, the errors is that I "exceeded maximum recursion depth exceeded while calling a Python object."

    path('', include('showtime.urls')),
    path('accounts/', include('django.contrib.auth.urls')),

    

    # path('', include('/build/index.html')),

    #this is what actually connects everything.
    # re_path('.*', TemplateView.as_view(template_name='index.html')),
]


#note: django doesn't deal with 404 errors.
