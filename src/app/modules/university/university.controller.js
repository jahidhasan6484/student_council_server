const University = require("./university.model");
const {
  getUniversitiesBycountryNameFromDB,
  getUniversityByIDFromDB,
  deleteUniversityByIDFromDB,
  updateUniversityByIDFromDB,
  getUniversityFromDB,
} = require("./university.service");

const insertUniversity = async (req, res) => {
  const { countryName, universities } = req.body;

  try {
    const existingCountry = await University.findOne({ countryName });

    if (existingCountry) {
      existingCountry.universities.push(...universities);
      await existingCountry.save();

      const data = University.findOne({ countryName });
      const finalData = await getUniversityFromDB();
      return res.send({
        status: "success",
        message: "University added successfully",
        data: finalData,
      });
    } else {
      const universityData = { countryName, universities };
      await University.create(universityData);

      const data = University.findOne({ countryName });
      const finalData = await getUniversityFromDB();
      return res.send({
        status: "success",
        message: "University added successfully",
        data: finalData,
      });
    }
  } catch (error) {
    res.send({
      status: "fail",
      message: "Failed to add university",
    });
  }
};

const getUniversity = async (req, res) => {
  try {
    const universities = await getUniversityFromDB();

    res.send({
      status: "success",
      data: universities,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to load University list",
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
  const { countryID, universityID } = req.params;
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
  const { countryID, universityID } = req.params;
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
  const { countryID, universityID } = req.params;
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
  getUniversity,
  getUniversitiesBycountryName,
  getUniversityByID,
  updateUniversityByID,
  deleteUniversityByID,
};
