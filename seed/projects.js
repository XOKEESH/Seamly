const db = require('../db')
const { Project } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

const projects = [
    {

    },
    {

    },
    {

    },

]


await Project.insertMany(projects)
console.log('created projects')
}

const run = async () => {
await main()
db.close()
}

run()