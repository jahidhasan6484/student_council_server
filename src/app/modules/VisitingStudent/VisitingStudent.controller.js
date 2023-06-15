const {
  insertVisitingStudentInfoToDB,
  getVisitingStudentByIDFromDB,
  getVisitedStudentsFromDB,
  updateVisitingStudentByIDToDB,
  deleteVisitingStudentByIDToDB,
} = require("./VisitingStudent.service");

const insertVisitingStudentInfo = async (req, res) => {
  const data = req.body;
  try {
    const formInfo = await insertVisitingStudentInfoToDB(data);

    res.send({
      status: "success",
      message: "Form Submitted Successfully",
      data: formInfo,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "fail",
      message: "Failed to insert visiting student information",
    });
  }
};

const getVisitedStudents = async (req, res) => {
  console.log("sss");
  try {
    const allStudents = await getVisitedStudentsFromDB();
    res.send({
      status: "success",
      data: allStudents,
    });
  } catch (error) {
    res.send({
      status: "fail",
      message: "Failed to get students information",
    });
  }
};

const getVisitingStudentByID = async (req, res) => {
  const { id } = req.params;
  try {
    const info = await getVisitingStudentByIDFromDB(id);

    res.send({
      status: "success",
      data: info,
    });
  } catch (error) {
    res.send({
      status: "fail",
      message: "Failed to get student information",
    });
  }
};

const updateVisitingStudentByID = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const result = await updateVisitingStudentByIDToDB(id, data);

    res.send({
      status: "success",
      message: "Visiting student info updated successfully",
      data: result,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to update visiting student info",
    });
  }
};

const deleteVisitingStudentByID = async (req, res) => {
  const { id } = req.params;
  try {
    const remainingInfo = await deleteVisitingStudentByIDToDB(id);

    res.send({
      status: "success",
      message: "Visiting student deleted successfully",
      data: remainingInfo,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to delete visiting student",
    });
  }
};

module.exports = {
  insertVisitingStudentInfo,
  getVisitedStudents,
  getVisitingStudentByID,
  updateVisitingStudentByID,
  deleteVisitingStudentByID,
};
