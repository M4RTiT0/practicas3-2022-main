 //inicializamos o creamos por primera vez una constante
        //aca se aclara la constante
        const numero = 22

        //es una señal o cartel
        //alert(numero)

        //consola del navegador
        console.log('edad: '+numero+' - DNI: 42105468')

        //template string
        console.log(`
            probando template:

                - Edad: ${numero}
                - item 2
        `)
        //testeo
        const dato_ingresado = prompt('ingrese su DNI:')
        console.log(dato_ingresado)