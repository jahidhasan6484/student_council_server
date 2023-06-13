const { default: mongoose } = require("mongoose");

const visitingStudentSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    countryOfBirth: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    permanentAddress: [
      {
        country: {
          type: String,
          required: true,
        },
        city: {
          type: String,
          required: true,
        },
        zipCode: {
          type: String,
          required: true,
        },
        streetAddress: {
          type: String,
          required: true,
        },
      },
    ],
    mailingAddress: [
      {
        country: {
          type: String,
          required: true,
        },
        city: {
          type: String,
          required: true,
        },
        zipCode: {
          type: String,
          required: true,
        },
        streetAddress: {
          type: String,
          required: true,
        },
      },
    ],
    phone: {
      type: String,
      required: true,
    },
    whatsApp: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    hearAboutUs: {
      type: String,
      required: true,
    },
    referredPerson: {
      type: String,
      required: true,
    },
    havePassport: {
      type: String,
      required: true,
    },
    isPassportValid: {
      type: String,
      required: true,
    },
    visaDeniedCountry: {
      type: Array,
    },
    traveledCountry: {
      type: Array,
    },
    guardianDetails: [
      {
        fullName: {
          type: String,
          required: true,
        },
        relationship: {
          type: String,
          required: true,
        },
        phone: {
          type: String,
          required: true,
        },
        whatsApp: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
      },
    ],
    qualification: [
      {
        type: String,
        required: true,
      },
    ],
    additionalDegrees: {
      type: String,
      required: true,
    },
    jobExperience: [
      {
        institute: {
          type: String,
          required: true,
        },
        position: {
          type: String,
          required: true,
        },
        dateOfJoining: {
          type: String,
          required: true,
        },
        country: {
          type: String,
          required: true,
        },
        city: {
          type: String,
          required: true,
        },
      },
    ],
    additionalComments: {
      type: String,
      required: true,
    },
    englishProficiency: [
      {
        proficiency: {
          type: String,
          required: true,
        },
        whereCompleted: {
          type: String,
          required: true,
        },
        whichInstitution: {
          type: String,
          required: true,
        },
        score: {
          type: String,
          required: true,
        },
        year: {
          type: String,
          required: true,
        },
        scheduled: {
          type: String,
          required: true,
        },
        country: {
          type: String,
          required: true,
        },
        comments: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const VisitingStudent = mongoose.model(
  "visiting_student",
  visitingStudentSchema
);
module.exports = VisitingStudent;
