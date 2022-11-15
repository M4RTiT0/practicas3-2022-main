const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const socketio = require('socket.io')
const osu = require('node-os-utils')

//accedemos a la funcionalidad de express
const server = express()

//aca dejo configurado la notación que manejará el flujo de datos
server.use(express.json())

//permitirá comunicación entre cliente y servidor
server.use(cors())

server.use(morgan('dev'))

//pongo en funcionamiento las rutas existentes dentro de cliente.route
server.use(require('./routes/cliente.route'))

server.set('port', process.env.PORT || 3000)

//iniciando el servidor
const servidor = server.listen( server.get('port'))

console.log('Servidor corriendo en el puerto: '+server.get('port'))


//iniciamos configuracion de WEBSOCKET
const io = socketio(servidor)
const cpu = osu.cpu

io.on('connection', () => {
    setInterval(() => {

        cpu.usage().then( (cpuPercentage)=>{
            io.sockets.emit('uso_cpu_porcentual',cpuPercentage)
            console.log(cpuPercentage)
        })

    },1000)
}) 