const University = require("./university.model");
const { getUniversitiesBycountryNameFromDB } = require("./university.service");

const insertUniversity = async (req, res) => {
    const { countryName, universities } = req.body;

    try {
        const existingCountry = await University.findOne({ countryName })

        if (existingCountry) {
            existingCountry.universities.push(...universities)
            await existingCountry.save()

            res.send({
                status: "success",
                message: "University added successfully"
            })
        } else {
            const universityData = { countryName, universities }
            await University.create(universityData)

            res.send({
                status: "success",
                message: "University added successfully"
            })
        }
    } catch (error) {
        res.send({
            status: "fail",
            message: "Failed to add university"
        })
    }
}

const getUniversitiesBycountryName = async (req, res) => {
    const { countryName } = req.params;
    try {
        const universityList = await getUniversitiesBycountryNameFromDB(countryName);

        res.send({
            status: "success",
            data: universityList
        })
    } catch {
        res.send({
            status: "fail",
            message: "Failed to get university list"
        })
    }
}

module.exports = {
    insertUniversity,
    getUniversitiesBycountryName
}