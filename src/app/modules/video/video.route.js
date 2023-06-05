const express = require("express");
const {
  insertVideo,
  getVideos,
  getVideoByID,
  updateVideoByID,
  deleteVideoByID,
} = require("./video.controller");

const router = express.Router();

router.post("/", insertVideo);
router.get("/", getVideos);
router.get("/:id", getVideoByID);
router.patch("/:id", updateVideoByID);
router.delete("/:id", deleteVideoByID);

module.exports = router;
