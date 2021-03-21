const mongoose = require('mongoose')

const workshopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brochure: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    date: {
        type: Date
    }
}, { timestamps: true })
workshopSchema.method('transform', function () {
    let obj = this.toObject()
    obj.id = obj._id;
    delete obj._id;
    return obj;
});
module.exports = mongoose.model("Workshop", workshopSchema);