const express = require('express');
const { contactRequest, getContactRequest, getTodayContactRequest } = require('./contact.controller');

const router = express.Router();

router.post("/", contactRequest)
router.get("/", getContactRequest)
router.get("/today", getTodayContactRequest)

module.exports = router;