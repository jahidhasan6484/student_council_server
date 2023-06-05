const express = require("express");
const {
  insertSeminar,
  getSeminar,
  getSeminarByID,
  updateSeminarByID,
  deleteSeminarByID,
} = require("./seminar.controller");

const router = express.Router();

router.post("/", insertSeminar);
router.get("/", getSeminar);
router.get("/:id", getSeminarByID);
router.patch("/:id", updateSeminarByID);
router.delete("/:id", deleteSeminarByID);

module.exports = router;
