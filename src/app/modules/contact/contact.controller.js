const {
  insertContactRequestToDB,
  getContactRequestFromDB,
  getByIDFromDB,
  getTodayContactRequestFromDB,
  getByReferenceFromDB,
  getBySocialPlatformFromDB,
  updateContactByIDToDB,
  getByStatusFromDB,
  getAssignedToByNameFromDB,
  getCommentFromDB,
  updateCommentByID,
} = require("./contact.service");

const contactRequest = async (req, res) => {
  const data = req.body;
  try {
    await insertContactRequestToDB(data);
    res.send({
      status: "success",
      message: "A contact request has been sent",
    });
  } catch (error) {
    res.send({
      status: "fail",
      message: "Failed to send contact request",
    });
  }
};

const getContactRequest = async (req, res) => {
  try {
    const requestList = await getContactRequestFromDB();

    res.send({
      status: "success",
      data: requestList,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to load contact request list",
    });
  }
};

const getContactByID = async (req, res) => {
  const { id } = req.params;
  try {
    const request = await getByIDFromDB(id);

    res.send({
      status: "success",
      data: request,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to load contact request",
    });
  }
};

const updateContactByID = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const data = req.body;
  try {
    const result = await updateContactByIDToDB(id, data);

    res.send({
      status: "success",
      message: "Contact updated successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "fail",
      message: "Failed to update contact",
    });
  }
};

const getTodayContactRequest = async (req, res) => {
  try {
    const todayRequest = await getTodayContactRequestFromDB();
    res.send({
      status: "success",
      data: todayRequest,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to load today's contact request list",
    });
  }
};

const getByReference = async (req, res) => {
  const { ref } = req.params;
  try {
    const eventRef = await getByReferenceFromDB(ref);

    res.send({
      status: "success",
      data: eventRef,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to load event data",
    });
  }
};

const getBySocialPlatform = async (req, res) => {
  const { social } = req.params;
  try {
    const socialData = await getBySocialPlatformFromDB(social);

    res.send({
      status: "success",
      data: socialData,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to load social data",
    });
  }
};
const getByStatus = async (req, res) => {
  const { status } = req.params;
  try {
    const statusData = await getByStatusFromDB(status);

    res.send({
      status: "success",
      data: statusData,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to load social data",
    });
  }
};
const getAssignedToByName = async (req, res) => {
  const { name } = req.params;
  try {
    const assignedData = await getAssignedToByNameFromDB(name);

    res.send({
      status: "success",
      data: assignedData,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to load Assigned data",
    });
  }
};
const updateCommentById = async (req, res) => {
  const { id } = req.params;
  const newData = req.body

  try {
    const assignedData = await updateCommentByID(id, newData);

    res.send({
      status: "success",
      data: assignedData,
    });
  } catch (error) {

    res.send({
      status: "fail",
      message: "Failed to load Assigned data",
    });
  }
};
const getCommentById = async (req, res) => {
  const { id } = req.params;
  try {
    const assignedData = await getCommentFromDB(id);

    res.send({
      status: "success",
      data: assignedData,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to load Assigned data",
    });
  }
};

module.exports = {
  contactRequest,
  getContactRequest,
  getContactByID,
  updateContactByID,
  getTodayContactRequest,
  getByReference,
  getBySocialPlatform,
  getByStatus,
  getAssignedToByName,
  getCommentById,
  updateCommentById
};
