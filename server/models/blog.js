const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
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
    },
    accepted: {
        type: String,
        default: "No",
        enum: ["Yes", "No"]
    }
}, { timestamps: true })

blogSchema.method('transform', function () {
    let obj = this.toObject()
    obj.id = obj._id;
    delete obj._id;
    return obj;
});

module.exports = mongoose.model("Blog", blogSchema)