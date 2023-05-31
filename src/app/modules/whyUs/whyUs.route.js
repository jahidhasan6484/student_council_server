const express = require("express");
const {
  insertWhyUs,
  getWhyUs,
  getWhyUsByID,
  updateWhyUsByID,
  deleteWhyUsByID,
} = require("./whyUs.controller");

const router = express.Router();

router.post("/", insertWhyUs);
router.get("/", getWhyUs);
router.get("/:id", getWhyUsByID);
router.patch("/:id", updateWhyUsByID);
router.delete("/:id", deleteWhyUsByID);

module.exports = router;
