const Footer = require("./footer.model");

const insertFooterToDB = async (_data) => {
  await Footer.create(_data);

  return await Footer.find({});
};

const getFooterFromDB = async () => {
  return await Footer.find({}).exec();
};

const getFooterByIDFromDB = async (_id) => {
  return await Footer.findById(_id);
};

const updateFooterByIDToDB = async (_id, _newData) => {
  await Footer.findByIdAndUpdate(_id, _newData, {
    new: true,
    runValidators: true,
  });

  return await Footer.find({});
};

const deleteFooterByIDFromDB = async (_id) => {
  await Footer.findByIdAndDelete(_id);
  return await Footer.find({});
};

module.exports = {
  insertFooterToDB,
  getFooterFromDB,
  getFooterByIDFromDB,
  updateFooterByIDToDB,
  deleteFooterByIDFromDB,
};
