<template>
<div class="row">
        <div class="col-lg-4">
            <div class="mb-3">
                <label class="form-label">Nombre</label>
                <input v-model="nombre" class="form-control" type="text">
            </div>
            <button @click="mostrar()" class="btn btn-light text-primary">Aceptar</button>
        </div>
        <div class="col-lg-8">
            <table class="table">
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>Nombre</th>
                        <th>Usuario</th>
                        <th>Correo</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(u,index) of lista_usuarios" v-bind:key="index">
                        <td>{{index}}</td>
                        <td>{{u.name}}</td>
                        <td>{{u.username}}</td>
                        <td>{{u.email}}</td>
                        <td>{{u.website}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
import { ref } from 'vue'
export default {
    name:'FormCliente',
    setup() {

        //sector de variables
        let nombre = ref('')
        let mensaje = ref('Ese boton no hace nada')
        let lista_usuarios = ref([])

        //sector de funciones
        function mostrar(){
            alert(nombre.value)
        }

  

        async function consumir_api(){
            const usuarios = await fetch('https://jsonplaceholder.typicode.com/users')
            lista_usuarios.value = await usuarios.json()
        }

        return{
            nombre,
            mostrar,
            mensaje,
            consumir_api,
            lista_usuarios
        }

    },
    created(){
        this.consumir_api()
    }
}
</script>