const express = require("express");
const {
  contactRequest,
  getContactRequest,
  getContactByID,
  getTodayContactRequest,
  getByReference,
  getBySocialPlatform,
} = require("./contact.controller");

const router = express.Router();

router.post("/", contactRequest);
router.get("/", getContactRequest);
router.get("/:id", getContactByID);
router.get("/today", getTodayContactRequest);
router.get("/reference/:ref", getByReference);
router.get("/social/:social", getBySocialPlatform);

module.exports = router;
