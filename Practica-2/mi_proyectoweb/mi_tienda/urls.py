# Punto de entrada principal:

from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^$', views.home_view),
    url(r'^admin/', admin.site.urls),
    #url(r'^$', views.london_view),
    #url(r'^$', views.pisa_view),
    #url(r'^$', views.paris_view),
]
