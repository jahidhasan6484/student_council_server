const express = require("express");
const { createChat, findUserChats, findChat } = require("./chat.controller");

const router = express.Router();

router.post("/", createChat);
router.get("/:userID", findUserChats);
router.get("/find/:senderID/:reciverID", findChat);

module.exports = router;
