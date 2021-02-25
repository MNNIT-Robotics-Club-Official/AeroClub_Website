const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
    },
    postedBy: {
      type: ObjectId,
      ref: "User",
    },
    publishedAt: {
      type: Date,
    },
    accepted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

blogSchema.method("transform", function () {
  let obj = this.toObject();
  obj.id = obj._id;
  delete obj._id;
  return obj;
});

module.exports = mongoose.model("Blog", blogSchema);
