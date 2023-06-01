const Partner = require("./partner.model");

const insertPartnerToDB = async (_data) => {
  await Partner.create(_data);

  return await Partner.find({}).exec();
};

const getPartnerFromDB = async () => {
  return await Partner.find({}).exec();
};

const getPartnerByIDFromDB = async (_id) => {
  return await Partner.findById(_id);
};

const updatePartnerToDB = async (_id, _newData) => {
  await Partner.findByIdAndUpdate(_id, _newData, {
    new: true,
    runValidators: true,
  });

  return await Partner.find({});
};

const deletePartnerFromDB = async (_id) => {
  await Partner.findByIdAndDelete(_id);
  return await Partner.find({});
};

module.exports = {
  insertPartnerToDB,
  getPartnerFromDB,
  getPartnerByIDFromDB,
  updatePartnerToDB,
  deletePartnerFromDB,
};
