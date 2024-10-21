const mongoose = require('mongoose')
const fabricSchema = require('./fabric')
const patternSchema = require('./pattern')

const Fabric = mongoose.model('Fabric', fabricSchema)
const Pattern = mongoose.model('Pattern', patternSchema)

module.exports = {
    Fabric,
    Pattern,
}