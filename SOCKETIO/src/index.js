const express = require('express')
const cors = require('cors')

const server = express()

server.set('port', process.env.PORT || 3000)

server.use(cors())

server.listen(server.get('port'), () => {
    console.log('la conexion fue exitosa!')
});
