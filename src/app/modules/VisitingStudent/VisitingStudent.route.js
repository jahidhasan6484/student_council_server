const express = require("express");
const {
  insertVisitingStudentInfo,
  getVisitingStudentByID,
  getVisitedStudents,
  updateVisitingStudentByID,
  deleteVisitingStudentByID,
  getTodayVisitingStudents,
} = require("./VisitingStudent.controller");

const router = express.Router();

router.post("/", insertVisitingStudentInfo);
router.get("/", getVisitedStudents);
router.get("/day/today", getTodayVisitingStudents);
router.get("/:id", getVisitingStudentByID);
router.patch("/:id", updateVisitingStudentByID);
router.delete("/:id", deleteVisitingStudentByID);

module.exports = router;
