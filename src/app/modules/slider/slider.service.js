const Slider = require("./slider.model");

const insertSliderToDB = async (_data) => {
  await Slider.create(_data);

  return await Slider.find({});
};

const getSlidersFromDB = async () => {
  return await Slider.find({}).exec();
};

const getSliderByIDFromDB = async (_id) => {
  return await Slider.findById(_id);
};

const updateSliderByIDToDB = async (_id, _newData) => {
  await Slider.findByIdAndUpdate(_id, _newData, {
    new: true,
    runValidators: true,
  });

  return await Slider.find({});
};

const deleteSliderByIDFromDB = async (_id) => {
  await Slider.findByIdAndDelete(_id);
  return await Slider.find({});
};

module.exports = {
  insertSliderToDB,
  getSlidersFromDB,
  getSliderByIDFromDB,
  updateSliderByIDToDB,
  deleteSliderByIDFromDB,
};
