const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const ComponentsIssueSchema = new mongoose.Schema(
    {
        component: {
          type: ObjectId,
          ref: "Component"
        },
        reason: {
          type: String,
          required:true
        },
        status: {
            type: String,
            default: "Requested",
            enum: ["Requested", "Issued", "Denied","Returned"]
          },
        updated: Date,
        user:{
            type:ObjectId,
            ref:"User",
            required:true
        },
        num:{
          type:Number,
          required:true
        }
    },
    {timestamps:true}
);

const ComponentsIssue = mongoose.model("ComponentsIssue", ComponentsIssueSchema);

module.exports = ComponentsIssue ;