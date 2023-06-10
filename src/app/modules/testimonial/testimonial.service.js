const Testimonial = require("./testimonial.model");

const insertTestimonialToDB = async (_data) => {
  await Testimonial.create(_data);
  return await Testimonial.find({});
};

const getTestimonialsFromDB = async () => {
  return await Testimonial.find({}).exec();
};

const getTestimonialsByIDFromDB = async (_id) => {
  return await Testimonial.findById(_id);
};

const updatePostToDB = async (_id, _newData) => {
  await Testimonial.findByIdAndUpdate(_id, _newData, {
    new: true,
    runValidators: true,
  });

  return await Testimonial.find({});
};

const approveTestimonialByIDToDB = async (_id) => {
  await Testimonial.updateOne({ _id: _id }, { isApprove: true });

  return await Testimonial.find({});
};

const deleteTestimonialByIDFromDB = async (_id) => {
  await Testimonial.findByIdAndDelete(_id);

  return await Testimonial.find({});
};

module.exports = {
  insertTestimonialToDB,
  getTestimonialsFromDB,
  approveTestimonialByIDToDB,
  deleteTestimonialByIDFromDB,
  getTestimonialsByIDFromDB,
  updatePostToDB,
};
