/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
const $ingresar = document.querySelector('#ingresar')
const $calcularButton = document.querySelector('#boton-calcular')
const $reset = document.querySelector('#reset')

$ingresar.onclick = function (event) {
    const $integrantes = document.querySelector('#numero-integrantes')
    const integrantes = Number($integrantes.value)
    
    if (integrantes<=0){ 
        reset()

    } 

    borrarIntegrantes()
    crearIntegrantes(integrantes)
    

    event.preventDefault()

}


$reset.onclick = function reset() {
    borrarIntegrantes();

    const $resultado = document.querySelector('#resultado')
    $calcularButton.className = 'hidden'
    $resultado.className = 'hidden'


}


function borrarIntegrantes(){
    
    const $integrantes = document.querySelectorAll('.integrantes-input')
    const $integrantesLabel = document.querySelectorAll('.integrantes-label')
    const $separador = document.querySelectorAll('.lines')
    
    for(i=0 ; i<$integrantes.length ; i++){
        $integrantes[i].remove()
        $integrantesLabel[i].remove()
        $separador[i].remove()
    }
   
}



function crearIntegrantes(evento) {
    
    const $integrantesForm = document.querySelector('#integrantes-form')
    

    for (i = 1; i <= evento; i++) {
        const $integrantesLabel = document.createElement('label')
        $integrantesLabel.innerText = `integrante #${i}`
        $integrantesForm.appendChild($integrantesLabel)
        $integrantesLabel.className = 'integrantes-label'

        const $integrantesInput = document.createElement('input')
        $integrantesInput.type = 'number'
        $integrantesForm.appendChild($integrantesInput)
        $integrantesInput.className = 'integrantes-input'

        const $separador = document.createElement('hr')
        $separador.className = 'lines'
        $integrantesForm.appendChild($separador)
    }
    
    $calcularButton.className = ''

}





$calcularButton.onclick = function calcular() {
    const $integrantes = document.querySelectorAll('.integrantes-input')
    const integrantes = []
    
    for (i = 0; i < $integrantes.length; i++) {
        integrantes.push(Number($integrantes[i].value))
    }

    const $resultado = document.querySelector('#resultado')
    const $mayorEdad = document.querySelector('#mayor-edad')
    const $menorEdad = document.querySelector('#menor-edad')
    const $promedioEdad = document.querySelector('#promedio-edad')
    
    $resultado.className = ''
    $mayorEdad.textContent = calcularMayorEdad(integrantes)
    $menorEdad.textContent = calcularMenorEdad(integrantes)
    $promedioEdad.textContent = calcularEdadPromedio(integrantes)
    
    return false
}



function calcularMayorEdad(array){
    let mayorEdad = 0
    for (i=0 ; i<array.length ; i++){
        if (mayorEdad < array[i]){
            mayorEdad = array[i]
        }
    }
    return mayorEdad
}


function calcularMenorEdad(array){
    let menorEdad = Infinity
    for (i=0 ; i<array.length ; i++){
        if (menorEdad > array[i]){
            menorEdad = array[i]
        }
    }
    return menorEdad
}

function calcularEdadPromedio(array){
    let edadPromedio = 0
    for(i=0 ; i<array.length ; i++){
        edadPromedio += array[i] 
    }
    edadPromedio = edadPromedio/array.length
    
    return edadPromedio 
}

