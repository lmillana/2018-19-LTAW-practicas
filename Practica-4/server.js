

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var users = 0;
var nicks = [];

//-- Puerto donde lanzar el servidor:
const PORT = 3000

//-- Servir la pagina principal:
app.get('/', (req,res) => {
  //res.send('Probando expres...')
  res.sendFile(__dirname + '/index.html');
})

//-- Servir el CSS:
app.get('/style.css', (req,res) => {
  res.sendFile(__dirname + '/style.css');
})

//-- Servir el cliente javascript:
app.get('/chat-client.js', (req,res) => {
  res.sendFile(__dirname + '/chat-client.js');
})

//-- Lanzar el servidor:
http.listen(PORT, function(){
  console.log('server on port: ' + PORT);
  console.log("");
});

//-- Nueva conexión recibida: nuevo cliente!
io.on('connection', function(socket){
  console.log('new user connected');
  users++;

  socket.on('new_nick', user_nick => {
    nicks += user_nick + ',' + '\n';

    //-- Mensaje de bienvenida:
    socket.emit('new_message', 'Welcome to the chat ' + user_nick);

    //-- Emitir un mensaje a todos los clientes:
    io.emit('new_message', 'new user connected: ' + user_nick);
  });


  //-- Detectar si se ha recibido mensaje del cliente:
  socket.on('new_message', msg => {

    //-- Emitir un mensaje a todos los clientes:
    io.emit('new_message', msg);
    //-- Notificarlo en la consola del servidor:
    console.log('Mensaje recibido: ' + msg)

    msg = msg.split(" ")[1]

    switch(msg){
      case '/help':
        msg = 'Try to:' + '<br>' + '/help' + '<br>' + '/list' +
        '<br>' + '/hello' + '<br>' + '/date';
        socket.emit('new_message', msg);
        break;

      case '/list':
        //-- Imprime número de usuarios y nicks:
        msg = 'Connected users: '+ users + '<br>' + nicks;
        socket.emit('new_message', msg);
        break;

      case '/hello':
        msg = "Server message: What's up?" + '<br>' + '<br>' ;
        socket.emit('new_message', msg);
        break;

      case '/date':
        var f = new Date();
        msg = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear()
        socket.emit('new_message', 'Today is ' + msg);
        break;

      default:
        break;
    }

    //-- Detectar si el usuario se ha desconectado:
    socket.on('disconnect', function(){
      console.log('user disconnected');
      users = users - 1;
    });
  });
});
