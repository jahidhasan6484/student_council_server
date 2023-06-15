const University = require("./university.model");
// const ObjectId = require('mongodb').ObjectId;

const getUniversityFromDB = async () => {
  return await University.find({}).exec();
};

const getUniversitiesBycountryNameFromDB = async (_countryName) => {
  return await University.findOne({ countryName: _countryName });
};

const getUniversityByIDFromDB = async (_countryID, _universityID) => {
  return await University.findOne(
    {
      _id: _countryID,
      "universities._id": _universityID,
    },
    {
      "universities.$": 1,
    }
  );
};

const updateUniversityByIDFromDB = async (
  _countryID,
  _universityID,
  _newData
) => {
  return await University.updateOne(
    { _id: _countryID, "universities._id": _universityID },
    { $set: { "universities.$": _newData } }
  );
};

const deleteUniversityByIDFromDB = async (_countryID, _universityID) => {
  await University.updateOne(
    { _id: _countryID },
    { $pull: { universities: { _id: _universityID } } }
  );

  return await University.find({}).exec();
};

module.exports = {
  getUniversitiesBycountryNameFromDB,
  getUniversityFromDB,
  getUniversityByIDFromDB,
  updateUniversityByIDFromDB,
  deleteUniversityByIDFromDB,
};
