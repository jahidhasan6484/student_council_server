const About = require("./about.model");

const insertAboutToDB = async (_data) => {
  await About.create(_data);

  return await About.find({});
};

const getAboutFromDB = async () => {
  return await About.find({}).exec();
};

const getAboutByIDFromDB = async (_id) => {
  return await About.findById(_id);
};

const updateAboutByIDToDB = async (_id, _newData) => {
  await About.findByIdAndUpdate(_id, _newData, {
    new: true,
    runValidators: true,
  });

  return await About.find({});
};

const deleteAboutByIDFromDB = async (_id) => {
  await About.findByIdAndDelete(_id);
  return await About.find({});
};

module.exports = {
  insertAboutToDB,
  getAboutFromDB,
  getAboutByIDFromDB,
  updateAboutByIDToDB,
  deleteAboutByIDFromDB,
};
