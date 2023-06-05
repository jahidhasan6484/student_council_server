const express = require("express");
const {
  insertStats,
  getStats,
  updateStatsByID,
} = require("./stats.controller");

const router = express.Router();

router.post("/", insertStats);
router.get("/", getStats);
router.patch("/:id", updateStatsByID);

module.exports = router;
