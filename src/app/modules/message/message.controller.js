const Message = require("./message.model");

const createMessage = async (req, res) => {
  const { chatID, senderID, text } = req.body;
  try {
    const message = new Message({
      chatID,
      senderID,
      text,
    });

    const response = await message.save();

    res.send({
      status: "success",
      data: response,
    });
  } catch (error) {
    res.send({
      status: "fail",
      data: error,
    });
  }
};

const getMessages = async (req, res) => {
  const { chatID } = req.params;
  try {
    const message = await Message.find({
      chatID,
    });

    res.send({
      status: "success",
      data: message,
    });
  } catch (error) {
    res.send({
      status: "fail",
      data: error,
    });
  }
};

module.exports = {
  createMessage,
  getMessages,
};
