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
  var filename = "." + q.pathname; //filename: ./xxx.// XXX:
  fs.readFile(filename, function(err, data){
    console.log("Recurso solicitado(URL): " + filename);
    console.log();

    if (err){
      res.end("404 NOT FOUND");
    } else {
      res.write(data);
      res.end();
      console.log("--> Peticion ATENDIDA!");
    }
  });
}).listen(8080);

// NAVEGADOR LOCAL: http://localhost:8080/xxx

// Imprimir en la misma URL:
//res.end(req.url);
