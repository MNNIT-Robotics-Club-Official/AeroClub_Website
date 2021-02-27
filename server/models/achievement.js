const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const achievementSchema = new mongoose.Schema(
  {
    desc: {
      type: String,
      required: true
    },
    year: {
        type: Date,
        required:true
    },
    team: [{
      type: String,
    }]
  },
  { timestamps: true }
);

achievementSchema.method("transform", function () {
  let obj = this.toObject();
  obj.id = obj._id;
  delete obj._id;
  return obj;
});

module.exports = mongoose.model("Achievement", achievementSchema);
