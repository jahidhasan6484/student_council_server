const express = require('express');
const { insertUniversity, getUniversitiesBycountryName, getUniversity } = require('./university.controller');

const router = express.Router();

router.post("/", insertUniversity)
router.get("/", getUniversity)
router.get("/:countryName", getUniversitiesBycountryName)

module.exports = router;