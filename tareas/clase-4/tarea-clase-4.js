// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

for (i = 3; i < 22; i = i + 3) { console.log(i) }

// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.
function counter() {
    let i = 11 //a veces me es dificil saber lo que va a procesar primero una itienancia... va a imprimir 11? o diez?
    let container = []

    while (i > 1) {
        i = i - 1, container.push(i)
    }
    console.log(container);

    return container;

}
counter()


// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])


function FizzBuzz(){

    for (i = 1; i <= 50; i++) {
        let texto = ''

        if (i % 5 === 0) {
            texto = 'Fizz'
        }

        if (i % 3 === 0) {
            texto += 'Buzz'
        }

        console.log(texto || i)
    }   
}

FizzBuzz()
//ya lo hice tres veces a este.. pero bueno al estilo del maestro ahora!
