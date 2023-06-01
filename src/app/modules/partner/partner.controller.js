const {
  insertPartnerToDB,
  getPartnerFromDB,
  getPartnerByIDFromDB,
  updatePartnerToDB,
  deletePartnerFromDB,
} = require("./partner.service");

const insertPartner = async (req, res) => {
  const data = req.body;
  try {
    const partner = await insertPartnerToDB(data);

    res.send({
      status: "success",
      message: "Partner added successfully",
      data: partner,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to add partner",
    });
  }
};

const getPartner = async (req, res) => {
  try {
    const partners = await getPartnerFromDB();

    res.send({
      status: "success",
      data: partners,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to load partners",
    });
  }
};

const getPartnerByID = async (req, res) => {
  const { id } = req.params;

  try {
    const partner = await getPartnerByIDFromDB(id);

    res.send({
      status: "success",
      data: partner,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to load partner",
    });
  }
};

const updatePartner = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const result = await updatePartnerToDB(id, data);

    res.send({
      status: "success",
      message: "Partner updated successfully",
      data: result,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to update partner",
    });
  }
};

const deletePartner = async (req, res) => {
  const { id } = req.params;

  try {
    const remainingPartner = await deletePartnerFromDB(id);

    res.send({
      status: "success",
      message: "Partner deleted successfully",
      data: remainingPartner,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to delete partner",
    });
  }
};

module.exports = {
  insertPartner,
  getPartner,
  getPartnerByID,
  updatePartner,
  deletePartner,
};
