// SERVER.js
// This file opens the request file and returns the content to the client.
// If anything goes wrong, throw a 404 error.
var http = require('http');
var url = require('url');
var fs = require('fs');

const PORT = 8080

console.log("Arrancando servidor en el puerto " + PORT)

//req, res: PETICIÓN, RESPUESTA:
http.createServer(function (req, res) {
  console.log("--> Petición RECIBIDA!");

  var q = url.parse(req.url, true);
  var filename = "." + q.pathname; //filename: ./xxx.// XXX:

  if (q.pathname == "/"){
    filename += "/index.html";
  }

  /*-- Leer las cookies
  var cookie = req.headers.cookie;
  console.log("Cookie: " + cookie)

  switch (q.pathname) {

    //-- Pagina principal
    case "/login.html":
      content = "Bienvenido a mi tienda "

      //-- No hay ninguna cookie
      if (!cookie) {
        content += "\n No te conozco... Registrate!\n"
        content += "Accede a /login"

      //-- Hay definida una Cookie.
      } else {
        content += "leyremc"
      }

      res.statusCode = 200;
      break;

    //-- Pagina de acceso
    case "/login":
      content = "Registrado! Cookie enviada al navegador!"

      //-- ESTABLECER LA COOKIE!!
      res.setHeader('Set-Cookie', 'user=leyremc')
      break

    //-- Se intenta acceder a un recurso que no existe
    default:
      content = "Error";
      res.statusCode = 404;
  } */

  fs.readFile(filename, function(err, data){
    // Peticion:
    console.log("Recurso solicitado(URL): " + filename);
    console.log();

    if (err){
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end(" 404   NOT FOUND");
    } else {
      // Tipo MIME por defecto:
      //var mime = "text/html";

      // Mensaje de respuesta:
      //res.writeHead(200, {'Content-Type': 'mime'});
      res.write(data);
      res.end();
    }
  });
}).listen(8080);

// NAVEGADOR LOCAL: http://localhost:8080/index.html

// Imprimir en la misma URL:
//res.end(req.url);
