const About = require("./about.model");
const {
  insertAboutToDB,
  getAboutFromDB,
  getAboutByIDFromDB,
  updateAboutByIDToDB,
  deleteAboutByIDFromDB,
} = require("./about.service");

const insertAbout = async (req, res) => {
  const data = req.body;
  try {
    let about = await About.find({}).exec();

    if (about.length > 0) {
      return res.send({
        status: "fail",
        message: "Already have an about content",
      });
    }

    about = await insertAboutToDB(data);

    res.send({
      status: "success",
      data: about,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to add about",
    });
  }
};

const getAbout = async (req, res) => {
  try {
    const about = await getAboutFromDB();

    res.send({
      status: "success",
      data: about,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to get about",
    });
  }
};

const getAboutByID = async (req, res) => {
  const { id } = req.params;
  try {
    const about = await getAboutByIDFromDB(id);

    res.send({
      status: "success",
      data: about,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to get about",
    });
  }
};

const updateAboutByID = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const about = await updateAboutByIDToDB(id, data);

    res.send({
      status: "success",
      data: about,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to update about",
    });
  }
};

const deleteAboutByID = async (req, res) => {
  const { id } = req.params;
  try {
    const about = await deleteAboutByIDFromDB(id);

    res.send({
      status: "success",
      data: about,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to delete about",
    });
  }
};

module.exports = {
  insertAbout,
  getAbout,
  getAboutByID,
  updateAboutByID,
  deleteAboutByID,
};
