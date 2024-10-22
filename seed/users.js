const db = require('../db')
const { User } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

const users = [
    {
        profilePicture: '',
        bio: 'Lover of all things pink and sewing!',
        username: 'PinkLoverLeah',
        profileBanner: '',
        email: 'leah@example.com',
        password: 'passwordone',
        projects: [],
        fabrics: [],
        patterns: []
    },
    {
        profilePicture: '',
        bio: 'Fashion enthusiast and DIY lover.',
        username: 'AshleysCreativeStudio',
        profileBanner: '',
        email: 'ashley@example.com',
        password: 'passwordone',
        projects: [],
        fabrics: [],
        patterns: []
    },
    {
        profilePicture: '',
        bio: 'Creative mind with a passion for fabric.',
        username: 'LaneTheMaker',
        profileBanner: '',
        email: 'lane@example.com',
        password: 'passwordone',
        projects: [],
        fabrics: [],
        patterns: []
    },
    {
        profilePicture: '',
        bio: 'Sewing is my therapy.',
        username: 'SaraSews',
        profileBanner: '',
        email: 'sara@example.com',
        password: 'passwordone',
        projects: [],
        fabrics: [],
        patterns: []
    },
    {
        profilePicture: '',
        bio: 'Guy who loves sewing and crafting.',
        username: 'MikeDTheSewingGuy',
        profileBanner: '',
        email: 'mike@example.com',
        password: 'passwordone',
        projects: [],
        fabrics: [],
        patterns: []
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
