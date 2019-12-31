/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar 
el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, 
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $addButton = document.querySelector('#add')
let index = 1
const $emptyFields = document.querySelector('#empty-fields')

$addButton.onclick = function () {
    const $getTheInputsButton = document.querySelector('#process')
    const $label = document.createElement('label')
    const $input = document.createElement('input')
    const $div = document.querySelector('#wages')
    const $br = document.createElement('br')

    $label.textContent = `#Montly Wage: ${index}  `
    $removeButton.className = ''

    index = index + 1
    $input.id = `input${index}`
    $input.type = 'number'
    $label.id = `label${index}`
    $br.id = `br${index}`



    $div.appendChild($label)
    $div.appendChild($input)
    $div.appendChild($br)


    $input.className = 'inputs'
    $getTheInputsButton.className = ''

    $getTheInputsButton.onclick = function () {
        const $inputs = document.querySelectorAll('.inputs')
        let inputs = []
        
        for (i = 0; i < $inputs.length; i++) {
            if ($inputs[i].value === '') {
                return $emptyFields.className='' + event.preventDefault() 
            }
            inputs.push(Number($inputs[i].value))
        }
        processToOutput(inputs)
        event.preventDefault()
    }


    event.preventDefault()
}

function processToOutput(inputs) {
    $emptyFields.className='hidden'
    const $highestAnnualWage = document.querySelector('#highest-annual-wage')
    const $lowesAnnualWage = document.querySelector('#lowest-annual-wage')
    const $averageAnnualWage = document.querySelector('#average-annual-wage')
    const $monthlyAverageWage = document.querySelector('#monthly-average-wage')

    $highestAnnualWage.textContent = getMaxAnnualWage(inputs)
    $lowesAnnualWage.textContent = getMinAnnualWage(inputs)
    $averageAnnualWage.textContent = getAverageAnnualWage(inputs)
    $monthlyAverageWage.textContent = getAverageMonthlyWage(inputs)


    const $div = document.querySelector('#results')
    $div.className = ''

    event.preventDefault()
}



const $removeButton = document.querySelector(`#remove`)
$removeButton.onclick = function () {
    const $label = document.querySelector(`#label${index}`)  //the index here allows to start the "demolish" from the last one .
    const $input = document.querySelector(`#input${index}`)
    const $br = document.querySelector(`#br${index}`)
    $label.remove()
    $input.remove()
    $br.remove()
    const $div = document.querySelector('#results')
    $div.className = 'hidden'
    index = index - 1
    if(index === 1){
        const $getTheInputsButton = document.querySelector('#process')
        $getTheInputsButton.className = 'hidden'
        $removeButton.className = 'hidden'
        $emptyFields.className = 'hidden'
    }

}