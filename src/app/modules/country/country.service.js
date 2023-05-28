const Country = require("./country.model")

const insertCountryToDB = async (_data) => {
    await Country.create(_data)
}

const getCountryFromDB = async () => {
    return await Country.find({}).exec();
}

const getCountryByIDFromDB = async (_id) => {
    return await Country.findOne({ _id: _id })
}

const updateCountryByIDToDB = async (_id, _newData) => {
    await Country.findByIdAndUpdate(_id, _newData, {
        new: true,
        runValidators: true,
    });

    return await Country.find({});
}

const deleteCountryByIDFromDB = async (_id) => {
    await Country.findByIdAndDelete(_id);
    return await Country.find({});
}

module.exports = {
    insertCountryToDB,
    getCountryFromDB,
    getCountryByIDFromDB,
    updateCountryByIDToDB,
    deleteCountryByIDFromDB
}