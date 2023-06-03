const { default: mongoose } = require("mongoose");

const footerSchema = mongoose.Schema(
  {
    aboutCompany: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    facebookGroupURL: {
      type: String,
      required: true,
    },
    facebookPageURL: {
      type: String,
      required: true,
    },
    twitterURL: {
      type: String,
      required: true,
    },
    instagramURL: {
      type: String,
      required: true,
    },
    youtubeURL: {
      type: String,
      required: true,
    },
    copyrightContent: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Footer = mongoose.model("footer", footerSchema);
module.exports = Footer;
