const express = require("express");
const {
  registerUser,
  getRegisteredBy,
  loginUser,
  getUsers,
  getUsersByRole,
  getUserById,
  getProfileInfoByIdentifier,
  updateProfileInfoByIdentifier,
} = require("./user.controller");

const router = express.Router();

router.post("/register", registerUser);
router.get("/", getUsers);
router.get("/:email", getUserById);
router.post("/login", loginUser);
router.get("/role/:role", getUsersByRole);
router.get("/register/:registeredBy", getRegisteredBy);

router.get("/profile/:identifier", getProfileInfoByIdentifier);
router.patch("/profile/:identifier", updateProfileInfoByIdentifier);

module.exports = router;
