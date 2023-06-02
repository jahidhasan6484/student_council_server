const { default: mongoose } = require("mongoose");

const logoSchema = mongoose.Schema(
  {
    headerLogoURL: {
      type: String,
      required: true,
    },
    footerLogoURL: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Logo = mongoose.model("logo", logoSchema);
module.exports = Logo;
