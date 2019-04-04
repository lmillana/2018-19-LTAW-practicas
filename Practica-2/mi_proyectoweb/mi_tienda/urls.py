# Punto de entrada principal:

from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^$', views.home_view),
    url(r'^admin/', admin.site.urls),
    url(r'^index', views.home_view),
    url(r'^london', views.london_view),
    url(r'^pisa', views.pisa_view),
    url(r'^paris', views.paris_view),
    url(r'^search/$', views.search_view),
]
