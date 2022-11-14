let usuario = {
    nombre: 'juan',
    apellido: 'perez',
    dni:42105468,
    correo: {
        gmail:'itscipolletti@gmail.com',
        outlook:'itscipolletti@outlook.com'
    },
    localidad:'cipolletti'
     
}
//forma 1
//const gmail = usuario.correo.gmail
//const outlook = usuario.correo.outlook

//forma 2
//destructuring object
const { gmail,outlook } = usuario.correo

//forma 3
console.log(`
    apellido: ${usuario.apellido}
    nombre: ${usuario.nombre}
    gmail: ${gmail}
    outlook: ${outlook}
`)
