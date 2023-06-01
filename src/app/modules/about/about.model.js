const { default: mongoose } = require("mongoose");

const aboutSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const About = mongoose.model("about", aboutSchema);
module.exports = About;
