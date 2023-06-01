const Logo = require("./logo.model");

const insertLogoToDB = async (_data) => {
  await Logo.create(_data);

  return await Logo.find({});
};

const getLogoFromDB = async () => {
  return await Logo.find({});
};

const updateLogoByIDFromDB = async (_id, _newData) => {
  await Logo.findByIdAndUpdate(_id, _newData, {
    new: true,
    runValidators: true,
  });

  return await Logo.find({});
};

const deleteLogoByIDFromDB = async (_id) => {
  await Logo.findByIdAndDelete(_id);
  return await Logo.find({});
};

module.exports = {
  insertLogoToDB,
  getLogoFromDB,
  updateLogoByIDFromDB,
  deleteLogoByIDFromDB,
};
