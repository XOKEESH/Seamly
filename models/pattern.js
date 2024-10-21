const { Schema } = require('mongoose')

const Pattern = new Schema(
    {
        title: { type: String, required: true },
        brand: { type: String, required: true },
        description: { type: String, required: true },
        skillLevel: { type: String, required: true },
        patternFormat: { type: String, required: true },
        ageGroup: { type: String, required: true },
        bodyType: { type: String, required: true },
        fabricTypes: { type: String, required: true },
        fabricSuggestions: { type: String, required: false },
        hashtags: { type: [String], required: true },
        patternImg: { type: String, required: true },
        patternLink: { type: String, required: true }, 
        patternType: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = Pattern