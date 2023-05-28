const express = require('express');
const { insertUniversity, getUniversitiesBycountryName } = require('./university.controller');

const router = express.Router();

router.post("/", insertUniversity)
router.get("/:countryName", getUniversitiesBycountryName)

module.exports = router;