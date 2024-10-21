const { Schema } = require('mongoose')

const Workshop = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        skillLevel: { type: String, required: true },
        date: { type: Date, required: true },
        time: { type: String, required: true },
        ageGroup: { type: String, required: true },
        instructor: { type: String, required: true },
        projectType: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = Workshop
