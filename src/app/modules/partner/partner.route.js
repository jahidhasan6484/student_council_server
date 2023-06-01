const express = require("express");
const {
  insertPartner,
  getPartner,
  getPartnerByID,
  updatePartner,
  deletePartner,
} = require("./partner.controller");

const router = express.Router();

router.post("/", insertPartner);
router.get("/", getPartner);
router.get("/:id", getPartnerByID);
router.patch("/:id", updatePartner);
router.delete("/:id", deletePartner);

module.exports = router;
