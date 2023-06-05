const express = require("express");
const { insertStats, getStats, updateStats } = require("./stats.controller");

const router = express.Router();

router.post("/", insertStats);
router.get("/", getStats);
router.patch("/:id", updateStats);

module.exports = router;
