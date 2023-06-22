const mongoose = require("mongoose");

const userVerificationOTP = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
});

const UserVerificationOTP = mongoose.model(
  "user_verification",
  userVerificationOTP
);

module.exports = UserVerificationOTP;
