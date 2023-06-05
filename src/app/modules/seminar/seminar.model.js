const { default: mongoose } = require("mongoose");

const seminarSchema = mongoose.Schema(
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

const Seminar = mongoose.model("seminar", seminarSchema);
module.exports = Seminar;
