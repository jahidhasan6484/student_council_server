const express = require("express");
const {
  registerUser,
  getRegisteredBy,
  loginUser,
  getUsers,
  getUsersByRole,
  getUserById,
} = require("./user.controller");

const router = express.Router();

router.post("/register", registerUser);
router.get("/", getUsers);
router.get("/:email", getUserById);
router.post("/login", loginUser);
router.get("/role/:role", getUsersByRole);
router.get("/register/:registeredBy", getRegisteredBy);

module.exports = router;
