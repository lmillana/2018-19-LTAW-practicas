function main(){
  console.log("Hola!!!!")

  //-- Crear un socket.io. Se establece la conexión con el servidor:
  var socket = io();

  //-- Obtener los elementos de la interfaz:

  //-- Boton de envio de mensaje:
  var send = document.getElementById('send')

  //-- Párrafo para mostrar mensajes recibidos:
  var display = document.getElementById('display')

  //-- Caja con el mensaje a enviar:
  var msg = document.getElementById('msg')

  //-- Se envia el mensaje al pulsar INTRO:
  msg.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
      event.preventDefault();
      document.getElementById('send').click();
    }
  })

  //-- Cuando se aprieta el botón de enviar:
  send.onclick = () => {
    socket.emit('new_message', msg.value);
    msg.value = "";
  }

  //-- Cuando se reciba un mensaje del servidor:
  socket.on('new_message', msg => {
    display.innerHTML += msg + '<br>';
  });
}
