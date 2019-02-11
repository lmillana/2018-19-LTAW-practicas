// SERVER.js
// This file opens the request file and returns the content to the client.
// If anything goes wrong, throw a 404 error.

var http = require('http');
var url = require('url');
var fs = require('fs');

console.log("Arrancando servidor...")

//req, res: PETICIÓN, RESPUESTA:
http.createServer(function (req, res) {
  console.log("--> Petición RECIBIDA!");

  var q = url.parse(req.url, true);
  var filename = "";
  if (q.pathname == "/"){
    filename += "index.html";
  } else {
    filename = q.pathname;
  }

  fs.readFile(filename, function(err, data){
    console.log("Recurso solicitado(URL): " + filename);
    console.log();

    if (err){
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end(" 404   NOT FOUND");
    } else {
      // Tipo MIME por defecto:
      var mime = "text/html";
      var tipo = filename.split(".")[1];

      // Es una IMG:
      if (['png', 'jpg'].includes(tipo)){
        mime = "image/" + tipo;
      }

      // Es un CSS:
      if (tipo == "css"){
        mime = "text/css";
      }

      // Mensaje de respuesta:
      res.writeHead(200, {'Content-Type': mime});
      res.write(data);
      res.end();
    }
  });
}).listen(8080);

// NAVEGADOR LOCAL: http://localhost:8080/index.html

// Imprimir en la misma URL:
//res.end(req.url);
