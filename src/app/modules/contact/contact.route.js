const express = require("express");
const {
  contactRequest,
  getContactRequest,
  getTodayContactRequest,
  getByReference,
  getBySocialPlatform,
} = require("./contact.controller");

const router = express.Router();

router.post("/", contactRequest);
router.get("/", getContactRequest);
router.get("/today", getTodayContactRequest);
router.get("/:ref", getByReference);
router.get("/social/:social", getBySocialPlatform);

module.exports = router;
