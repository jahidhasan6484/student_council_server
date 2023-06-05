const Assessment = require("./assessment.model");

const insertAssessmentToDB = async (_data) => {
  await Assessment.create(_data);

  return await Assessment.find({}).exec();
};

const getAssessmentFromDB = async () => {
  return await Assessment.find({}).exec();
};

const getAssessmentByIDFromDB = async (_id) => {
  return await Assessment.findOne({ _id: _id });
};

const updateAssessmentByIDToDB = async (_id, _newData) => {
  await Assessment.findByIdAndUpdate(_id, _newData, {
    new: true,
    runValidators: true,
  });

  return await Assessment.find({});
};

const deleteAssessmentByIDFromDB = async (_id) => {
  await Assessment.findByIdAndDelete(_id);
  return await Assessment.find({});
};

module.exports = {
  insertAssessmentToDB,
  getAssessmentFromDB,
  getAssessmentByIDFromDB,
  updateAssessmentByIDToDB,
  deleteAssessmentByIDFromDB,
};
