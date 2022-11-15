const express = require('express')

const router = express.Router()

const conexion = require('../database')


router.get('/clientes', async(req,res) =>{

    const db = await conexion.obtener_conexion()

    const rows = await db.query('select * from cliente')

    res.json(rows)
})

router.post('/cliente',async (req,res) => {

    const unCliente = req.body;

    const db = await conexion.obtener_conexion()

    await db.query(`insert into cliente (nombre,apellido,dni)
    VALUES ('${unCliente.nombre}','${unCliente.apellido}',${unCliente.dni}) `)

    res.json('El cliente se guardó exitosamente!')

})

router.put('/cliente/:codigo', async(req,res) => {
    const db = await conexion.obtener_conexion()

    const id = req.params.codigo
    const cm = req.body

    await db.query(`update cliente
    set nombre = '${cm.nombre}', apellido='${cm.apellido}', dni = ${cm.dni}
    where id_cliente = ${id}`);

    res.json('Actualización exitosa!')
})

router.delete('/cliente/:codigo', async(req,res) => {
    const db = await conexion.obtener_conexion()
    const id = req.params.codigo

    await db.query(`delete from cliente where id_cliente = ${id}`)

    res.json('La eliminación fue exitosa!')
})

router.get('/cliente/:codigo', async(req,res) => {
    const db = await conexion.obtener_conexion()
    const id = req.params.codigo
    
    const row = await db.query(`select * from cliente where id_cliente = ${id}`)

    res.json(row[0])
})

module.exports = router


