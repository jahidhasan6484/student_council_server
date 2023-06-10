const express = require("express");
const {
  insertUniversity,
  getUniversitiesBycountryName,
  getUniversityByID,
  deleteUniversityByID,
  updateUniversityByID,
} = require("./university.controller");

const router = express.Router();

router.post("/", insertUniversity);
router.get("/:countryName", getUniversitiesBycountryName);
router.get("/uni/:countryID", getUniversityByID); // Send university _id as a query
router.patch("/uni/:countryID", updateUniversityByID); // Send university _id as a query
router.delete("/uni/:countryID", deleteUniversityByID); // Send university _id as a query

module.exports = router;
