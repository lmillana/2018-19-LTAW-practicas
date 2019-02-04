// SERVER.js
var http = require('http');

console.log("Arrancando servidor...")

//req, res: PETICIÓN, RESPUESTA:
http.createServer(function (req, res) {
  console.log("--> Petición RECIBIDA!");

  console.log("Recurso solicitado(URL): " + req.url);
  // Imprimir en la misma URL:
  //res.end(req.url);
  console.log();
  console.log("--> Peticion ATENDIDA!");

}).listen(8080);

// NAVEGADOR LOCAL: http://localhost:8080/
