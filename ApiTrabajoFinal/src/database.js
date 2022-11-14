const mariadb = require('mariadb')

const pool = mariadb.createPool({
    host:'localhost',
    port:3306,
    user:'root',
    password:'1234',
    database:'apidb',
    connectionLimit:5
});


async function obtenerConexion()
{
    const conexion = await pool.getConnection()
    return conexion
}


module.exports = { obtenerConexion }