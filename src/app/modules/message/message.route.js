const express = require("express");
const { createMessage, getMessages } = require("./message.controller");

const router = express.Router();

router.post("/", createMessage);
router.get("/:chatID", getMessages);

module.exports = router;
