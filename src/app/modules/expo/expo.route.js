const express = require("express");
const {
  insertExpo,
  getExpo,
  getExpoByID,
  updateExpoByID,
  deleteExpoByID,
} = require("./expo.controller");

const router = express.Router();

router.post("/", insertExpo);
router.get("/", getExpo);
router.get("/:id", getExpoByID);
router.patch("/:id", updateExpoByID);
router.delete("/:id", deleteExpoByID);

module.exports = router;
