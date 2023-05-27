const Service = require("./service.model")

const insertServiceToDB = async (_data) => {
    await Service.create(_data)

    return await Service.find({}).exec();
}

const getServicesFromDB = async () => {
    return await Service.find({}).exec();
}

const getServiceByIDFromDB = async (_id) => {
    return await Service.findById(_id)
}

const updateServiceToDB = async (_id, _newData) => {
    await Service.findByIdAndUpdate(_id, _newData, {
        new: true,
        runValidators: true,
    });

    return await Service.find({});
}

const deleteServiceFromDB = async (_id) => {
    await Service.findByIdAndDelete(_id);
    return await Service.find({});
}

module.exports = {
    insertServiceToDB,
    getServicesFromDB,
    getServiceByIDFromDB,
    updateServiceToDB,
    deleteServiceFromDB
}