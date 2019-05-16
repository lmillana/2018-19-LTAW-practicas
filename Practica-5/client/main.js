
const electron = require('electron');
var ipcMain = electron.ipcMain;
const io = require('socket.io-client');
const socket = io('http://localhost:3000');

console.log('Arrancando electron... ')

//-- Punto de entrada:
electron.app.on('ready', ()=> {
  console.log('Evento READY!')

  //-- Creamos la ventana principal con menú por defecto:
  win = new electron.BrowserWindow({
    //-- Propiedades:
    width: 600,
    height: 400
  })

  //-- Para eliminar el menú:
  //display.setMenuBarVisibility(false)

  //-- Cargar interfaz gráfica (index.html):
  win.loadFile('index.html');

  win.on('close', function() {
    console.log("Terminando electron...")
    win.removeAllListeners('close');
 });

 win.webContents.once('dom-ready', () => {

  const socket = io('http://localhost:4500');

  socket.on('server_message', msg =>{
    console.log(msg)
    win.webContents.send('server_message', msg);

  });

  socket.on('Welcome', msg =>{
    console.log(msg)
    win.webContents.send('Welcome', msg);
  });

  socket.on('new_message', msg => {
    win.webContents.send('new_message', msg);
  });

  ipcMain.on('send_chat_msg', (event,payload) =>{
    socket.emit('new_message', payload);
  });

  });
})
