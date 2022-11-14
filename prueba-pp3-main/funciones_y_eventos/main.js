function calculo() {
//const dato1 = document.getElementById("dato1").value 
const operacion = document.getElementById("eleccion").value 

let resultado = null;

if (operacion == 0){
    //ford ka
    resultado = 2900000-((2900000*15)/100)
}else {
    if (operacion == 1){
        //ford fiesta
        resultado = 3350000-((3350000*5)/100)
    }else{
        //ford focus
        resultado = 3960000-((3960000*10)/100)
    }
}
document.getElementById("resultado2").textContent = `resultado = ${resultado.toFixed(2)}`
}
<<<<<<< HEAD
resultado3 = 'nashe'
dkasdasdkad
=======
>>>>>>> f4108aeb43a058fb922ae2596b33c06b5cdf2921
