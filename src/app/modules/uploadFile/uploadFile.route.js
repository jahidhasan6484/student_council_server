const express = require("express");
const {
  insertSingleImage,
  insertMultipleImage,
} = require("./uploadFile.controller");

const router = express.Router();

router.post("/singleImage", insertSingleImage);
router.post("/multipleImage", insertMultipleImage);

module.exports = router;
