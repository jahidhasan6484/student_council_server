const {
  insertExpoToDB,
  getExpoFromDB,
  getExpoByIDFromDB,
  updateExpoByIDToDB,
  deleteExpoByIDFromDB,
} = require("./expo.service");

const insertExpo = async (req, res) => {
  const data = req.body;
  try {
    const expo = await insertExpoToDB(data);

    res.send({
      status: "success",
      message: "Expo added successfully",
      data: expo,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to add expo",
    });
  }
};

const getExpo = async (req, res) => {
  try {
    const expo = await getExpoFromDB();

    res.send({
      status: "success",
      data: expo,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to load expo",
    });
  }
};

const getExpoByID = async (req, res) => {
  const { id } = req.params;
  try {
    const Expo = await getExpoByIDFromDB(id);

    res.send({
      status: "success",
      data: Expo,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to load expo",
    });
  }
};






const updateExpoByID = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const result = await updateExpoByIDToDB(id, data);

    res.send({
      status: "success",
      message: "Expo updated successfully",
      data: result,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to update expo",
    });
  }
};

const deleteExpoByID = async (req, res) => {
  const { id } = req.params;
  try {
    const remainingExpo = await deleteExpoByIDFromDB(id);

    res.send({
      status: "success",
      message: "Expo deleted successfully",
      data: remainingExpo,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to delete expo",
    });
  }
};

module.exports = {
  insertExpo,
  getExpo,
  getExpoByID,
  updateExpoByID,
  deleteExpoByID,
};
