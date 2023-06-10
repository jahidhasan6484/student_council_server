const express = require("express");
const { registerUser, getRegisteredBy } = require("./user.controller");

const router = express.Router();

router.post("/register", registerUser);
router.get("/register/:registeredBy", getRegisteredBy);

module.exports = router;
