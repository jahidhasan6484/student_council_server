const Expo = require("./expo.model");

const insertExpoToDB = async (_data) => {
  await Expo.create(_data);

  return await Expo.find({}).exec();
};

const getExpoFromDB = async () => {
  return await Expo.find({}).exec();
};

const getExpoByIDFromDB = async (_id) => {
  return await Expo.findOne({ _id: _id });
};

const updateExpoByIDToDB = async (_id, _newData) => {
  await Expo.findByIdAndUpdate(_id, _newData, {
    new: true,
    runValidators: true,
  });

  return await Expo.find({});
};

const deleteExpoByIDFromDB = async (_id) => {
  await Expo.findByIdAndDelete(_id);
  return await Expo.find({});
};

module.exports = {
  insertExpoToDB,
  getExpoFromDB,
  getExpoByIDFromDB,
  updateExpoByIDToDB,
  deleteExpoByIDFromDB,
};
