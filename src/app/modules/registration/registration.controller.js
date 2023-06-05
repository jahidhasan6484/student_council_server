const Registration = require("./registration.model");
const {
  insertRegistrationToDB,
  getRegistrationFromDB,
  getRegistrationByIDFromDB,
  updateRegistrationByIDToDB,
  deleteRegistrationByIDFromDB,
} = require("./registration.service");

const insertRegistration = async (req, res) => {
  const data = req.body;
  try {
    let registration = await Registration.find({}).exec();

    if (registration.length > 0) {
      return res.send({
        status: "fail",
        message: "Already have a event registration",
      });
    }

    registration = await insertRegistrationToDB(data);

    res.send({
      status: "success",
      message: "Registration added successfully",
      data: registration,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to add registration",
    });
  }
};

const getRegistration = async (req, res) => {
  try {
    const registration = await getRegistrationFromDB();

    res.send({
      status: "success",
      data: registration,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to load registration",
    });
  }
};

const getRegistrationByID = async (req, res) => {
  const { id } = req.params;
  try {
    const registration = await getRegistrationByIDFromDB(id);

    res.send({
      status: "success",
      data: registration,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to load registration",
    });
  }
};

const updateRegistrationByID = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const result = await updateRegistrationByIDToDB(id, data);

    res.send({
      status: "success",
      message: "Registration updated successfully",
      data: result,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to update registration",
    });
  }
};

const deleteRegistrationByID = async (req, res) => {
  const { id } = req.params;
  try {
    const remainingRegistration = await deleteRegistrationByIDFromDB(id);

    res.send({
      status: "success",
      message: "Registration deleted successfully",
      data: remainingRegistration,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to delete registration",
    });
  }
};

module.exports = {
  insertRegistration,
  getRegistration,
  getRegistrationByID,
  updateRegistrationByID,
  deleteRegistrationByID,
};
