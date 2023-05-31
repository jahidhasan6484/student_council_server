const express = require("express");
const {
  insertSlider,
  getSliders,
  getSliderByID,
  updateSliderByID,
  deleteSliderByID,
} = require("./slider.controller");

const router = express.Router();

router.post("/", insertSlider);
router.get("/", getSliders);
router.get("/:id", getSliderByID);
router.patch("/:id", updateSliderByID);
router.delete("/:id", deleteSliderByID);

module.exports = router;
