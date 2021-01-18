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

blogSchema.method('transform', function () {
    let obj = this.toObject()
    obj.id = obj._id;
    delete obj._id;
    return obj;
});

module.exports = mongoose.model("Blog", blogSchema)