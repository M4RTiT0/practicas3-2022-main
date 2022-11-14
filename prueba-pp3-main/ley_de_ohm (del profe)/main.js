//función tradicional
function calcular()
{
    //obtengo los elementos html por ID. Y posteriormente recolecto los valores de cada INPUT obtenido
    const d1 = document.getElementById("inp_dato1").value
    const d2 = document.getElementById("inp_dato2").value

    //obtengo el select por ID. Y posteriormente recolecto el valor seleccionado
    const operacion = document.getElementById("slt_operacion").value

    //declaro una variable para utilizar posteriormente dentro de las condicionales
    let resultado = null;

    if (operacion == 0) {
        //debo calcular corriente en el caso de que la operacion sea igual a 0(cero)
        resultado = d1/d2
    }else{
        if(operacion == 1){
            //debo calcular tensión en el caso de que la operacion sea igual a 1(uno)
            resultado = d1 * d2
        }else{
            //debo calcular resistnecia en el caso de que la operacion sea igual a 2(dos)
            resultado = d1/d2
        }
    }

    //obtenego y encuentro al elemento <h2> y posteriormente lo llenamos con el resultado obtenido
    //Es decir le asignamos un string o texto al elemento <h2>
    document.getElementById("h_resultado").textContent = 'Resultado = '+resultado.toFixed(2)
}


function setearLabel()
{
   //obtengo el select por ID. Y posteriormente recolecto el valor seleccionado
   const operacion =  document.getElementById("slt_operacion").value

   //obtenemos los elementos <label> buscados por ID. Y dichos elementos obtenidos los almacenamos en constantes
   const lbl1 = document.getElementById("lbl_dato1")
   const lbl2 = document.getElementById("lbl_dato2")

   if(operacion == 0)
   {
       /*
       dichos <label> encontrados, los llenamos (es decir, le asignamos) las palabras Tensión y Resistencia respectivamente
       siempre teniendo en cuenta la operacion a realizar (en este caso, se intenta calcular corriente) 
       */
       lbl1.textContent = 'Tensión'
       lbl2.textContent = 'Resistencia'
   }else{
       if(operacion == 1){
           lbl1.textContent = 'Corriente'
           lbl2.textContent = 'Resistencia'
       }else{
           lbl1.textContent = 'Tensión'
           lbl2.textContent = 'Corriente'
       }
   }
}