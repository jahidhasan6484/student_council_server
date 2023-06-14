const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: String,
      require: true,
    },
    userID: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      enum: ["admin", "student", "sub-admin"],
      require: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    registeredBy: {
      type: String,
    },
    jwtToken: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
    zipCode: {
      type: String,
      require: true,
    },
    country: {
      type: String,
      require: true,
    },
    imageURL: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
