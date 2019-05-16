
const app = require('express')();
const http = require('http').Server(app);
var io = require('socket.io')(http);
var clients = 0;


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


app.get('/style.css', function(req, res){
  res.sendFile(__dirname + '/css/micss.css');
  console.log("CSS requested");
  console.log("___________\n");
});


http.listen(4500, function(){
  console.log('Listening on *:4500');
  console.log("___________");
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getDate(){
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  return today = dd + '/' + mm + '/' + yyyy;
}

//  Handling events.
io.on('connection', function(socket){
  clients += 1;
  console.log('--> New user connected!');
  // Como máximo: 40 usuarios
  var userid = getRandomInt(1,40);
  socket.emit('Welcome', 'SERVER: Welcome new user!\n');
  io.emit('new_message', 'SERVER: New user joined the chat!\n');
  //-- Si un usuario se desconecta:
  socket.on('disconnect', function(){
    clients -= 1;
    console.log('--> User disconnected!');
  });


  socket.on('new_message', msg => {
    console.log("MESSAGE RECEIVED FROM USER"+ userid + ": "+ msg);
    if(msg == "/help"){
      var ans = "SERVER:    /help = Show commands.   /list = Show how many users are connected.\n"
              + "/hello = I salute to you. /date = I show you the date.\n"
      socket.emit('new_message', ans);
      console.log('--> Sending help to an user.');
    }else if (msg == "/list") {
      var ans = "SERVER: " + clients + " connected users.\n"
      socket.emit('new_message', ans);
      console.log('--> Sending list of connected users.');
    }else if (msg == "/hello") {
      var ans = "SERVER: Hello USER" + userid + "! I'm the server.\n"
      socket.emit('new_message', ans);
      console.log('--> Sending a salute to user' + userid);
    }else if (msg == "/date") {
      var today = getDate();
      var ans = "SERVER: Today is " + today + "\n"
      socket.emit('new_message', ans);
      console.log('--> Sending date to an user.');
    }else{

      io.emit('new_message', "USER" + userid + ": " + msg);
    }
  });
});
