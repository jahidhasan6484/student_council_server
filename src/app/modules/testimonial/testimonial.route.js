const express = require("express");
const {
  insertTestimonial,
  getTestimonials,
  approveTestimonialByID,
  deleteTestimonialByID,
  getTestimonialsByID,
  updatePost,
} = require("./testimonial.controller");

const router = express.Router();

router.post("/", insertTestimonial);
router.get("/", getTestimonials);
router.get("/single/:id", getTestimonialsByID);
router.patch("/approve/:id", approveTestimonialByID);
router.patch("/update/:id", updatePost);
router.delete("/:id", deleteTestimonialByID);

module.exports = router;
