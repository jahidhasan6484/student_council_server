const { default: mongoose } = require("mongoose");

const expoSchema = mongoose.Schema(
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
    faq: [
      {
        question: {
          type: String,
          require: true,
        },
        answer: {
          type: String,
          require: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Expo = mongoose.model("expo", expoSchema);
module.exports = Expo;
