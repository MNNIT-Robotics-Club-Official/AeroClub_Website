const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    teamname: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    objective: {
        type: String,
        required: true
    },
    pic: {
        type: String,
    },
    status: {
        type: String,
        required: true
    },
    member: {
        type: [{ type: Object }],
        required: true
    },
    issuedon: {
        type: Date
    }
}, { timestamps: true })

projectSchema.method('transform', function () {
    let obj = this.toObject()
    obj.id = obj._id;
    delete obj._id;
    return obj;
});

module.exports = mongoose.model("Project", projectSchema)