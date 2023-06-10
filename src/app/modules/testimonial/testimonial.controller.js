const {
  insertTestimonialToDB,
  getTestimonialsFromDB,
  approveTestimonialByIDToDB,
  deleteTestimonialByIDFromDB,
} = require("./testimonial.service");

const insertTestimonial = async (req, res) => {
  const data = req.body;
  try {
    const result = await insertTestimonialToDB(data);
    res.send({
      status: "success",
      message: "Testimonial added successfully",
      data: result,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to add testimonial",
    });
  }
};

const getTestimonials = async (req, res) => {
  try {
    const testimonials = await getTestimonialsFromDB();

    res.send({
      status: "success",
      data: testimonials,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to load testimonial",
    });
  }
};

const approveTestimonialByID = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTestimonial = await approveTestimonialByIDToDB(id);

    res.send({
      status: "success",
      data: updatedTestimonial,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to approve testimonial",
    });
  }
};

const deleteTestimonialByID = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTestimonial = await deleteTestimonialByIDFromDB(id);

    res.send({
      status: "success",
      data: updatedTestimonial,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to delete testimonial",
    });
  }
};

module.exports = {
  insertTestimonial,
  getTestimonials,
  approveTestimonialByID,
  deleteTestimonialByID,
};
