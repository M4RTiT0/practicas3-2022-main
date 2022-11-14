let lenguajes = ["Python", "JavaScript", "Csharp", "C++", "Java", "PHP", "Ruby"]

console.log('primer array:')
console.log(lenguajes) //crear arrays con sus elementos.

lenguajes.push('Go') //agregar Go.
console.log('agregar Go:')
console.log(lenguajes)

lenguajes.shift() //eliminar primer elemento.
console.log('eliminar el primer elemento:')
console.log(lenguajes)

lenguajes.unshift('Kotlin') //agregar elemento al comienzo.
console.log('agregar elemento al inicio:')
console.log(lenguajes)

lenguajes.splice(4,2) //eliminar 2 elementos
console.log('eliminar java y php:')
console.log(lenguajes)

lenguajes.splice(2,0,'Rust', 'Swift') //agregar 2 elementos ( el "0" permite que puedas agregar)
console.log('agregando rust y switf:')
console.log(lenguajes)

function cositas() { //crear funcion

    let longitud = lenguajes.length //guardar longitud
    console.log('longitud: '+longitud) // enseñarlo en la consola (no es necesario)
    document.getElementById("longitud2").textContent = longitud //mostrarlo en la web

    ultimo = lenguajes[longitud-1] //guardar el ultimo
    console.log('ultimo: '+ultimo)
    document.getElementById("ultimo2").textContent = ultimo 

    tercero = lenguajes[2] //guardar el tercero
    console.log('tercero: '+tercero)
    document.getElementById("tercero2").textContent = tercero 

}

function recorrer() { //crear funcion

    lenguajes.forEach( (element, index) => { //un for
        console.log(index+'-'+element) //mostrarlo en la consola
    });
    document.getElementById("total2").textContent = lenguajes //enseñar en la web (no es necesario)
}

