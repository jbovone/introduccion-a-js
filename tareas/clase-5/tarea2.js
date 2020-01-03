
//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!



const $botonIngresar = document.querySelector("#boton-ingresar") //notamental: no te olvides el numeral flaco :( .


$botonIngresar.onclick = function data() { 

   const nombre = document.querySelector("#ingresar-nombre").value 
   const segundoNombre = document.querySelector("#ingresar-2do-nombre").value 
   const apellido = document.querySelector("#ingresar-apellido").value
   const edad = document.querySelector("#ingrese-edad").value 
   const output = `${nombre} ${segundoNombre} ${apellido} ${edad}`  //esto probablemente puede hacerse con un query al form, o con un class tag en form, seria mas simple, pero no se.

   
   document.querySelector("#output").value = output
 
   const $titulo = document.querySelector('h1')
   $titulo.textContent = `hacked@r/argentinaPrograma ${nombre}`
  

   return false
} 
