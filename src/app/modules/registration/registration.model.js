const { default: mongoose } = require("mongoose");

const registrationSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    dateAndTime: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
    bannerImageURL: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Registration = mongoose.model("registration", registrationSchema);
module.exports = Registration;
