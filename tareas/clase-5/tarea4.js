//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $items = document.querySelectorAll('li')
const items = []
for (i = 0; i < $items.length; i++) {
    items.push(Number($items[i].textContent))
}
//console.log(arrayLi)

function promedio(array) {
    promedio = 0
    for (i = 0; i < array.length; i++) {
        promedio += array[i]
    }
    promedio = promedio / array.length
    return promedio
}

function maxNumero(array) {
    let maxNumero = -Infinity
    for (i = 0; i < array.length; i++) {
        if (maxNumero < array[i]) {
            maxNumero = array[i]
        }
    }
    return maxNumero
}

function minNumero(array) {
    let minNumero = Infinity
    for (i = 0; i < array.length; i++) {
        if (minNumero > array[i])
            minNumero = array[i]
    }
    return minNumero
}

function maxFrecuency(array) { //this little boy has an incomplete logic, it only approaches a proper result. If another number shares the frequency only the first one will be registered. 
    let mostFrequent = 0
    var storage = 0


    for (i = 0; i < array.length - 1; i++) {
        let frecuency = 0

        for (j = 1; j < array.length; j++) {

            if (array[i] === array[j]) {
                frecuency++
            }

            if (frecuency > mostFrequent) {
                mostFrequent = frecuency
                storage = array[i]
            }

        }
    }
    return storage
}

const $numeroMasAlto = document.querySelector('#numero-mas-alto')
const $numeroMasBajo = document.querySelector('#numero-mas-bajo')
const $numeroMasFrecuente = document.querySelector('#numero-mas-frecuente')
const $promedio = document.querySelector('#numero-promedio')

$numeroMasAlto.innerText = maxNumero(items)
$numeroMasBajo.innerText = minNumero(items)
$promedio.innerText = promedio(items)
$numeroMasFrecuente.innerText = maxFrecuency(items)

