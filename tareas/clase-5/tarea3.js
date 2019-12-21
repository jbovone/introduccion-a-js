

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


let $calcularTiempoTotal = document.querySelector('#boton-calcular-tiempo-total')
let segundosAcumulados = 0
let minutosAcumulados = 0
let horasAcumuladas = 0

$calcularTiempoTotal.onclick = function () {
    
  let $segundos = Number(document.querySelector('#segundos').value)
  let $minutos = Number(document.querySelector('#minutos').value)
  let $horas = Number(document.querySelector('#horas').value)
    
    
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
}

//la hora total me dio 10 10 1 a la clase 5.
