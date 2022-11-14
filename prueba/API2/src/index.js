const express = require('express')
const cors = require('cors')
const morgan = require ('morgan')

//accedemos a la funcionalidad de express
const server = express()

//aca dejo configurado la notacion que maneja el flujo de datos
server.use(express.json())

//permitira comunicacion entre cliente servidor
server.use(cors())

server.use(morgan('dev'))

//pongo en funcionamiento las rutas existentes dentro de clientes.route
server.use(require('./routes/cliente.route'))

server.set('port', process.env.PORT || 3000)

//iniciando el servidor
server.listen( server.get('port') )

console.log('Servidor corriendo en el puerto '+server.get('port'))