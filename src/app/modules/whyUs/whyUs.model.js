const { default: mongoose } = require("mongoose");

const whyUsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const WhyUs = mongoose.model("whyUs", whyUsSchema);
module.exports = WhyUs;
