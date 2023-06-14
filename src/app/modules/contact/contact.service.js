const Contact = require("./contact.model");

const insertContactRequestToDB = async (_data) => {
  await Contact.create(_data);
};

const getContactRequestFromDB = async () => {
  return await Contact.find({}).exec();
};

const getByIDFromDB = async (_id) => {
  return await Contact.findById(_id);
};

const updateContactByIDToDB = async (_id, _newData) => {
  await Contact.findByIdAndUpdate(_id, _newData, {
    new: true,
    runValidators: true,
  });

  return await Contact.find({});
};

const getTodayContactRequestFromDB = async () => {
  const today = new Date();

  const todayQuery = {
    $and: [
      { date: today.getDate() },
      { month: today.getMonth() + 1 },
      { year: today.getFullYear() },
    ],
  };

  return await Contact.find(todayQuery).exec();
};

const getByReferenceFromDB = async (_ref) => {
  return await Contact.find({ reference: _ref });
};

const getBySocialPlatformFromDB = async (_social) => {
  return await Contact.find({ socialPlatform: _social });
};

module.exports = {
  insertContactRequestToDB,
  getContactRequestFromDB,
  getByIDFromDB,
  updateContactByIDToDB,
  getTodayContactRequestFromDB,
  getByReferenceFromDB,
  getBySocialPlatformFromDB,
};
