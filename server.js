const express = require('express')
const db = require('./db')
const path = require('path')
const fabricController = require('../controllers/fabricController')



const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT || 3001

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'client')));

app.listen(PORT, () => {
    console.log(`express server running on ${PORT}`)
})

app.get ('/', (req,res) => {
    res.sendFile(path.join(__dirname,'client','index.html'))
})

// Fabric Routes
app.get('/fabrics', fabricController.getAllFabrics)
app.get('/fabrics/:id', fabricController.getFabricsById)
app.get('/fabrics/search/type', fabricController.getFabricsByType)
app.get('/fabrics/search/color', fabricController.getFabricsByColor)
app.get('/fabrics/search/quantity', fabricController.getFabricsByQuantity)
app.get('/fabrics/search/print', fabricController.getFabricsByPrint)
app.post('/fabrics', fabricController.createFabric)
app.put('/fabrics/:id', fabricController.updateFabric)
app.delete('/fabrics/:id', fabricController.deleteFabric)
