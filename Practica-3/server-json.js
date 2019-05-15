var http = require('http');
var url = require('url');
var fs = require('fs');

const PORT = 8080

console.log("Arrancando servidor en puerto " + PORT)

//-- Configurar y lanzar el servidor. Por cada peticion recibida
//-- se imprime un mensaje en la consola
http.createServer((req, res) => {

  //-- Mostrar en la consola el recurso al que se accede
  var q = url.parse(req.url, true);
  console.log("Petición: " + q.pathname)

  //-- Segun el recurso al que se accede
  switch (q.pathname) {

    //-- Pagina principal
    case "/":
      fs.readFile("./index.html", function(err,data){
        //-- Mensaje de respuesta:
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
        return
      });
      /*content = `
      <!DOCTYPE html>
      <html lang="en" dir="ltr">
        <head>
          <meta charset="utf-8">
          <title>JSON Test</title>
        </head>
        <body>
          <p>Prueba de acceso a fichero JSON</p>
          <p>Accede al recurso <a href="myquery">/myquery</a> para
          recibir un objeto JSON con información</p>
        </body>
      </html>`

      res.statusCode = 200; */
      break;

    //-- Programa cliente:
    case "/client.js":
      fs.readFile('./client.js', function(err,data) {
        //-- Generar mensaje de respuesta:
        res.writeHead(20, {'Content-Type': 'application/javascript'});
        res.write(data);
        res.end();
        return
      })
      break;



    //-- Acceso al recurso JSON
    case "/myquery":

      //-- Contenido en formato JSON
      //-- Es lo que se va a devolver en la petición
      content = `
      {
        "productos": ["FPGA", "RISC-V", "74ls00"]
      }
      `
      //-- Generar el mensaje de respuesta
      //-- IMPORTANTE! Hay que indicar que se trata de un objeto JSON
      //-- en la cabecera Content-Type
      res.setHeader('Content-Type', 'application/json')
      res.write(content);
      res.end();
      return
      break

    //-- Se intenta acceder a un recurso que no existe
    default:
      content = "Error";
      res.statusCode = 404;
      //-- Generar mensaje de respuesta:
      res.setHeader('Content-Type', 'text/html')
      res.write(content);
      res.end();
  }

}).listen(PORT);
