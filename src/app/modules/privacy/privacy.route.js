const express = require("express");
const {
  insertPrivacy,
  getPrivacy,
  getPrivacyByID,
  updatePrivacyByID,
  deletePrivacyByID,
} = require("./privacy.controller");

const router = express.Router();

router.post("/", insertPrivacy);
router.get("/", getPrivacy);
router.get("/:id", getPrivacyByID);
router.patch("/:id", updatePrivacyByID);
router.delete("/:id", deletePrivacyByID);

module.exports = router;
