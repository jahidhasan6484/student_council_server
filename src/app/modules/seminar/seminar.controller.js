const Seminar = require("./seminar.model");
const {
  insertSeminarToDB,
  getSeminarFromDB,
  getSeminarByIDFromDB,
  updateSeminarByIDToDB,
  deleteSeminarByIDFromDB,
} = require("./Seminar.service");

const insertSeminar = async (req, res) => {
  const data = req.body;
  try {
    let seminar = await Seminar.find({}).exec();

    if (seminar.length > 0) {
      return res.send({
        status: "fail",
        message: "Already have a event Seminar",
      });
    }

    seminar = await insertSeminarToDB(data);

    res.send({
      status: "success",
      message: "Seminar added successfully",
      data: seminar,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to add seminar",
    });
  }
};

const getSeminar = async (req, res) => {
  try {
    const seminar = await getSeminarFromDB();

    res.send({
      status: "success",
      data: seminar,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to load seminar",
    });
  }
};

const getSeminarByID = async (req, res) => {
  const { id } = req.params;
  try {
    const seminar = await getSeminarByIDFromDB(id);

    res.send({
      status: "success",
      data: seminar,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to load seminar",
    });
  }
};

const updateSeminarByID = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const result = await updateSeminarByIDToDB(id, data);

    res.send({
      status: "success",
      message: "Seminar updated successfully",
      data: result,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to update seminar",
    });
  }
};

const deleteSeminarByID = async (req, res) => {
  const { id } = req.params;
  try {
    const remainingSeminar = await deleteSeminarByIDFromDB(id);

    res.send({
      status: "success",
      message: "Seminar deleted successfully",
      data: remainingSeminar,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to delete seminar",
    });
  }
};

module.exports = {
  insertSeminar,
  getSeminar,
  getSeminarByID,
  updateSeminarByID,
  deleteSeminarByID,
};
