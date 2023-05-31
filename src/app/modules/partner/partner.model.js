const { default: mongoose } = require("mongoose");

const partnerSchema = mongoose.Schema(
  {
    title: {
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

const Partner = mongoose.model("partner", partnerSchema);
module.exports = Partner;
