/*
Cosas a tener en cuenta:
1. Los <input> no tienen .innerText, en vez de eso, usan .value. https://developer.mozilla.org/es/docs/Web/HTML/Elemento/input

2. Los demás elementos usan .innerText para acceder y modificar al texto que aparece dentro. https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
También pueden usar .textContent, las diferencias no son importantes por ahora.

3. Para evitar que el formulario <form> se “mande” y por ende recargue la página,
al event handler “onclick”, agréguentle un return false; al final de la función.

Ejemplo:
const $botonCalcular = document.querySelector("#boton-calcular");

$botonCalcular.onclick = function()
    // código que se ejecuta cuando le hagan click a este elemento...
    return false;
}
*/

//TAREA: completar tareas/clase-5/index.html para que incluya tarea-clase-5.js
//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>



let $botonCalcular = document.querySelector("#boton-calcular")

$botonCalcular.onclick = function calculaSalarioMensual() {

  let $salarioAnual = Number(document.querySelector("#salario-anual").value) //no ofrece ninguna pista visual que confirme que hace lo que se supone que tiene que hacer.
  let $salarioMensual = $salarioAnual / 12

  document.querySelector("#salario-mensual").value = $salarioMensual // Number(document.querySelector("#salario-mensual").value) devuelve: cannot assign to function call, esta no la entendi.
  return false
}
