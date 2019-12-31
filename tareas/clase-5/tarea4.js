//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $nodeLi = document.querySelectorAll('li')
const arrayLi = []
for (i = 0; i < $nodeLi.length; i++) {
    arrayLi.push(Number($nodeLi[i].textContent))
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

function numeroMasFrecuente(array) { //this little boy has an incomplete logic, it only approaches a proper result. If another number shares the frequency only the first one will be registered. 
    let mark = 0
    var storage = 0


    for (i = 0; i < array.length - 1; i++) {
        let index = 0

        for (e = 1; e < array.length; e++) {

            if (array[i] === array[e]) {
                index = index + 1
            }

            if (index > mark) {
                mark = index
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

$numeroMasAlto.innerText = maxNumero(arrayLi)
$numeroMasBajo.innerText = minNumero(arrayLi)
$promedio.innerText = promedio(arrayLi)
$numeroMasFrecuente.innerText = numeroMasFrecuente(arrayLi)

