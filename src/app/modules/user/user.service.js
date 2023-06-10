const User = require("./user.model");

const registerUserToDB = async (data) => {
  await User.create(data);
};

const getRegisteredByFromDB = async (_registeredBy) => {
  return await User.find({ registeredBy: _registeredBy }).exec();
};

const generateUserID = async () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");

  const userId = `${day}${month}${year}${hours}${minutes}${seconds}`;
  return userId;
};

const generateAuthorityUserID = async (_fullName) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  const cleanedName = _fullName.replace(/[^a-zA-Z0-9]/g, "");

  const userId = `${cleanedName.toLowerCase()}${day}${month}${year}`;
  return userId;
};

module.exports = {
  registerUserToDB,
  getRegisteredByFromDB,
  generateUserID,
  generateAuthorityUserID,
};
