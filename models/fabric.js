const { Schema } = require('mongoose')

const Fabric = new Schema(
    {
        fabricName: { type: String, Required: true },
        imageURL: { type: String, required: true },
        type: { type: String, required: true },
        colors: { type: String, required: true },
        quantityInYds: { type: Number, required: true },
        print: { type: String, required: true },
        stretch: { type: Boolean, required: true },
        sheerness: { type: String, required: true },
        description: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = Fabric
