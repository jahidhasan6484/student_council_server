const University = require("./university.model")

const getUniversitiesBycountryNameFromDB = async (_countryName) => {
    return await University.findOne({ countryName: _countryName });
}

module.exports = {
    getUniversitiesBycountryNameFromDB
}