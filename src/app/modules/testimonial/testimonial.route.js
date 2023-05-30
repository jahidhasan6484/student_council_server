const express = require("express");
const {
  insertTestimonial,
  getTestimonials,
  approveTestimonialByID,
  deleteTestimonialByID,
} = require("./testimonial.controller");

const router = express.Router();

router.post("/", insertTestimonial);
router.get("/", getTestimonials);
router.patch("/approve/:id", approveTestimonialByID);
router.delete("/:id", deleteTestimonialByID);

module.exports = router;
