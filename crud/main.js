function GUARDAR(){

    let n_cliente = {
        nombre:document.getElementById("ls_nombre").value,
        apellido:document.getElementById("ls_apellido").value,
        dni:document.getElementById("ls_dni").value 
    }

    if("lista_clientes" in localStorage){
        let g_clientes = JSON.parse(localStorage.getItem("lista_clientes"))
        g_clientes.push(n_cliente)
        localStorage.setItem("lista_clientes",JSON.stringify(g_clientes))
    }else{
        let g_clientes = []
        g_clientes.push(n_cliente)
        localStorage.setItem("lista_clientes", JSON.stringify(g_clientes))
    }
    OBTENER_CLIENTES()
    
    document.getElementById("form_cliente").reset() 

}
function OBTENER_CLIENTES(){

    if ("lista_clientes" in localStorage){
        let l_clientes =  JSON.parse( localStorage.getItem("lista_clientes"))

        filas = []
        l_clientes.forEach( (element,index) => {
            let fila = `
                <tr>
                    <td>${index+1}</td>
                    <td>${element.nombre}</td>
                    <td>${element.apellido}</td>
                    <td>${element.dni}</td>
                    <td>
                        <button onclick="ELIMINAR_CLIENTE(${index})" class="btn btn-danger btn-sm"><i class="material-icons">delete_forever</i></button>
                        <button onclick="EDITAR_CLIENTE(${index})" class="btn btn-primary btn-sm"><i class="material-icons">border_color</i></button>
                    <td>
                </tr>
            `
            filas.push(fila)
        });

        document.getElementById("tbody").innerHTML = filas.join('')
    }
    
}

function ELIMINAR_CLIENTE(index){
    let lista_clientes = JSON.parse( localStorage.getItem("lista_clientes"))
    lista_clientes.splice(index,1)
    localStorage.setItem("lista_clientes", JSON.stringify(lista_clientes))
    OBTENER_CLIENTES()
}

function EDITAR_CLIENTE(index){
    let lista_clientes = JSON.parse( localStorage.getItem("lista_clientes"))
    document.getElementById("ls_nombre").value = lista_clientes[index].nombre
    document.getElementById("ls_apellido").value = lista_clientes[index].apellido
    document.getElementById("ls_dni").value = lista_clientes[index].dni

    document.getElementById("btn_guardar").style.display = 'none'
    document.getElementById("btn_actualizar").style.display = 'block'

    localStorage.setItem("indice_cliente",index)
}

function ACTUALIZAR_CLIENTE(){

    let indice = localStorage.getItem("indice_cliente")

    let lista_clientes = JSON.parse( localStorage.getItem("lista_clientes"))

    lista_clientes[indice].nombre = document.getElementById("ls_nombre").value
    lista_clientes[indice].apellido = document.getElementById("ls_apellido").value
    lista_clientes[indice].dni = document.getElementById("ls_dni").value

    localStorage.setItem("lista_clientes", JSON.stringify(lista_clientes))
    
    OBTENER_CLIENTES()

    document.getElementById("btn_guardar").style.display = 'block'
    document.getElementById("btn_actualizar").style.display = 'none'

    document.getElementById("form_cliente").reset() 
}
document.getElementById("btn_actualizar").addEventListener("click",ACTUALIZAR_CLIENTE)
