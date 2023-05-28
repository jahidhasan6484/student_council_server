const express = require('express');
const { insertSingleImage } = require('./uploadFile.controller');

const router = express.Router();

router.post("/singleImage", insertSingleImage) 

module.exports = router;