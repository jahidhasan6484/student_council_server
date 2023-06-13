const express = require("express");
const {
  registerUser,
  getRegisteredBy,
  loginUser,
  getUsers,
  getUsersByRole,
} = require("./user.controller");

const router = express.Router();

router.post("/register", registerUser);
router.get("/", getUsers);
router.get("/login", loginUser);
router.get("/role/:role", getUsersByRole);
router.get("/register/:registeredBy", getRegisteredBy);

module.exports = router;
