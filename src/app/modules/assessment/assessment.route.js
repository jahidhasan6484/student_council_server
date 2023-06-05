const express = require("express");
const {
  insertAssessment,
  getAssessment,
  getAssessmentByID,
  updateAssessmentByID,
  deleteAssessmentByID,
} = require("./assessment.controller");

const router = express.Router();

router.post("/", insertAssessment);
router.get("/", getAssessment);
router.get("/:id", getAssessmentByID);
router.patch("/:id", updateAssessmentByID);
router.delete("/:id", deleteAssessmentByID);

module.exports = router;
