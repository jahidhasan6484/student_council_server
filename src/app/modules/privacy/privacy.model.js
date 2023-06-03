const { default: mongoose } = require("mongoose");

const privacyeSchema = mongoose.Schema(
  {
    privacyPolicy: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Privacy = mongoose.model("privacy", privacyeSchema);
module.exports = Privacy;
