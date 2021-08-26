const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      require: true,
      max: 500,
    },
    image:{
        type: String,
        max:50
    },
    like: {
        type:Array,
        default:[ ]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
