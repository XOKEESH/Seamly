const mongoose = require('mongoose')
const fabricSchema = require('./fabric')
const patternSchema = require('./pattern')
const workshopSchema = require('./workshop')


const Fabric = mongoose.model('Fabric', fabricSchema)
const Pattern = mongoose.model('Pattern', patternSchema)
const Workshop = mongoose.model('Workshop', workshopSchema)

module.exports = {
    Fabric,
    Pattern,
    Workshop,
}