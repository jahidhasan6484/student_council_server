const University = require("./university.model")

const getUniversityFromDB = async () => {
    return await University.find({}).exec();
};

const getUniversitiesBycountryNameFromDB = async (_countryName) => {
    return await University.findOne({ countryName: _countryName });
}

module.exports = {
    getUniversitiesBycountryNameFromDB,
    getUniversityFromDB
}