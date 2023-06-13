const Chat = require("./chat.model");

const createChat = async (req, res) => {
  const { senderID, reciverID } = req.body;
  try {
    const chats = await Chat.findOne({
      members: { $all: [senderID, reciverID] },
    });

    if (chats) {
      return res.send({
        status: "success",
        message: "Chat already created",
        data: chats,
      });
    }

    const newChat = new Chat({
      members: [senderID, reciverID],
    });

    const response = await newChat.save();

    res.send({
      status: "success",
      data: response,
    });
  } catch (error) {
    res.send({
      status: "fail",
      message: "FAIL",
    });
  }
};

const findUserChats = async (req, res) => {
  const { userID } = req.params;
  try {
    const chats = await Chat.find({
      members: { $in: [userID] },
    });

    res.send({
      status: "success",
      data: chats,
    });
  } catch (error) {
    res.send({
      status: "fail",
      message: "FAIL",
    });
  }
};

const findChat = async (req, res) => {
  const { senderID, reciverID } = req.params;
  try {
    const chats = await Chat.findOne({
      members: { $all: [senderID, reciverID] },
    });

    res.send({
      status: "success",
      data: chats,
    });
  } catch (error) {
    res.send({
      status: "fail",
      message: "FAIL",
    });
  }
};

module.exports = {
  createChat,
  findUserChats,
  findChat,
};
