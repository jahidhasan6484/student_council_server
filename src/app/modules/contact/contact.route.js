const express = require("express");
const {
  contactRequest,
  getContactRequest,
  getContactByID,
  getTodayContactRequest,
  getByReference,
  getBySocialPlatform,
  updateContactByID,
  getByStatus,
} = require("./contact.controller");

const router = express.Router();

router.post("/", contactRequest);
router.get("/", getContactRequest);
router.get("/:id", getContactByID);
router.patch("/:id", updateContactByID);
router.get("/day/today", getTodayContactRequest);
router.get("/reference/:ref", getByReference);
router.get("/social/:social", getBySocialPlatform);
router.get("/status/:status", getByStatus);

module.exports = router;
