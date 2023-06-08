const University = require("./university.model");
const { getUniversitiesBycountryNameFromDB, getUniversityFromDB } = require("./university.service");

const insertUniversity = async (req, res) => {
  const { countryName, universities } = req.body;

  try {
    const existingCountry = await University.findOne({ countryName });

    if (existingCountry) {
      existingCountry.universities.push(...universities);
      await existingCountry.save();

      const data = University.find({}).exec()
      return res.send({
        status: "success",
        message: "University added successfully",
        data: data
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
      message: "Failed to load contact request list",
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

module.exports = {
  insertUniversity,
  getUniversity,
  getUniversitiesBycountryName,
};
