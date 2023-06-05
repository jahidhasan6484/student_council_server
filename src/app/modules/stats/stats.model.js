const { default: mongoose } = require("mongoose");

const statsSchema = mongoose.Schema(
  {
    studentsCount: {
      type: Number,
      required: true,
    },
    partnerCount: {
      type: Number,
      required: true,
    },
    councilorCount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Stats = mongoose.model("stat", statsSchema);
module.exports = Stats;
