const express = require('express')
const server = express()

const suppliersRoutes = require('../suppliers/suppliersRoutes')

server.use('/suppliers', suppliersRoutes)

server.use(express.json())

module.exports = server