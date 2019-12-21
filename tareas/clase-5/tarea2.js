
//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!



let $botonIngresar = document.querySelector("#boton-ingresar") //notamental: no te olvides el numeral flaco :( .


$botonIngresar.onclick = function data() { 

   let $ingresarNombre = document.querySelector("#ingresar-nombre").value 
   let $ingresar2DoNombre = document.querySelector("#ingresar-2do-nombre").value 
   let $ingresarApellido = document.querySelector("#ingresar-apellido").value
   let $ingresarEdad = document.querySelector("#ingrese-edad").value 
   let $output

   $output = `${$ingresarNombre} ${$ingresar2DoNombre} ${$ingresarApellido} ${$ingresarEdad}`  //esto probablemente puede hacerse con un query al form, o con un class tag en form, seria mas simple, pero no se.

   
   document.querySelector("#output").value = $output
 
   const $h1Onclick = document.querySelector('h1')
   $h1Onclick.textContent = `hacked@r/argentinaPrograma ${$ingresarNombre}`
  
   /* variante en appenChild (aca añadiria contenidos a h1):
function bienvenida() {
    let $nodoPagina = document.querySelector("header") 
    let $nodoTexto = document.createElement("h1")
    let $textoTitulo = document.createTextNode(`${$ingresarNombre}`)  
   
    $nodoPagina.appendChild($nodoTexto)
    $nodoTexto.appendChild($textoTitulo)
   }
bienvenida() //la verdad no se porque necesito una funcion aca. 
  */
 
return false
} 


//la complejidad de este ejercicio pienso que no esta en acordarse de la syntaxis (lo cual ya me genera algunos problemas), si no en saber que cosa debe ser igual a que cosa, y en que secuencia debe serlo.
