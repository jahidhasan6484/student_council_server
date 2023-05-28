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
    requirements : {
        type: [String],
        required: true
    },
    documents: {
        type: [String],
        required: true
    }
},
    {
        timestamps: true,
    }
);

const Country = mongoose.model("country", countrySchema);
module.exports = Country;
