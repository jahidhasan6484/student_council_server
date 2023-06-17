const User = require("./user.model");

const registerUserToDB = async (data) => {
  await User.create(data);
};

const getUsersFromDB = async () => {
  return await User.find({ isActive: true }).exec();
};

const getUserByIdentifierFromDB = async (_identifier) => {
  return await User.findOne(
    {
      $or: [{ userID: _identifier }, { email: _identifier }],
    },
    {
      fullName: 1,
      userID: 1,
      email: 1,
      phoneNumber: 1,
      gender: 1,
      address: 1,
      city: 1,
      zipCode: 1,
      country: 1,
      imageURL: 1,
    }
  );
};

const getUsersByRoleFromDB = async (_role) => {
  return await User.find(
    { role: _role, isActive: true },
    {
      fullName: 1,
      userID: 1,
      email: 1,
      phoneNumber: 1,
      gender: 1,
      address: 1,
      city: 1,
      zipCode: 1,
      country: 1,
      imageURL: 1,
    }
  ).exec();
};

const getRegisteredByFromDB = async (_registeredBy) => {
  return await User.find({
    registeredBy: _registeredBy,
    isActive: true,
  }).exec();
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

  const userId = `${cleanedName
    .slice(0, 5)
    .toLowerCase()}${day}${month}${year}`;
  return userId;
};

const getProfileInfoByIdentifierFromDB = async (_identifier) => {
  return await User.findOne(
    {
      $or: [{ userID: _identifier }, { email: _identifier }],
    },
    {
      fullName: 1,
      userID: 1,
      email: 1,
      phoneNumber: 1,
      gender: 1,
      address: 1,
      city: 1,
      zipCode: 1,
      country: 1,
      imageURL: 1,
    }
  );
};

const updateProfileInfoByIdentifierFromDB = async (_identifier, _newData) => {
  const filter = {
    $or: [{ userID: _identifier }, { email: _identifier }],
  };

  const update = {
    $set: _newData,
  };

  const updatedProfile = await User.findOneAndUpdate(filter, update, {
    new: true,
  });

  return updatedProfile;
};

module.exports = {
  registerUserToDB,
  getRegisteredByFromDB,
  getUsersFromDB,
  getUserByIdentifierFromDB,
  getUsersByRoleFromDB,
  generateUserID,
  generateAuthorityUserID,
  getProfileInfoByIdentifierFromDB,
  updateProfileInfoByIdentifierFromDB,
};
