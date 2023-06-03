const Privacy = require("./privacy.model");

const insertPrivacyToDB = async (_data) => {
  await Privacy.create(_data);

  return await Privacy.find({});
};

const getPrivacyFromDB = async () => {
  return await Privacy.find({}).exec();
};

const getPrivacyByIDFromDB = async (_id) => {
  return await Privacy.findById(_id);
};

const updatePrivacyByIDToDB = async (_id, _newData) => {
  await Privacy.findByIdAndUpdate(_id, _newData, {
    new: true,
    runValidators: true,
  });

  return await Privacy.find({});
};

const deletePrivacyByIDFromDB = async (_id) => {
  await Privacy.findByIdAndDelete(_id);
  return await Privacy.find({});
};

module.exports = {
  insertPrivacyToDB,
  getPrivacyFromDB,
  getPrivacyByIDFromDB,
  updatePrivacyByIDToDB,
  deletePrivacyByIDFromDB,
};
