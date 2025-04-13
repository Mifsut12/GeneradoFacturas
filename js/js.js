// Implementar accion al pulsar los botones

//Añadir dos campos identicos cada vez que se llame a esta función
function addConcepto(){

    
  
    

    const concepto = document.createElement('input')
    concepto.type = 'text'
    concepto.name = 'concepto'
    concepto.placeholder = 'Concepto'
    
    const cuantia = document.createElement('input')
    cuantia.type = 'number'
    cuantia.name = 'cuantia'
    cuantia.placeholder = 'Cantidad (€)'
    cuantia.step = ".01"
    cuantia.min ="0"

    formulario.appendChild(concepto)
    formulario.appendChild(cuantia)


}


//Al reiniciar se implementa el caso inicial, 2 campos
function reiniciar(){
    formulario.innerHTML = ` <input type="text" name="concepto" class="main-form-input-concepto" placeholder="Concepto">
            <input type="number" name="cuantia" class="main-form-input-cuantia" step=".01" min="0"   placeholder="Cuantia (€)"> <br> `

    mostrar.innerHTML = ``
}


//Recolectar todos los datos de la factura
function generarFactura(){
    

    mostrar.innerHTML = `<hr>`
    total = Number(0)
    const form = document.forms
    const factura = form[0]

    //Cada linea tiene dos campos, cada iteración recorrera una linea para obtener los datos de sus campos
    linea = 1
    while(linea < factura.length){

        mostrar.innerHTML+= `${factura.elements[linea - 1].value} ---  ${factura.elements[linea].value} <br>`
        //Convertir a numero el resultado
        total += Number(factura.elements[linea].value)

        //Saltar a la siguiente linea
        linea += 2
    }
    
    

    mostrar.innerHTML += `Base imponible = ${baseImponible}%: <br>
    Total: ${total = total * baseImponible} euros`
   
    
    

}

//Seleccionar los botones

nuevoConcepto = document.getElementById("main-button-añadir").addEventListener('click',addConcepto)
botonReiniciar = document.getElementById("main-button-reiniciar").addEventListener('click',reiniciar)
botonGenerarFactura = document.getElementById("main-button-generar").addEventListener('click',generarFactura)

//Base imponible al servicio
baseImponible = 1.21
const formulario = document.getElementById("form")
mostrar = document.getElementById("total")







