const Footer = require("./footer.model");
const {
  insertFooterToDB,
  getFooterFromDB,
  getFooterByIDFromDB,
  updateFooterByIDToDB,
  deleteFooterByIDFromDB,
} = require("./footer.service");

const insertFooter = async (req, res) => {
  const data = req.body;
  try {
    let footer = await Footer.find({}).exec();

    if (footer.length > 0) {
      return res.send({
        status: "fail",
        message: "Already have a footer content",
      });
    }

    footer = await insertFooterToDB(data);

    res.send({
      status: "success",
      data: footer,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to add footer",
    });
  }
};

const getFooter = async (req, res) => {
  try {
    const footer = await getFooterFromDB();

    res.send({
      status: "success",
      data: footer,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to get footer",
    });
  }
};

const getFooterByID = async (req, res) => {
  const { id } = req.params;
  try {
    const footer = await getFooterByIDFromDB(id);

    res.send({
      status: "success",
      data: footer,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to get footer",
    });
  }
};

const updateFooterByID = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const footer = await updateFooterByIDToDB(id, data);

    res.send({
      status: "success",
      data: footer,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to update footer",
    });
  }
};

const deleteFooterByID = async (req, res) => {
  const { id } = req.params;
  try {
    const footer = await deleteFooterByIDFromDB(id);

    res.send({
      status: "success",
      data: footer,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to delete footer",
    });
  }
};

module.exports = {
  insertFooter,
  getFooter,
  getFooterByID,
  updateFooterByID,
  deleteFooterByID,
};
