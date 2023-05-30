const { default: mongoose } = require("mongoose");

const testimonialSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    isApprove: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Testimonial = mongoose.model("testimonial", testimonialSchema);
module.exports = Testimonial;
