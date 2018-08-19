"""showtime_django URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
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
from django.urls import path, re_path #path for reg ex?
from django.conf.urls import include

#from folder showtime . views is views.py
from showtime.views import renderReact

from django.views.generic import TemplateView
# urlpatterns = [
#   path('admin/', admin.site.urls),
#   # path('api/', include('mynewapp.urls')),
#   re_path('.*', TemplateView.as_view(template_name='index.html')),
# ]


#your admin login and logout routes. I don't think it's for your user though.
urlpatterns = [
	path('admin/', admin.site.urls), #admin for your admin side of things
    path('api-auth/', include('rest_framework.urls',   namespace='rest_framework')), #the route for your api request. your requests will be localhost://8000/api-auth/...  maybe it's for your login/logout?
    #react will use this route to talk to the database.
    path('', include('showtime.urls')), #this is where it goes for the urls.
    re_path('.*', TemplateView.as_view(template_name='index.html')),
]

# urlpatterns += [
#     #the path that's conecting django to react. make this last
#     #use a regular expression to catch every path possible.
#     #note: django doesn't deal with 404 errors. React will have to.
#     path(r'(?P<path>.*)', renderReact.as_view(), name = 'home')
# ]
