const { default: mongoose } = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model("chat", chatSchema);
module.exports = Chat;
