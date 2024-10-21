const db = require('../db')
const { Fabric } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const fabrics = [
        {
           
        },
        {
            
        },
    ]

    await Fabric.insertMany(fabrics)
    console.log('created fabrics')
}

const run = async () => {
    await main()
    db.close()
}

run()