const express = require('express')

const router = express.Router()

const conexion = require('../database')


router.get('/clientes', async(req,res) =>{

    const db = await conexion.obtener_conexion()

    const rows = await db.query('select * from cliente')

    res.json(rows)
})

module.exports= router







