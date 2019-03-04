
# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse

from mi_tienda.models import London
from mi_tienda.models import Pisa
from mi_tienda.models import Paris

# Create your views here.
def home_view (request):
    return render(request, "index.html", {})

def london_view (request):
    return render(request, "london.html", {})

def pisa_view (request):
    return render(request, "pisa.html", {})

def paris_view (request):
    return render(request, "paris.html", {})

"""
def list(request):
    objects = London.objects.all()
    html = "<p> Listado de articulos </p>"
    for elt in objects:
        print(elt.name)
        html += '<p>'+ elt.name + ' ' + str(elt.precio) + '<p>'
    return HttpResponse(html)
"""
