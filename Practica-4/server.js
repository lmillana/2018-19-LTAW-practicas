

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//-- Puerto donde lanzar el servidor:
const PORT = 3000

//-- Servir la pagina principal:
app.get('/', (req,res) => {
  //res.send('Probando expres...')
  res.sendFile(__dirname + '/index.html');
  console.log('Página principal: /')
})

//-- Servir el cliente javascript:
app.get('/chat-client.js', (req,res) => {
  res.sendFile(__dirname + '/chat-client.js');
  console.log('Fichero js solicitado')
})

//-- Lanzar el servidor:
http.listen(PORT, function(){
  console.log('Servidor lanzado en puerto ' + PORT);
});

//-- Nueva conexión recibida: nuevo cliente!
io.on('connection', function(socket){
  console.log('--> Usuario Conectado!!');

  //-- Detectar si el usuario se ha desconectado:
  socket.on('disconnect', function(){
    console.log('--> Usuario Desconectado!');
  });

  //-- Detectar si se ha recibido mensaje del cliente:
  socket.on('new_message', msg => {
    //-- Notificarlo en la consola del servidor:
    console.log('Mensaje recibido: ' + msg)

    //-- Emitir un mensaje a todos los clientes:
    io.emit('new_message', msg);
  });
});
