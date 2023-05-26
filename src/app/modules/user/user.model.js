const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    fullName: String,
    email: String,
    phoneNumber: String,
    userName: String,
    password: String,
    role: String,
    status: String
});

const User = mongoose.model("User", userSchema);
module.exports = User;