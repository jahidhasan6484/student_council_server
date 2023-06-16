const VisitingStudent = require("./VisitingStudent.model");

const insertVisitingStudentInfoToDB = async (_data) => {
  await VisitingStudent.create(_data);

  return await VisitingStudent.find({}).exec();
};

const getVisitedStudentsFromDB = async () => {
  return await VisitingStudent.find({}).exec();
};

const getVisitingStudentByIDFromDB = async (_id) => {
  return await VisitingStudent.findById(_id);
};

const getTodayVisitingStudentFromDB = async () => {
  const today = new Date();

  const todayQuery = {
    $and: [
      { date: today.getDate() },
      { month: today.getMonth() + 1 },
      { year: today.getFullYear() },
    ],
  };

  return await VisitingStudent.find(todayQuery).exec();
};

const updateVisitingStudentByIDToDB = async (_id, _newData) => {
  await VisitingStudent.findByIdAndUpdate(_id, _newData, {
    new: true,
    runValidators: true,
  });

  return await VisitingStudent.find({});
};

const deleteVisitingStudentByIDToDB = async (_id) => {
  await VisitingStudent.findByIdAndDelete(_id);
  return await VisitingStudent.find({});
};

module.exports = {
  insertVisitingStudentInfoToDB,
  getVisitedStudentsFromDB,
  getVisitingStudentByIDFromDB,
  getTodayVisitingStudentFromDB,
  updateVisitingStudentByIDToDB,
  deleteVisitingStudentByIDToDB,
};
