const express = require("express");
const {
  insertUniversity,
  getUniversitiesBycountryName,
  getUniversityByID,
  deleteUniversityByID,
  updateUniversityByID,
  getUniversity,
} = require("./university.controller");

const router = express.Router();

router.post("/", insertUniversity);
router.get("/", getUniversity);
router.get("/:countryName", getUniversitiesBycountryName);
router.get("/uni/:countryID/:universityID", getUniversityByID);
router.patch("/uni/:countryID/:universityID", updateUniversityByID);
router.delete("/uni/:countryID/:universityID", deleteUniversityByID);

module.exports = router;
