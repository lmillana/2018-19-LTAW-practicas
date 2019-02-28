

from django.db import models

# Create your models here

class profesores(models.Model):
    nombre = models.CharField(max_length=15)
    apellido  = models.CharField(max_length=30)
    asignatura = models.CharField(max_length=30)
    options = (('F', 'Femenino'), ('M', 'Masculino'))
    sexo = models.CharField(max_length=1, choices= options)

    def NombreCompleto(self):
        completo = "{0} {1}"
        return completo.format(self.nombre, self.apellido)

    def __str__(self):
        return self.NombreCompleto()

class disciplina(models.Model):
    nombre = models.CharField(max_length=15)
    # Profesor que la imparte:
    nom_profe = models.CharField(max_length=15)
    dia = models.CharField(max_length=9)
    # Si está disponible la asignatura:
    estado = models.BooleanField(default=True)
    precio = models.PositiveSmallIntegerField()

    def __str__(self):
        completo = "{0} {3}"
        return completo.format(self.nombre, self.estado)

class registro(models.Model):
    # Registra a la hora a la que se solicita la petición:
    fecha = models.DateTimeField(auto_now_add=True)

    def __init__(self):
        return(self.fecha)
