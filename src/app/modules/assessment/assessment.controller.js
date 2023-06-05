const Assessment = require("./assessment.model");
const {
  insertAssessmentToDB,
  getAssessmentFromDB,
  getAssessmentByIDFromDB,
  updateAssessmentByIDToDB,
  deleteAssessmentByIDFromDB,
} = require("./assessment.service");

const insertAssessment = async (req, res) => {
  const data = req.body;
  try {
    let assessment = await Assessment.find({}).exec();

    if (assessment.length > 0) {
      return res.send({
        status: "fail",
        message: "Already have a event assessment",
      });
    }

    assessment = await insertAssessmentToDB(data);

    res.send({
      status: "success",
      message: "Assessment added successfully",
      data: assessment,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to add assessment",
    });
  }
};

const getAssessment = async (req, res) => {
  try {
    const assessment = await getAssessmentFromDB();

    res.send({
      status: "success",
      data: assessment,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to load assessment",
    });
  }
};

const getAssessmentByID = async (req, res) => {
  const { id } = req.params;
  try {
    const assessment = await getAssessmentByIDFromDB(id);

    res.send({
      status: "success",
      data: assessment,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to load Assessment",
    });
  }
};

const updateAssessmentByID = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const result = await updateAssessmentByIDToDB(id, data);

    res.send({
      status: "success",
      message: "Assessment updated successfully",
      data: result,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to update assessment",
    });
  }
};

const deleteAssessmentByID = async (req, res) => {
  const { id } = req.params;
  try {
    const remainingAssessment = await deleteAssessmentByIDFromDB(id);

    res.send({
      status: "success",
      message: "Assessment deleted successfully",
      data: remainingAssessment,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to delete assessment",
    });
  }
};

module.exports = {
  insertAssessment,
  getAssessment,
  getAssessmentByID,
  updateAssessmentByID,
  deleteAssessmentByID,
};
