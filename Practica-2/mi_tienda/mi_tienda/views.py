"""mi_tienda URL Configuration """

from django.http import HttpResponse
from django.template import Template, Context
from django.template.loader import get_template
from django.shortcuts import render

def mi_funcion(request):
    html = "Hola! Mi primera URL!"

    return HttpResponse(html)

def mi_producto(request, param):
    numero = int(param)
    html = "Acceso a producto: %i" %numero;
    return HttpResponse(html)

PLANTILLA = """
<!Doctype html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Saludo</title>
  </head>
  <body>
    <p>Bienvenido a mi tienda, {{user}}</p>
  </body>
</html>
"""

"""
def saludo(request):
    # -- Procesar la plantilla:
    t = Template(PLANTILLA)

    # -- Crear el contexto: nombre de usuario real
    c = Context({'user': 'Lerele'})

    # -- Obtener página HTLM final:
    html = t.render(c)
    return HttpResponse(html)
"""

def index(request):
    """fp = open('/Users/leyremc/github/2018-19-LTAW-practicas/Practica-2/mi_tienda/mi_tienda/main.html')
    t = Template(fp.read())
    fp.close()
    c = Context({'user': ' lmillana'})

    Otra opción de FUNCIONAMIENTO:
    t = get_template('main.html')
    c = {'user': ' lmillana'}

    html = t.render(c)
    return HttpResponse(html) """


    """ Mucho más simplificado! """
    return render (request, 'main.html',{'user': ' lmillana'})
