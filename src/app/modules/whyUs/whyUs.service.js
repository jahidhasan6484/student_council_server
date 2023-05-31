const WhyUs = require("./whyUs.model");

const insertWhyUsToDB = async (_data) => {
  await WhyUs.create(_data);

  return await WhyUs.find({});
};

const getWhyUsFromDB = async () => {
  return await WhyUs.find({}).exec();
};

const getWhyUsByIDFromDB = async (_id) => {
  return await WhyUs.findById(_id);
};

const updateWhyUsByIDToDB = async (_id, _newData) => {
  await WhyUs.findByIdAndUpdate(_id, _newData, {
    new: true,
    runValidators: true,
  });

  return await WhyUs.find({});
};

const deleteWhyUsFromDB = async (_id) => {
  await WhyUs.findByIdAndDelete(_id);

  return await WhyUs.find({});
};

module.exports = {
  insertWhyUsToDB,
  getWhyUsFromDB,
  getWhyUsByIDFromDB,
  updateWhyUsByIDToDB,
  deleteWhyUsFromDB,
};
