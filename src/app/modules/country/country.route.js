const express = require('express');
const { insertCountry, getCountry, getCountryByID, updateCountryByID, deleteCountryByID } = require('./country.controller');

const router = express.Router();

router.post("/", insertCountry)
router.get("/", getCountry)
router.get("/:id", getCountryByID)
router.patch("/:id", updateCountryByID)
router.delete("/:id", deleteCountryByID)

module.exports = router;