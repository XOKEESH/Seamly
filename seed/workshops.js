const db = require('../db')
const { Workshop } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const workshops = [
        {
            title: `Intro to Sewing`,
            description: `A three hour workshop teaching you all the basics of sewing. You’ll leave this workshop with a finished project you’ve created.`,
            skillLevel: `Beginner`,
            date: [`2024-11-02`, `2024-11-09`, `2024-11-16`, `2024-11-23`, `2024-11-30`],
            time: `12-4pm`,
            ageGroup: `Adult`,
            instructor: `Kisha M`,
            projectType: `Tote Bag`
        },
        {
            title: `Tote Bag Workshop`,
            description: `In this workshop we walk you through the process of creating your own tote bag.`,
            skillLevel: `Beginner, Intermediate`,
            date: [`2024-11-03`, `2024-11-10`, `2024-11-17`, `2024-11-24`],
            time: `12-4pm`,
            ageGroup: `Adult`,
            instructor: `Kisha M`,
            projectType: `Tote Bag`
        },
        {
            title: `Pajama Workshop`,
            description: `Create your own pajama set! Learn sewing techniques like how to add buttonholes, drawstrings and pockets.`,
            skillLevel: `Intermediate, Advanced`,
            date: [`2024-11-02`, `2024-11-03`, `2024-11-10`],
            time: `9-12pm`,
            ageGroup: `Adult`,
            instructor: `Kisha`,
            projectType: `Pajama Set`
        },
        {
            title: `Alterations Workshop`,
            description: `In this 4 hour workshop we teach you how to make basic alterations like shortening hems, and altering waistbands so you can bring new life to your wardrobe.`,
            skillLevel: `Beginner, Intermediate`,
            date: [`2024-11-02`, `2024-11-09`, `2024-11-16`, `2024-11-23`],
            time: `9-12pm`,
            ageGroup: `Adult`,
            instructor: `Kisha`,
            projectType: null
        }
    ]

await Workshop.insertMany(workshops)
console.log('created workshops')
}

const run = async () => {
await main()
db.close()
}

run()