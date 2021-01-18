const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    pic: {
        type: String,
    },
    postedBy: {
        type: String,
        required: true
    },
    publishedAt: {
        type: Date
    }
}, { timestamps: true })

mongoose.model("Blog", blogSchema)