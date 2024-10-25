const db = require('../db')
const { Project } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

const projects = [
    {
        title: "The perfect dress for wedding rehearsal dinner",
        projectType: "dress",
        description: "I made this in white satin for my friend's rehearsal dinner and it came out beautiful. It was challenging but the directions were very clear and helpful. I love the boning and pleated bust cups. She lives far from me so I had to rely on the measurements for fitting which were just right. It was my first time using a vikisews pattern and I will definitely be making more.",
        status: "finished",
        dateCreated: new Date(),
        finishDate: new Date(),
        userId: '6717bf00fb2edc9df769974a',
        fabricIds: ['6717c45b50bcba3285ebce98'],
        patternId: '6716d93ab1c9a1bdf2489eed',
        likes: 3,
        likedBy: ['6717bf00fb2edc9df769974b', '6717bf00fb2edc9df769974e', '6717bf00fb2edc9df769974c'],
        images: [
            'client/images/Project2Img.webp',
            'client/images/Project1Img.jpg'
        ],
        comments: [
            {
                userId: '6717bf00fb2edc9df769974b', 
                comment: "Wow, beautiful work!",
                date: new Date()
            },
            {
                userId: '6717bf00fb2edc9df769974c',
                comment: "I Love this dress so much! I will be trying this one next month. You did a great job!",
                date: new Date()
            }
        ]
    },
    {
        title: "My new favorite top!",
        projectType: "Shirt/blouse",
        description: "I created this beautiful Chiara Blouse using lightweight organic Egyptian cotton. The lavender hue adds a soft touch to my wardrobe, and the fabric drapes elegantly, making it perfect for both casual and dressy occasions. I was impressed by how easy the pattern was to follow, and I love the airy feel of the top. It's become a staple in my collection, and I can see myself making several more in different colors!",
        status: "Finished",
        dateCreated: new Date(),
        finishDate: new Date(),
        userId: '6717bf00fb2edc9df769974b',
        fabricIds: ['6717c45b50bcba3285ebce99'],
        patternId: '6716d93ab1c9a1bdf2489eec',
        likes: 2,
        likedBy: ['6717bf00fb2edc9df769974c', '6717bf00fb2edc9df769974d'],
        images: [
            'https://s3.eu-west-1.amazonaws.com/vikisews.public.media/media/patterns/2799/Chiara_4.jpg'
        ],
        comments: [
            {
                userId: '6717bf00fb2edc9df769974c',
                comment: "Oh, I need this in every color!",
                date: new Date()
            },
            {
                userId: '6717bf00fb2edc9df769974d',
                comment: "Gorgeous, I think I'll make one with short sleeves!",
                date: new Date()
            }
        ]
    },
    {
        title: "Fast like Dad!",
        projectType: "jumpsuit",
        description: "I made this jumpsuit for my son because he wanted to dress up as his dad for Halloween. His dad is a Nascar racer, and I couldn't wait to replicate the look! The lightweight denim was perfect for comfort, and the kid loves it so much that he insists on wearing it every day. He looks just like his dad, and I couldn't be happier to see him so excited about his costume!",
        status: "Completed",
        dateCreated: new Date(),
        finishDate: new Date(),
        userId: '6717bf00fb2edc9df769974b', 
        fabricIds: ['6717c45b50bcba3285ebce9a'],
        patternId: '6716d93ab1c9a1bdf2489ef1',
        likes: 4,
        likedBy: ['6717bf00fb2edc9df769974e','6717bf00fb2edc9df769974a', '6717bf00fb2edc9df769974c', '6717bf00fb2edc9df769974d'],
        images: [
            'client/images/Ireneboy1.jpg',
            'client/images/Ireneboy2.jpg',
            'client/images/Ireneboy3.jpg'
        ],
        comments: [
            {
                userId: '6717bf00fb2edc9df769974a',
                comment: "Omg this is adorable!!",
                date: new Date()
            },
            {
                userId: '6717bf00fb2edc9df769974e',
                comment: "What a fantastic idea! Your son looks just like a mini Nascar racer!",
                date: new Date()
            }
        ]
    },
    {
        title: "Rustic Summer Vibes",
        projectType: "Dress",
        description: "I wanted a go-to dress for those lazy summer days, so I created this flowy piece using the Celine dress pattern by vikiSews. The rust color is just right for the season! Made from 100% cotton, it’s super comfy and perfect for brunches with friends or casual hangouts in the park. I can't wait to wear it!",
        status: "Completed",
        dateCreated: new Date(),
        finishDate: new Date(),
        userId: '6717bf00fb2edc9df769974b', 
        fabricIds: ['671b372991fc594a07ababbd'],
        patternId: '671b359f05875fee4d47b6db',
        likes: 4,
        likedBy: ['6717bf00fb2edc9df769974e','6717bf00fb2edc9df769974a', '6717bf00fb2edc9df769974c', '6717bf00fb2edc9df769974d'],
        images: [
            'https://s3.eu-west-1.amazonaws.com/vikisews.public.media/media/cache/db/6a/db6a759b7219c69e61089274d6064d0f.jpg',
            'https://s3.eu-west-1.amazonaws.com/vikisews.public.media/media/cache/61/5e/615eb8c5980747eaaef160fe6b71b6ee.jpg',
            'https://s3.eu-west-1.amazonaws.com/vikisews.public.media/media/cache/9b/20/9b203a058c622571bb5e628b9b68d721.jpg',
            'https://s3.eu-west-1.amazonaws.com/vikisews.public.media/media/cache/7b/12/7b1233ff5e9dcb9a7ed35e28fbd1855b.jpg'
        ],
        comments: [
            {
                userId: '6717bf00fb2edc9df769974a',
                comment: "I loved seeing the process on your Instagram story! You are so talented!",
                date: new Date()
            },
            {
                userId: '6717bf00fb2edc9df769974c',
                comment: "You did it again! - And you always kill it with the mini photoshoots after!",
                date: new Date()
            }
        ]
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