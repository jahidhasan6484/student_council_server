const Privacy = require("./privacy.model");
const {
  insertPrivacyToDB,
  getPrivacyFromDB,
  deletePrivacyByIDFromDB,
  updatePrivacyByIDToDB,
  getPrivacyByIDFromDB,
} = require("./privacy.service");

const insertPrivacy = async (req, res) => {
  const data = req.body;
  try {
    let privacy = await Privacy.find({}).exec();

    if (privacy.length > 0) {
      return res.send({
        status: "fail",
        message: "Already have a privacy content",
      });
    }

    privacy = await insertPrivacyToDB(data);

    res.send({
      status: "success",
      data: privacy,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to add privacy",
    });
  }
};

const getPrivacy = async (req, res) => {
  try {
    const privacy = await getPrivacyFromDB();

    res.send({
      status: "success",
      data: privacy,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to get privacy",
    });
  }
};

const getPrivacyByID = async (req, res) => {
  const { id } = req.params;
  try {
    const privacy = await getPrivacyByIDFromDB(id);

    res.send({
      status: "success",
      data: privacy,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to get privacy",
    });
  }
};

const updatePrivacyByID = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const privacy = await updatePrivacyByIDToDB(id, data);

    res.send({
      status: "success",
      data: privacy,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to update privacy",
    });
  }
};

const deletePrivacyByID = async (req, res) => {
  const { id } = req.params;
  try {
    const privacy = await deletePrivacyByIDFromDB(id);

    res.send({
      status: "success",
      data: privacy,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to delete privacy",
    });
  }
};

module.exports = {
  insertPrivacy,
  getPrivacy,
  getPrivacyByID,
  updatePrivacyByID,
  deletePrivacyByID,
};
