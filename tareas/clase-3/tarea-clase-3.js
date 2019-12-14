// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!


let nombreUsuario
const miNombre = 'Julian';
const nombreAmigo = 'Jose';

obtenerNombre();

function obtenerNombre() {
    nombreUsuario = prompt('¿Como te llamas?')

    if ( nombreUsuario == false || nombreUsuario === null) {
        while (nombreUsuario == false || nombreUsuario === null) { nombreUsuario = prompt('¿Como te llamas?') }
    }
    
}


saludar()

function saludar() {
    if (nombreUsuario.toLowerCase() === miNombre.toLowerCase()) {
        alert(`Hola ${nombreUsuario} yo tambien me llamo ${miNombre}!!!`)
    }

    else if (nombreUsuario.toLowerCase() === nombreAmigo.toLowerCase()) {
        alert(`Hola ${nombreUsuario} te llamas igual que mi amigo`)
    }

    else {
        alert(`Hola ${nombreUsuario}!!!`)
    }
}


//la interpolacion de variables en el string solo funciona con "`"
//for (i=1 ; -1<=i>=1; i*-1) }
//function obtenerNombre(){if(){} else{obtenerNombre()} } no me dio como resultado la funcion recursiva que queria.

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.



const edadUsuario = Number(prompt('¿Qué edad tienes?'))  
if (edadUsuario === (34 || 35 || 36) ){alert('Tienes mas o menos mi misma edad')} //32<=edadUsuario<=38 probe un domino matematico asi, no funciono. 
    else alert('Tenemos una diferencia de edad') 
//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

let tieneDocumento 
let suEdad



 tieneDocumento=prompt('¿Tiene Documento?');

if (tieneDocumento.toLowerCase() ==='si') {
   suEdad=Number(prompt('¿Cual es su edad?'))
}  
if (suEdad>=18) {prompt('Bienvenido!!')} 

    else {prompt('Get Lost!!')} //este es copipasteado porque ya lo habia hecho, es un poco mas primitivo que el anterior.
