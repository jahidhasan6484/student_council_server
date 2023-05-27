const { default: mongoose } = require("mongoose");

const serviceSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true,
    }
);

const Service = mongoose.model("service", serviceSchema);
module.exports = Service;
