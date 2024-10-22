const { Schema } = require('mongoose');

const User = new Schema(
    {
        profilePicture: { type: String, required: true },
        bio: { type: String, required: true },
        username: { type: String, required: true, unique: true },
        profileBanner: { type: String, required: false },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
        fabrics: [{ type: Schema.Types.ObjectId, ref: 'Fabric' }],
        patterns: [{ type: Schema.Types.ObjectId, ref: 'Pattern' }]
    },
    { timestamps: true }
)

module.exports = User