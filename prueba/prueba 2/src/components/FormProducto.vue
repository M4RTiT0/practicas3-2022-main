<template>
    <div class="row">
            <h4>{{titulo}}</h4>
                <div class="col-lg-4 mb-3" v-for="(p,index) of lista_productos" v-bind:key="index">
                    <div class="card" style="width: 18rem;">
                            <div class="card-body bg-primary">
                                <p class="card-text text-white">{{p.title}}</p>
                                <p><img :src=p.thumbnail class="img-fluid" style="width:20rem"></p>
                                <p class="card-text text-white">description {{p.description}}</p>
                                <p class="card-text">Precio: {{p.price}}</p>
                                <p class="card-text text-white">Popularidad: {{p.rating}}</p>
                                <p class="card-text">Stock: {{p.stock}}</p>
                                <p class="card-text text-white">Marca: {{p.brand}}</p>
                                <p class="card-text">Categoria: {{p.category}}</p>
                            </div>
                    </div>
                </div>
    </div>
</template>
<script>
/* eslint-disable */
import {ref} from 'vue'
export default {
    name:'FormProdcuto',
    setup() {    
        //sector de variables
        let nombre = ref('')
        let lista_productos = ref([])
        let titulo = ref('Lista de Prodcutos')
        //sector de funciones
        async function consumir_api2(){
            const productos = await fetch('https://dummyjson.com/products')
            const datos = await productos.json()
            lista_productos.value = await datos.products           
        }
        return{
            nombre,
            consumir_api2,
            lista_productos,
            titulo
        }
    },
    created(){
        this.consumir_api2()
    }
}
</script>