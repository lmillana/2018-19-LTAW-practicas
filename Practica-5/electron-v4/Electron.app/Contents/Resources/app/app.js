
function main(){
  console.log('Estoy en APP.js..')

  //-- Obtener los elementos del interfaz, del DOM:
  let button = document.getElementById('button')
  let display = document.getElementById('display')

  //-- Cuando se aprieta el botón...
  button.onclick = () => {
    //-- Sacar mensaje en la consola:
    console.log('Click!')

    //--Añadir la cadena al párrafo:
    display.innerHTML += 'holi' + '<br>'
  }
}
