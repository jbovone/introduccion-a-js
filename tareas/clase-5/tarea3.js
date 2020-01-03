

//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.


/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*/


const $calcularTiempoTotal = document.querySelector('#boton-calcular-tiempo-total')
const $tiempoTotal = document.querySelector('#tiempo-total')

let segundos = 0
let minutos = 0
let horas = 0
let dias = 0

$calcularTiempoTotal.onclick = function () {
  
  document.querySelector('#fuera-de-rango').className = 'hidden'
  
  if (Number(document.querySelector('#segundos').value) > 59) {
    return document.querySelector('#fuera-de-rango').className = '' + event.preventDefault()
  }
  else if (Number(document.querySelector('#segundos').value) < 0) {
    return document.querySelector('#fuera-de-rango').className = '' + event.preventDefault()
  }
  else if (Number(document.querySelector('#minutos').value) > 59) {
    return document.querySelector('#fuera-de-rango').className = '' + event.preventDefault()
  }
  else if (Number(document.querySelector('#minutos').value) < 0) {
    return document.querySelector('#fuera-de-rango').className = '' + event.preventDefault()
  }
  else if (Number(document.querySelector('#horas').value) > 59) {
    return document.querySelector('#fuera-de-rango').className = '' + event.preventDefault()
  }
  else if (Number(document.querySelector('#horas').value) < 0) {
    return document.querySelector('#fuera-de-rango').className = '' + event.preventDefault()
  }


  segundos += Number(document.querySelector('#segundos').value)
  minutos += Number(document.querySelector('#minutos').value)
  horas += Number(document.querySelector('#horas').value)

  if (segundos > 59) {
    minutos += Math.floor(segundos / 60)
    segundos = segundos % 60

  }

  if (minutos > 59) {
    horas += Math.floor(minutos / 60)
    minutos = minutos % 60
  }

  if (horas > 23) {
    dias += Math.floor(horas / 24)
    horas = horas % 24
  }

 
  $tiempoTotal.textContent =
    `El tiempo total es: ${dias} dias   ${horas}hs : ${minutos}min : ${segundos}seg `


  document.querySelector('#segundos').value = 0
  document.querySelector('#minutos').value = 0
  document.querySelector('#horas').value = 0
}

const $reset = document.querySelector('#reset')

$reset.onclick = function(){  
  document.querySelector('#fuera-de-rango').className = 'hidden'
  $tiempoTotal.textContent = ''

  document.querySelector('#segundos').value = 0
  document.querySelector('#minutos').value = 0
  document.querySelector('#horas').value = 0
  

  segundos = 0
  minutos = 0
  horas = 0
  dias = 0
}

  /*   
    segundosAcumulados = segundosAcumulados + $segundos
    minutosAcumulados = minutosAcumulados + $minutos
    horasAcumuladas = horasAcumuladas + $horas 
     
  
  
      if (segundosAcumulados > 59) {
  
        segundosAcumulados = segundosAcumulados - 60;
        minutosAcumulados = minutosAcumulados + 1;
      }
  
  
      if (minutosAcumulados > 59) {
  
        minutosAcumulados = minutosAcumulados - 60;
        horasAcumuladas = horasAcumuladas + 1;
  
      }
      
  
      let $tiempoTotal = document.querySelector('#tiempo-total')
  
       $tiempoTotal.textContent = `${horasAcumuladas} ${minutosAcumulados} ${segundosAcumulados} `
  
  */


//la hora total me dio 10 10 1 a la clase 5.
