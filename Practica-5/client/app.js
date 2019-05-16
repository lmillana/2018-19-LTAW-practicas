

var ipcRenderer = require('electron').ipcRenderer;

function main(){
  console.log('Estoy en APP.js..')

  //-- Creamos el WebSocket:
  var receiving = false;
  //-- Obtener los elementos del interfaz, del DOM:
  let msg = document.getElementById('msg')
  let display = document.getElementById('display')

  msg.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
      if (msg.value != "") {
        receiving = true;
        ipcRenderer.send('send_chat_msg', msg.value);
        console.log('-- Mensaje enviado!')
        msg.value = "";
      }
    }
  })

  ipcRenderer.on('new_message', (event,msg) => {
    if (!receiving){
      receiving = true;
    } else {
      display.innerHTML += msg;
      display.innerHTML += ("\n");
    }
  });
}
