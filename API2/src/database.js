const mariadb = require('mariadb')

const parametros = mariadb.createPool({
    host:'localhost',
    port:3307,
    user:'root',
    password:'123qweasd',
    database:'apidb'
})

async function obtener_conexion()
{
    //obtenemos la instancia de conexion
    const conexion = await parametros.getConnection()
    return conexion
}

module.exports = { obtener_conexion }
