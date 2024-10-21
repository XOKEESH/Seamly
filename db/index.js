const mongoose = require('mongoose')

mongoose
.connect('mongodb+srv://XOKEESH:Anoire7117@cluster7.yf6pw.mongodb.net/SeamlyDatabase?retryWrites=true&w=majority&appName=Cluster7')
.then(() => {
    console.log('connected to MongoDB')
})
.catch((e) => {
    console.error('oh no an ERROR!', e.message)
})

mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db