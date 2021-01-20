var mongoose = require("mongoose");
const User = require("./user");

var componentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    type:{
        type:String,
        required:true,
        trim:true
    },
    image_url:{
        type:String,
        required:true,
    },
    available: {
        type: Number,
        required:true
    },
    issued:{
        type: Number,
        default: 0
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Component", componentSchema);
