const { default: mongoose } = require("mongoose");

const universitySchema = mongoose.Schema({
    countryName: {
        type: String,
        required: true,
    },
    universities: [
        {
            name: {
                type: String,
                require: true
            },
            address: {
                type: String,
                required: true,
            },
            ranking: {
                type: Number,
                required: true,
            },
            officialWebsite: {
                type: String,
                required: true,
            },
            imageURL: {
                type: String,
                required: true
            },
        }
    ],
},
    {
        timestamps: true,
    }
);

const University = mongoose.model("university", universitySchema);
module.exports = University;


