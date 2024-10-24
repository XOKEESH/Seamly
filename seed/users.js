const db = require('../db')
const { User } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

const users = [
    {
        profilePicture: 'client/images/Leah.png',
        bio: 'Lover of all things pink and sewing!',
        username: 'PinkLoverLeah',
        profileBanner: '/client/images/Pink banner.png',
        email: 'leah@example.com',
        password: 'passwordone',
        
    },
    {
        profilePicture: 'client/images/Ashley.png',
        bio: 'Fashion enthusiast and DIY lover.',
        username: 'AshleysCreativeStudio',
        profileBanner: '/client/images/lavender banner.png',
        email: 'ashley@example.com',
        password: 'passwordone',
        
    },
    {
        profilePicture: 'client/images/Lane.png',
        bio: 'Creative mind with a passion for DIY.',
        username: 'LaneTheMaker',
        profileBanner: '/client/images/blue banner.png',
        email: 'lane@example.com',
        password: 'passwordone',
        
    },
    {
        profilePicture: 'client/images/Sara.png',
        bio: 'Sewing is my therapy.',
        username: 'SaraSews',
        profileBanner: '/client/images/peach banner.png',
        email: 'sara@example.com',
        password: 'passwordone',
        
    },
    {
        profilePicture: 'client/images/Mike.png',
        bio: 'Just a guy who loves sewing and crafting.',
        username: 'MikeDTheSewingGuy',
        profileBanner: '/client/images/green banner.png',
        email: 'mike@example.com',
        password: 'passwordone',
        
    }
]

await User.insertMany(users)
console.log('created users')
}

const run = async () => {
await main()
db.close()
}

run()
