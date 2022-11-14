

function GUARDAR(){

    let n_cliente = {
        ip:document.getElementById("ip").value,
        puerto:document.getElementById("puerto").value,
        pais:document.getElementById("pais").value,
        ciudad:document.getElementById("ciudad").value,
        velocidad:document.getElementById("velocidad").value,
        tipo:document.getElementById("tipo").value
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
    document.getElementById("form_cliente").reset() 

    OBTENER_CLIENTES()
}
function OBTENER_CLIENTES(){

    if ("lista_clientes" in localStorage){
        let clientes =  JSON.parse( localStorage.getItem("lista_clientes"))

        filas = []
        clientes.forEach( (element,index) => {
            let fila = `
                <tr>
                    
                    <td>${element.ip}</td>
                    <td>${element.puerto}</td>
                    <td>${element.pais}</td>
                    <td>${element.ciudad}</td>
                    <td>${element.velocidad}</td>
                    <td>${element.tipo}</td>
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

OBTENER_CLIENTES() // Esto se escribe asi para que aparezca la tabla con datos guardados sin tener que guardar algo antes

function ELIMINAR_CLIENTE(index){
    let lista_clientes = JSON.parse( localStorage.getItem("lista_clientes"))
    lista_clientes.splice(index,1)
    localStorage.setItem("lista_clientes", JSON.stringify(lista_clientes))
    OBTENER_CLIENTES()
}

function EDITAR_CLIENTE(index){
    let lista_clientes = JSON.parse( localStorage.getItem("lista_clientes"))
    document.getElementById("ip").value = lista_clientes[index].ip
    document.getElementById("puerto").value = lista_clientes[index].puerto
    document.getElementById("pais").value = lista_clientes[index].pais
    document.getElementById("ciudad").value = lista_clientes[index].ciudad
    document.getElementById("velocidad").value = lista_clientes[index].velocidad
    document.getElementById("tipo").value = lista_clientes[index].tipo
    document.getElementById("btn_guardar").style.display = 'none'
    document.getElementById("btn_actualizar").style.display = 'block'

    localStorage.setItem("indice_cliente",index)
}

function ACTUALIZAR_CLIENTE(){

    let indice = localStorage.getItem("indice_cliente")

    let lista_clientes = JSON.parse( localStorage.getItem("lista_clientes"))

    lista_clientes[indice].ip = document.getElementById("ip").value
    lista_clientes[indice].puerto = document.getElementById("puerto").value
    lista_clientes[indice].pais = document.getElementById("pais").value
    lista_clientes[indice].ciudad = document.getElementById("ciudad").value
    lista_clientes[indice].velocidad = document.getElementById("velocidad").value
    lista_clientes[indice].tipo = document.getElementById("tipo").value

    localStorage.setItem("lista_clientes", JSON.stringify(lista_clientes))
    
    OBTENER_CLIENTES()

    document.getElementById("btn_guardar").style.display = 'block'
    document.getElementById("btn_actualizar").style.display = 'none'

    document.getElementById("form_cliente").reset() 
}
document.getElementById("btn_actualizar").addEventListener("click",ACTUALIZAR_CLIENTE)