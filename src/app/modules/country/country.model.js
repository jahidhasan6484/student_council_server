const { default: mongoose } = require("mongoose");

const countrySchema = mongoose.Schema({
    countryName: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    requirements: [{
        question: {
            type: String,
            require: true
        },
        answer: {
            type: String,
            require: true
        }
    }],
    documents: [{
        question: {
            type: String,
            require: true
        },
        answer: {
            type: String,
            require: true
        }
    }],
},
    {
        timestamps: true,
    }
);

const Country = mongoose.model("country", countrySchema);
module.exports = Country;
