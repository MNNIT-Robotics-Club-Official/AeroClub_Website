const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const ComponentRequestSchema = new mongoose.Schema({
    component: {
      type: ObjectId,
      ref: "Component"
    },
    name: String,
    count: Number
  }); 

const ComponentRequest = mongoose.model("IssueRequest", ComponentRequestSchema);


const ComponentsIssueSchema = new mongoose.Schema(
    {
        components: [ComponentRequest],
        status: {
            type: String,
            default: "Requested",
            enum: ["Requested", "Issued", "Denied","Returned"]
          },
        updated: Date,
        user:{
            type:ObjectId,
            ref:"User"
        }
    },
    {timestamps:true}
);

const ComponentsIssue = mongoose.model("ComponentsIssue", ComponentsIssueSchema);

module.exports = { ComponentsIssue, ComponentRequestSchema };