const express = require("express");
const {
  insertLogo,
  getLogo,
  updateLogoByID,
  deleteLogoByID,
} = require("./logo.controller");

const router = express.Router();

router.post("/", insertLogo);
router.get("/", getLogo);
router.patch("/:id", updateLogoByID);
router.delete("/:id", deleteLogoByID);

module.exports = router;
