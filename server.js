const express = require('express')
const db = require('./db')
const path = require('path')
const fabricController = require('../controllers/fabricController.js')
const patternController = require('../controllers/patternController.js')



const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT || 3001

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'client')))

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

// Pattern Routes
app.get('/patterns', patternController.getAllPatterns)
app.get('/patterns/:id', patternController.getPatternById)
app.get('/patterns/search/name/:name', patternController.getPatternByName)
app.get('/patterns/search/brand/:brand', patternController.getPatternByBrand)
app.get('/patterns/search/type/:type', patternController.getPatternByType)
app.get('/patterns/search/format/:format', patternController.getPatternByFormat)
app.get('/patterns/search/age-group/:ageGroup', patternController.getPatternByAgeGroup)
app.get('/patterns/search/body-type/:bodyType', patternController.getPatternByBodyType)
app.get('/patterns/search/skill-level/:skillLevel', patternController.getPatternBySkillLevel)
app.get('/patterns/search/fabric-type/:fabricType', patternController.getPatternByFabricType)
app.get('/patterns/search/hashtag/:hashtag', patternController.searchPatternsByHashtag)
app.post('/patterns', patternController.createPattern)
app.put('/patterns/:id', patternController.updatePattern)
app.delete('/patterns/:id', patternController.deletePattern)

//Workshop Routes
app.get('/workshops', workshopController.getAllWorkshops)
app.get('/workshops/:id', workshopController.getWorkshopById)
app.get('/workshops/title/:title', workshopController.getWorkshopsByTitle)
app.get('/workshops/date', workshopController.getWorkshopsByDate)
app.get('/workshops/instructor/:instructor', workshopController.getWorkshopsByInstructor)
app.get('/workshops/skillLevel/:skillLevel', workshopController.getWorkshopsBySkillLevel)
app.get('/workshops/projectType/:projectType', workshopController.getWorkshopsByProjectType)
app.post('/workshops', workshopController.createWorkshop)
app.put('/workshops/:id', workshopController.updateWorkshop)
app.delete('/workshops/:id', workshopController.deleteWorkshop)
