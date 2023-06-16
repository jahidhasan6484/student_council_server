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
          required: false,
        },
        city: {
          type: String,
          required: false,
        },
        zipCode: {
          type: String,
          required: false,
        },
        streetAddress: {
          type: String,
          required: false,
        },
      },
    ],
    mailingAddress: [
      {
        country: {
          type: String,
          required: false,
        },
        city: {
          type: String,
          required: false,
        },
        zipCode: {
          type: String,
          required: false,
        },
        streetAddress: {
          type: String,
          required: false,
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
      required: false,
    },
    havePassport: {
      type: String,
      required: true,
    },
    isPassportValid: {
      type: String,
      required: false,
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
          required: false,
        },
        relationship: {
          type: String,
          required: false,
        },
        phone: {
          type: String,
          required: false,
        },
        whatsApp: {
          type: String,
          required: false,
        },
        email: {
          type: String,
          required: false,
        },
      },
    ],
    qualification: [
      {
        institution: {
          type: String,
          required: false,
        },
        yearCompleted: {
          type: String,
          required: false,
        },
        result: {
          type: String,
          required: false,
        },
        stream: {
          type: String,
          required: false,
        },
        country: {
          type: String,
          required: false,
        },
        city: {
          type: String,
          required: false,
        },

      },
    ],
    additionalDegrees: {
      type: String,
      required: false,
    },
    jobExperience: [
      {
        institute: {
          type: String,
          required: false,
        },
        position: {
          type: String,
          required: false,
        },
        dateOfJoining: {
          type: String,
          required: false,
        },
        country: {
          type: String,
          required: false,
        },
        city: {
          type: String,
          required: false,
        },
      },
    ],
    additionalComments: {
      type: String,
      required: false,
    },
    englishProficiency: [
      {
        proficiency: {
          type: String,
          required: false,
        },
        whereCompleted: {
          type: String,
          required: false,
        },
        whichInstitution: {
          type: String,
          required: false,
        },
        score: {
          type: String,
          required: false,
        },
        year: {
          type: String,
          required: false,
        },
        scheduled: {
          type: String,
          required: false,
        },
        country: {
          type: String,
          required: false,
        },
        comments: {
          type: String,
          required: false,
        },
      },
    ],
    date: {
      type: Number,
      required: true,
    },
    month: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: false,
  }
);

const VisitingStudent = mongoose.model(
  "visiting_student",
  visitingStudentSchema
);
module.exports = VisitingStudent;
