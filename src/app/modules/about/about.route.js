const express = require("express");
const {
  insertAbout,
  getAbout,
  getAboutByID,
  updateAboutByID,
  deleteAboutByID,
} = require("./about.controller");

const router = express.Router();

router.post("/", insertAbout);
router.get("/", getAbout);
router.get("/:id", getAboutByID);
router.patch("/:id", updateAboutByID);
router.delete("/:id", deleteAboutByID);

module.exports = router;
