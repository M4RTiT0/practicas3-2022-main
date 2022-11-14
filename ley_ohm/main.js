function corriente(r,t){
    const resultado = parseInt(t) / parseInt(r)
    return resultado 
    }

    function recolectar_datos_ohm(){
        const t = document.getElementById("d1").value 
        const r = document.getElementById("d2").value 
    
        const respuesta = corriente(r,t)
        document.getElementById("h_resultado").textContent = respuesta
    }