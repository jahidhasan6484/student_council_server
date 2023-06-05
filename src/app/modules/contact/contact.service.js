const Contacts = require("./contact.model");

const insertContactRequestToDB = async (_data) => {
  await Contacts.create(_data);

  return Contacts.find({}).exec();
};

const getContactRequestFromDB = async () => {
  return await Contacts.find({}).exec();
};

const getByIDFromDB = async (_id) => {
  return await Contacts.findById(_id);
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

  return await Contacts.find(todayQuery).exec();
};

const getByReferenceFromDB = async (_ref) => {
  return await Contacts.find({ reference: _ref });
};

const getBySocialPlatformFromDB = async (_social) => {
  return await Contacts.find({ socialPlatform: _social });
};

module.exports = {
  insertContactRequestToDB,
  getContactRequestFromDB,
  getByIDFromDB,
  getTodayContactRequestFromDB,
  getByReferenceFromDB,
  getBySocialPlatformFromDB,
};
