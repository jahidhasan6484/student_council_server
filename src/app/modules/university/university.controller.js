const University = require("./university.model");
const {
  getUniversitiesBycountryNameFromDB,
  getUniversityByIDFromDB,
  deleteUniversityByIDFromDB,
  updateUniversityByIDFromDB,
} = require("./university.service");

const insertUniversity = async (req, res) => {
  const { countryName, universities } = req.body;

  try {
    const existingCountry = await University.findOne({ countryName });

    if (existingCountry) {
      existingCountry.universities.push(...universities);
      await existingCountry.save();

      return res.send({
        status: "success",
        message: "University added successfully",
      });
    } else {
      const universityData = { countryName, universities };
      await University.create(universityData);

      return res.send({
        status: "success",
        message: "University added successfully",
      });
    }
  } catch (error) {
    res.send({
      status: "fail",
      message: "Failed to add university",
    });
  }
};

const getUniversitiesBycountryName = async (req, res) => {
  const { countryName } = req.params;
  try {
    const universityList = await getUniversitiesBycountryNameFromDB(
      countryName
    );

    res.send({
      status: "success",
      data: universityList,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to get university list",
    });
  }
};

const getUniversityByID = async (req, res) => {
  const { countryID } = req.params;
  const { universityID } = req.query;
  try {
    const university = await getUniversityByIDFromDB(countryID, universityID);
    res.send({
      status: "success",
      data: university,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to get university data",
    });
  }
};

const updateUniversityByID = async (req, res) => {
  const { countryID } = req.params;
  const { universityID } = req.query;
  const data = req.body;
  try {
    const university = await updateUniversityByIDFromDB(
      countryID,
      universityID,
      data
    );
    res.send({
      status: "success",
      data: university,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to update university data",
    });
  }
};

const deleteUniversityByID = async (req, res) => {
  const { countryID } = req.params;
  const { universityID } = req.query;
  try {
    const university = await deleteUniversityByIDFromDB(
      countryID,
      universityID
    );
    res.send({
      status: "success",
      data: university,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to delete university data",
    });
  }
};

module.exports = {
  insertUniversity,
  getUniversitiesBycountryName,
  getUniversityByID,
  updateUniversityByID,
  deleteUniversityByID,
};
