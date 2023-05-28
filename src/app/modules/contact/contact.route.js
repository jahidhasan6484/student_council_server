const express = require('express');
const { contactRequest, getContactRequest, getTodayContactRequest, getByReference } = require('./contact.controller');

const router = express.Router();

router.post("/", contactRequest)
router.get("/", getContactRequest)
router.get("/today", getTodayContactRequest)
router.get("/:ref", getByReference)

module.exports = router;