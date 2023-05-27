const { default: mongoose } = require("mongoose");

const contactsSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    passportStatus: {
        type: String,
        required: true
    },
    aimingCountries: {
        type: [String],
        required: true
    },
    proficiency: {
        type: String,
        required: true
    },
    proficiencyScore: {
        type: Number,
        required: true
    },
    interestedCourseLevel: {
        type: String,
        required: true
    },
    interestedCourseName: {
        type: String,
        required: true
    },
    latestDegree: {
        type: String,
        required: true
    },
    latestInstitution: {
        type: String,
        required: true
    },
    subjectOrGroup: {
        type: String,
        required: true
    },
    passingYear: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    socialPlatform: {
        type: String,
        required: true
    },
    date: {
        type: Number,
        required: true
    },
    month: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    reference: {
        type: String,
        required: true
    }
},
    {
        timestamps: true,
    }
);

const Contacts = mongoose.model("contact", contactsSchema);
module.exports = Contacts;
