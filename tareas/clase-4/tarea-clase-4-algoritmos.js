//Link original y créditos a https://github.com/CodeGuppyPrograms/CodingChallenges (contiene las respuestas).

/*
Estos desafíos de coding están enfocados para los principiantes, por lo tanto las soluciones fueron implementadas
usando  elementos de programación simples y clásicos.
*/


//Desafío de programación #1: Imprimí los números del 1 al 5
console.log('#1: Imprimí los números del 1 al 5')
for (i = 5; i > 0; i = i - 1) { console.log(i) }
console.log('EMPECEMOS!!!')


//Desafìo de programación  #2: Imprimí los números impares del 1 al 20
console.log('#2: Imprimí los números impares del 1 al 20')
for (i = 1; i < 20; i = i + 2) { console.log(i) }


//Desafío de programación #3: Imprimí la tabla de multiplicación del 7
console.log('#3: Imprimí la tabla de multiplicación del 7')
for (i = 0; i <= 70; i = i + 7) { console.log(i) }


//Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9 /2x1=2 2x2
console.log('#4: Imprimí todas las tablas de multiplicación del 1 al 9 /2x1=2 2x2')

function tablaDeMultiplicacion(x) {
  let factor = 1

  while (factor <= 10) {
    (console.log(`${x}x${factor}=${x * factor}`)), factor = factor + 1
  }
  factor = 1
}

tablaDeMultiplicacion(3)

//etc no? --la linea 42 se me escapo al principio, descubrirla fue coool--
//al principio puse pseudo: function NAME(x) {for (i=0,f=0; i<=100(???),f<=10; i = i+x,f=f+1) {console.log(x + 'x' + (f) + '=' + (i))}
//me parecio mas lindo asi.


console.log('#5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.')
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sumatoriaNumeros = numeros[0] + numeros[1] + numeros[2] + numeros[3] + numeros[4] + numeros[5] + numeros[6] + numeros[7] + numeros[8] + numeros[9]

console.log(numeros + ' SumaArray = ' + sumatoriaNumeros)
//const sumatoriaNumeros2 = numeros [0] + [1] + [3] @console.log(sumatoriaNumeros2) = 113??? //nota a posterio ya no se si es replicable.


//Desafío de programación #6: Calcula 10! (10 factorial)
let diezFactorial = 10
for (i = 10; i > 1; i = i - 1) { diezFactorial = i * diezFactorial }
console.log('#6 DIEZFACTORIAL ES: ' + diezFactorial)


//Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30
console.log('#7: Calcula la suma de todos los números impares mayores que 10 y menores que 30')
let sumatoriaNumerosImpares = 0
for (i = 11; i < 30; i = i + 2) { sumatoriaNumerosImpares = sumatoriaNumerosImpares + i, console.log(`${i} = ${sumatoriaNumerosImpares} +`) }



//Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit
function convierteCelciusAFahrenheit(C) { return C * 1.8 + 32 }

console.log('#8: 30 Celsius es ' + convierteCelciusAFahrenheit(30) + ' Fahrenheit') //86


//Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius
function convierteFahrenheitACelcius(F) { return [F - 32] / 1.8 }

console.log('#9: 86 Fahrenheit es ' + convierteFahrenheitACelcius(86) + ' Celsius')


//Desafío de programación #10: Calcula la suma de todos los números en un array de números
function sumarArray(Array) {
  let sumaArray = 0
  for (i = 0; i < Array.length; i = i + 1) {

    sumaArray = sumaArray + (Array[i])

  }
  return sumaArray
}

console.log('#10 Suma Array: ' + sumarArray(numeros))

//Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)

function arrayPromedio(Array) {
  let P = sumarArray(numeros) / Array.length
  return console.log('#11 Promedio Array: ' + P)
}

arrayPromedio(numeros)

//Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos
console.log('#12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos')

let arrayNumerosRandom = [100, 3, 36, -11, 76, -86, 2]


function extraeNumerosPositivosDeArray(Array) {

  let arrayDeNumerosPositivos = []

  for (i = 0; i <= Array.length; i = i + 1) {

    if (Array[i] > 0) {
      arrayDeNumerosPositivos.push(Array[i])
    }
  }
  return arrayDeNumerosPositivos
}

console.log(arrayNumerosRandom)
console.log('Array de Positivos: ' + extraeNumerosPositivosDeArray(arrayNumerosRandom))


//Desafío de programación #13: Find the maximum number in an array of numbers
let maxValue = []

function findMaxArrayValue(Array) {

  for (i = -1, c = 0; i <= Array.length, c <= Array.length; i = i + 1, c = c + 1) {
    if (Array[c] >= Array[i] && Array[c] > maxValue) { maxValue = Array[c] }
    if (Array[i] >= Array[c] && Array[i] > maxValue) { maxValue = Array[i] }
  }
}
findMaxArrayValue(arrayNumerosRandom)
/*viendo esta funcion un par de dias mas tarde, la primer iteraccion en i probablemente sea undefined 
y la logica me parece que puede simplificarse bastante, pero lo dejo para que lo veas vos profe*/
console.log('#13 VALOR MAXIMO DEL ARRAY ES: ' + maxValue)


//Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión
//Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión
sucecionFibonacci = [0, 1, 1, 2, 3, 4, 5, 8, 13, 21, 34, 55]
console.log('14# Fibonacci:' + sucecionFibonacci)

function sucesionFibonacci(F) {

  let index = 0
  let A = 1
  let acumuladorA = 0
  let acumuladorB = 0


  while (index < F) {
    (index = index + 1, A = A * -1);

    if (A = 1) { acumuladorA = acumuladorA + acumuladorB }
    if (A = -1) { acumuladorB = acumuladorA - acumuladorB }
    if (acumuladorA + acumuladorB === 0) { acumuladorB = 1 }

    if (index === F) return console.log(`Fibonacci en ${index}: ${acumuladorA}`)
  }
}

function sucesionFibonacciAll(cantidad) { //porque why not?
  for (i = 1; i <= cantidad; i = i + 1) { sucesionFibonacci(i) }
}

console.log('#15')
sucesionFibonacciAll(15)


//Desafío de programación #16: Crear una función que dado un número retorne un Boolean (true/false) dependiendo si es primo o no.
function verificaSiEsPrimo(P) {
  let multiplos = 0
  let i = 0

  while (i <= P) {
    i = i + 1;

    if (P % i === 0) { multiplos = multiplos + 1 }
    if (multiplos > 2) { return P = false }
  }
  if (multiplos === 2) { return P = true }
}

// linea 174// "return" parece ser inutil, pero si entendi bien no nesesitamos que la comprobacion siga hasta el final al pedo.
//return console.log(false + multiplos) deberia imprimir 3 independepndientemente de los multiplos que tiene el numero.

console.log('#16 Primo = ' + verificaSiEsPrimo(4))



//Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo
//Ejemplo:

function RGN(numeroIntergroEntreCeroYNumero) {
  RGN = Math.floor(Math.random() * numeroIntergroEntreCeroYNumero)
  return RGN
}
/*esta funcion me la robe de internet, en la version original otro Math.floor envolvia el parametro (?).
La autoitinerancia del metodo Math.random me genero algunas dudas en su uso como funcion. Bueno, ahora descubri que usar esto mas de una vez
devulve error, bah! ...tengo algunas ideas sobre como crear mi propio generador de numeros random*/

function sumarLosDigitos(numero) {

  let digitsStorage = []

  for (i = numero; i > 0; i = Math.floor(i / 10)) {

    let digits = i % 10
    digitsStorage.push(digits)

  }
  digitsStorage.reverse()
  console.log(digitsStorage)
  console.log('#17 SUMA DIGITOS = ' + sumarArray(digitsStorage))
}
sumarLosDigitos(RGN(200))



//Desafío de programación #18: Imprimir los primeros 100 números primos
console.log('#18: Imprimir los primeros 100 números primos')
//storeItOn=true es un parametro modificador marca Acme que almancena la cantidad de primos en un array en vez de mostralos.

function imprimirNumerosPrimos(cantidadDeNumerosPrimos, storeItOn) {

  let storeIt = []
  let primoCounter = 0
  let n = 0
  while (primoCounter !== cantidadDeNumerosPrimos) {
    n = n + 1;


    if (storeItOn === undefined && verificaSiEsPrimo(n) === true) { primoCounter = primoCounter + 1, console.log(`${primoCounter}: Primo ${n}`) }
    if (storeItOn === true && verificaSiEsPrimo(n) === true) { primoCounter = primoCounter + 1, storeIt.push(n) }
  }

  if (storeItOn === true) { return storeIt }


}

imprimirNumerosPrimos(100)
//console.log('STORE_it_Test' + imprimirNumerosPrimos(3, true))


//Desafío de programación #19: Crear una función que retorne un array con los primeros números "n-primos" mayores que un número particular definido "alComienzo"

//ingresar constante elegida y cantidad de numeros a imprimir.
function ImprimeNumerosPrimosMayoresaConst(constante, cantidad) {

  let constanteCantidad = imprimirNumerosPrimos(1 + constante + cantidad, true) //envolver en corchetes esta sentencia =... no fue una buena idea, no se bien porque.

  for (i = constante + 1; i < 1 + constante + cantidad; i = i + 1) {
    console.log(`Primo ${i} = ${constanteCantidad[i]}`)
  }
}
/*esto bien podria haberse hecho con una linea adicional y modificaciones menores en la funcion anterior pero queria probar la iteraccion 
de variables locales a funciones entre distintas funciones. ConstanteCantidad sigue la logica que StoreIt 
va a reescribirse en cuanto la Funcion imprimirNumerosPrimos sea invocada denuevo. Esta boludez me causo problemas de todo tipo Fabricio.*/

console.log('19# imprime 6 primos a partir del 16') 
ImprimeNumerosPrimosMayoresaConst(16, 6)

//Desafío de programación #20: Rotar un array hacia la izquierda una posición
console.log('#20: Rotar un array hacia la izquierda una posición')

let arrayIz = imprimirNumerosPrimos(5, true)
console.log(arrayIz)

function rotarArrayIz(array) {
  let iz = array.pop()
  array.unshift(iz)
}

rotarArrayIz(arrayIz), console.log(arrayIz)

//Desafío de programación #21: Rotar un array a la derecha una posición

console.log(' #21: Rotar un array a la derecha una posición')

function rotarArrayDe(array) { //los nombres de funciones repetidas no devuelven error (estudiar eso).

  let de = array.shift()
  array.push(de)
}
rotarArrayDe(arrayIz)
console.log(arrayIz)

//Desafío de programación #22: Invertir un array
console.log('#22: Invertir un array')
console.log(arrayIz.reverse())

//te lo entrego hasta ahi Fabricio mientras alimento la imagincion para ver como se haria el 23... 

//Desafío de programación #23: Invertir una cadena de caracteres
//Ejemplo:
//"dabale arroz a la zorra el abad" debería quedar como "daba le arroz al a zorra elabad"
//"bienvenido" debería quedar como "odinevneib"



//Desafío de programación #24: Crear una función que reciba dos dos arrays (arreglos) como argumentos y returne el resultado en un nuevo arreglo
//Ejemplo:
 // [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]


//Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
//Ejemplo:
//Nota: Esto se llama "diferencia simétrica" entre conjuntos
 // [1,2,3] y [3,7,11] debería devolver [1,2,7,11]
  //[5,10,3] y [10,1] debería quedar como [5,3,1]

//Desafío de programación #26: Crear una función que reciba dos arrays de números y retorne un nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo
//Nota; Esto se llama "resta" entre conjuntos
//Ejemplo:
 // [5,1,2,3,4] y [3,4] debería devolver [5,1,2]

//Desafío de programación #27: Crear una función que reciba un array de números como argumento y retorne un array con los elementos distintos
//Ejemplo:
  // [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]


//==== FALTAN TRADUCIR
//Desafío de programación #28: Calculate the sum of first 100 prime numbers
//Desafío de programación #29: Print the distance between the first 100 prime numbers
//Desafío de programación #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
//Desafío de programación #30-b: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
/*Desafío de programación #31-a. Create a function that will return the number of words in a text
Desafío de programación #31-b. Create a function that will return the number of words in a text
Desafío de programación #32. Create a function that will capitalize the first letter of each word in a text
Desafío de programación #33. Calculate the sum of numbers received in a comma delimited string
Desafío de programación #34. Create a function that will return an array with words inside a text
Desafío de programación #35. Create a function to convert a CSV text to a “bi-dimensional” array
Desafío de programación #36. Create a function that converts a string to an array of characters
Desafío de programación #37. Create a function that will convert a string in an array containing the ASCII codes of each character
Desafío de programación #38. Create a function that will convert an array containing ASCII codes in a string
Desafío de programación #39. Implement the Caesar cypher
Desafío de programación #40. Implement the bubble sort algorithm for an array of numbers
Desafío de programación #41. Create a function to calculate the distance between two points defined by their x, y coordinates
Desafío de programación #42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
Desafío de programación 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
Desafío de programación #44. Create a function that will convert a string containing a binary number into a number
Desafío de programación #45. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)
Desafío de programación #46-a. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #46-b. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #47. Deep copy a jagged array with numbers or other arrays in a new array
Desafío de programación #48. Create a function to return the longest word(s) in a string
Desafío de programación #49. Shuffle an array of strings
Desafío de programación #50. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.
Desafío de programación #51. Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.
Desafío de programación #52. Calculate Fibonacci(500) with high precision (all decimals)
Desafío de programación #53. Calculate 70! with high precision (all decimals)
*/
