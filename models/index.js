const mongoose = require('mongoose')
const fabricSchema = require('./fabric')

const Fabric = mongoose.model('Fabric', fabricSchema)

module.exports = {
    Fabric
}