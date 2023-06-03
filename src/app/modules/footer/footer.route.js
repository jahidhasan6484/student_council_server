const express = require("express");
const {
  insertFooter,
  getFooter,
  getFooterByID,
  updateFooterByID,
  deleteFooterByID,
} = require("./footer.controller");

const router = express.Router();

router.post("/", insertFooter);
router.get("/", getFooter);
router.get("/:id", getFooterByID);
router.patch("/:id", updateFooterByID);
router.delete("/:id", deleteFooterByID);

module.exports = router;
