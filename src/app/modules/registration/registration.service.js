const Registration = require("./registration.model");

const insertRegistrationToDB = async (_data) => {
  await Registration.create(_data);

  return await Registration.find({}).exec();
};

const getRegistrationFromDB = async () => {
  return await Registration.find({}).exec();
};

const getRegistrationByIDFromDB = async (_id) => {
  return await Registration.findOne({ _id: _id });
};

const updateRegistrationByIDToDB = async (_id, _newData) => {
  await Registration.findByIdAndUpdate(_id, _newData, {
    new: true,
    runValidators: true,
  });

  return await Registration.find({});
};

const deleteRegistrationByIDFromDB = async (_id) => {
  await Registration.findByIdAndDelete(_id);
  return await Registration.find({});
};

module.exports = {
  insertRegistrationToDB,
  getRegistrationFromDB,
  getRegistrationByIDFromDB,
  updateRegistrationByIDToDB,
  deleteRegistrationByIDFromDB,
};
