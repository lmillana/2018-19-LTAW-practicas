# Creando la base de datos:

from __future__ import unicode_literals

from django.db import models

# Create your models here.
class London (models.Model):
    nombre= models.CharField(max_length=200)
    precio = models.FloatField()
    stock = models.IntegerField()

    def __str__(self):
        return (self.nombre)


class Pisa (models.Model):
    nombre = models.CharField(max_length=200)
    precio = models.FloatField()
    stock = models.IntegerField()

    def __str__(self):
        return (self.nombre)


class Paris (models.Model):
    nombre = models.CharField(max_length=200)
    precio = models.FloatField()
    stock = models.IntegerField()

    def __str__(self):
        return (self.nombre)
