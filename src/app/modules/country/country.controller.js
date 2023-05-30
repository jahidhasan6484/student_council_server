const Country = require("./country.model");
const { insertCountryToDB, getCountryFromDB, getCountryByIDFromDB, updateCountryByIDToDB, deleteCountryByIDFromDB } = require("./country.service")

const insertCountry = async (req, res) => {
    const data = req.body;
    try {
        const exist = await Country.findOne({ countryName: data.countryName })

        if (exist) {
            res.send({
                status: "fail",
                message: "Provided country already exist"
            })
        }

        const updatedData = await insertCountryToDB(data)

        res.send({
            status: "success",
            message: "Country added successfully",
        })
    } catch {
        res.send({
            status: "fail",
            message: "Failed to add country",
        })
    }
}

const getCountry = async (req, res) => {
    try {
        const countries = await getCountryFromDB();

        res.send({
            status: "success",
            data: countries
        })
    } catch {
        res.send({
            status: "fail",
            message: "Failed to load countries"
        })
    }
}

const getCountryByID = async (req, res) => {
    const { id } = req.params;
    try {
        const country = await getCountryByIDFromDB(id)

        res.send({
            status: "success",
            data: country
        })

    } catch {
        res.send({
            status: "fail",
            message: "Failed to load country"
        })
    }
}

const updateCountryByID = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const result = await updateCountryByIDToDB(id, data)

        res.send({
            status: "success",
            message: "Country updated successfully",
            data: result
        })

    } catch {
        res.send({
            status: "fail",
            message: "Failed to update country",
        })
    }
}

const deleteCountryByID = async (req, res) => {
    const { id } = req.params;
    try {
        const remainingCountry = await deleteCountryByIDFromDB(id)

        res.send({
            status: "success",
            message: "Country deleted successfully",
            data: remainingCountry
        })
    } catch {
        res.send({
            status: "fail",
            message: "Failed to delete country"
        })
    }
}

module.exports = {
    insertCountry,
    getCountry,
    getCountryByID,
    updateCountryByID,
    deleteCountryByID
}