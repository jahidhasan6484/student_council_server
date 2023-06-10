const { default: mongoose } = require("mongoose");

const blogAndNewsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    date: {
      type: String,
      require: true,
    },
    month: {
      type: String,
      require: true,
    },
    year: {
      type: String,
      require: true,
    },
    filename: {
      type: String,
      require: true,
    },
    path: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const BlogAndNews = mongoose.model("blogAndNews", blogAndNewsSchema);
module.exports = BlogAndNews;
