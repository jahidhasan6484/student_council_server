const Seminar = require("./seminar.model");

const insertSeminarToDB = async (_data) => {
  await Seminar.create(_data);

  return await Seminar.find({}).exec();
};

const getSeminarFromDB = async () => {
  return await Seminar.find({}).exec();
};

const getSeminarByIDFromDB = async (_id) => {
  return await Seminar.findOne({ _id: _id });
};

const updateSeminarByIDToDB = async (_id, _newData) => {
  await Seminar.findByIdAndUpdate(_id, _newData, {
    new: true,
    runValidators: true,
  });

  return await Seminar.find({});
};

const deleteSeminarByIDFromDB = async (_id) => {
  await Seminar.findByIdAndDelete(_id);
  return await Seminar.find({});
};

module.exports = {
  insertSeminarToDB,
  getSeminarFromDB,
  getSeminarByIDFromDB,
  updateSeminarByIDToDB,
  deleteSeminarByIDFromDB,
};
