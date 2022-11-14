async function consumir_datos(){ //guardar url de usuarios .json
  //realizo la peticion http a traves del metodo GET
    const datos = await fetch('https://jsonplaceholder.typicode.com/users')

    //solo conservo los datos en JSON
    const datos_definitivos = await datos.json()

    datos_definitivos.forEach( (element, index) => {
        console.log(index + element.name)
    });
}

//invoco a la funcion
consumir_datos()