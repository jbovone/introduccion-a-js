//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

let arrayNumeros = document.querySelectorAll('li')
//console.log(arrayNumeros)


for (i=0 ; i<arrayNumeros.length ; i++) {console.log(arrayNumeros[i].innerText)}
//Fabricio: ¿como seria la mejor manera de usar esto como un array normal Y que quede conectado al DOM? trate de leer por ahi pero tiran metodos distintos.
//bueno ahora que me acuerdo la clase 7 no la vi.