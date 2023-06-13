const express = require("express");
const {
  insertVisitingStudentInfo,
  getVisitingStudentByID,
  getVisitedStudents,
  updateVisitingStudentByID,
  deleteVisitingStudentByID,
} = require("./VisitingStudent.controller");

const router = express.Router();

router.post("/", insertVisitingStudentInfo);
router.get("/", getVisitedStudents);
router.get("/:id", getVisitingStudentByID);
router.patch("/:id", updateVisitingStudentByID);
router.delete("/:id", deleteVisitingStudentByID);

module.exports = router;
