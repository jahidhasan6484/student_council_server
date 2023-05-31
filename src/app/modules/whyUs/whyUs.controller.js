const {
  insertWhyUsToDB,
  getWhyUsFromDB,
  getWhyUsByIDFromDB,
  updateWhyUsByIDToDB,
  deleteWhyUsFromDB,
} = require("./whyUs.service");

const insertWhyUs = async (req, res) => {
  const data = req.body;
  try {
    const whyUs = await insertWhyUsToDB(data);

    res.send({
      status: "success",
      data: whyUs,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to add why us",
    });
  }
};

const getWhyUs = async (req, res) => {
  try {
    const whyUs = await getWhyUsFromDB();

    res.send({
      status: "success",
      data: whyUs,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to get why us",
    });
  }
};

const getWhyUsByID = async (req, res) => {
  const { id } = req.params;
  try {
    const whyUs = await getWhyUsByIDFromDB(id);

    res.send({
      status: "success",
      data: whyUs,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to get why us",
    });
  }
};

const updateWhyUsByID = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const whyUs = await updateWhyUsByIDToDB(id, data);

    res.send({
      status: "success",
      data: whyUs,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to update why us",
    });
  }
};

const deleteWhyUsByID = async (req, res) => {
  const { id } = req.params;
  try {
    const whyUs = await deleteWhyUsFromDB(id);

    res.send({
      status: "success",
      data: whyUs,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to delete why us",
    });
  }
};

module.exports = {
  insertWhyUs,
  getWhyUs,
  getWhyUsByID,
  updateWhyUsByID,
  deleteWhyUsByID,
};
