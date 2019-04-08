
const electron = require('electron');

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
  win.loadFile('index.html')
})
