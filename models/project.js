const { Schema } = require('mongoose')

const Project = new Schema(
    {
        title: { type: String, required: true },
        projectType: { type: String, required: true },
        description: { type: String, required: true },
        status: { type: String, required: true },
        dateCreated: { type: Date, default: Date.now },
        finishDate: { type: Date, required: false },
        userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        fabricIds: [{ type: Schema.Types.ObjectId, ref: 'Fabric', required: false }],
        patternId: { type: Schema.Types.ObjectId, ref: 'Pattern', required: false },
        likes: { type: Number, default: 0 },
        likedBy: [{ type: Schema.Types.ObjectId, ref: 'User', required: false }],
        images: [{ type: String, required: true }],
        comments: [
            {
                userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
                comment: { type: String, required: true },
                date: { type: Date, default: Date.now }
            }
        ]
    },
    { timestamps: true }
)

module.exports = Project
