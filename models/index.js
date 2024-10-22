const mongoose = require('mongoose')
const fabricSchema = require('./fabric')
const patternSchema = require('./pattern')
const workshopSchema = require('./workshop')
const projectSchema = require('./project')
const userSchema = require('./user')


const Fabric = mongoose.model('Fabric', fabricSchema)
const Pattern = mongoose.model('Pattern', patternSchema)
const Workshop = mongoose.model('Workshop', workshopSchema)
const Project = mongoose.model('Project', projectSchema)
const User = mongoose.model('User', userSchema)

module.exports = {
    Fabric,
    Pattern,
    Workshop,
    Project,
    User,
}