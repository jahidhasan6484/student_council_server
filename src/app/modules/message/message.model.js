const { default: mongoose } = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    chatID: {
      type: String,
      required: true,
    },
    senderID: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("message", messageSchema);
module.exports = Message;
