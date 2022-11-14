//crear un array o arreglo
let arreglo = ['javascript','php','java','csharp']

//cantidad de elementos de un arreglo (longitud)
let longitud = arreglo.length
console.log('longitud: '+longitud)

//primer elemento arreglo
console.log( 'primer elemento: '+arreglo[0] )

//ultimo elemento de un arreglo
console.log( 'ultimo elemento: '+ arreglo[longitud-1])

//recorrer array con forEach
arreglo.forEach( (element, index) => {
    console.log(index+'-'+element)
});

//agregar elemento al final de un array
arreglo.push('Go')
console.log(arreglo)

//como eliminar el ultimo elemento de un arreglo
arreglo.pop()
console.log(arreglo)

//como agregar un elemento al principio de un arreglo
arreglo.unshift('Go')
console.log(arreglo)


//eliminar primer elemento de un arreglo
arreglo.shift()
console.log(arreglo)

//conocer el indice de un elemento
const indice = arreglo.indexOf('java')
console.log('indice de java es: '+indice) //metodo 1 para mostrar
console.log(arreglo[indice]) //metodo 2

//eliminar un elemento conociendo su indice
//const eliminacion = arreglo.splice(indice,1)
//console.log(arreglo)
//console.log('elemento eliminado: '+eliminacion)

//eliminar mas de un elemento
//splice(indice,cantidad)
const eliminacion = arreglo.splice(indice,2)
console.log(arreglo)
console.log('elementos eliminados: '+eliminacion)

//generar  copia de un arreglo
let copia = arreglo.slice()
console.log(copia.push('Go'))
//cuando concatenamos un array con un string, todo se traduce en una cadena de texto
console.log('arreglo copia: '+copia)
console.log('original: '+arreglo)



//funciones tradicional
function operar() {
    console.log('probando')
}

//funcion flecha
const calcular = () => {
    console.log('probando')
}

