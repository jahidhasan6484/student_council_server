const express = require("express");
const {
  insertRegistration,
  getRegistration,
  getRegistrationByID,
  updateRegistrationByID,
  deleteRegistrationByID,
} = require("./registration.controller");

const router = express.Router();

router.post("/", insertRegistration);
router.get("/", getRegistration);
router.get("/:id", getRegistrationByID);
router.patch("/:id", updateRegistrationByID);
router.delete("/:id", deleteRegistrationByID);

module.exports = router;
