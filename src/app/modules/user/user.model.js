const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: String,
        require: true
    },
    userName: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    },
},
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);
module.exports = User;