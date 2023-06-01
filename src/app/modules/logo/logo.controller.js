const Logo = require("./logo.model");
const {
  insertLogoToDB,
  getLogoFromDB,
  updateLogoByIDFromDB,
  deleteLogoByIDFromDB,
} = require("./logo.service");

const insertLogo = async (req, res) => {
  const data = req.body;

  try {
    let logo = await Logo.find({}).exec();

    if (logo.length > 0) {
      return res.send({
        status: "fail",
        message: "Logo already added",
        data: logo,
      });
    }

    logo = await insertLogoToDB(data);

    res.send({
      status: "success",
      message: "Logo added successfull",
      data: logo,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to upload logo",
    });
  }
};

const getLogo = async (req, res) => {
  try {
    const logo = await getLogoFromDB();

    res.send({
      status: "success",
      data: logo,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to upload logo",
    });
  }
};

const updateLogoByID = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const logo = await updateLogoByIDFromDB(id, data);

    res.send({
      status: "success",
      data: logo,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to update logo",
    });
  }
};

const deleteLogoByID = async (req, res) => {
  const { id } = req.params;
  try {
    const logo = await deleteLogoByIDFromDB(id);

    res.send({
      status: "success",
      message: "Logo deleted successfully",
      data: logo,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to delete logo",
    });
  }
};

module.exports = {
  insertLogo,
  getLogo,
  updateLogoByID,
  deleteLogoByID,
};
