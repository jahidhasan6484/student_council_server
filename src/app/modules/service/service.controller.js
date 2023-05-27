const { insertServiceToDB, getServicesFromDB, getServiceByIDFromDB, deleteServiceFromDB, updateServiceToDB } = require("./service.service");

const insertService = async (req, res) => {
    const data = req.body;
    try {
        const service = await insertServiceToDB(data)

        res.send({
            status: "success",
            message: "Service added successfully",
            data: service
        })
    } catch {
        res.send({
            status: "fail",
            message: "Failed to add service"
        })
    }
}

const getServices = async (req, res) => {
    try {
        const services = await getServicesFromDB();

        res.send({
            status: "success",
            data: services
        })
    } catch {
        res.send({
            status: "fail",
            message: "Failed to load services"
        })
    }
}

const getServiceByID = async (req, res) => {
    const { id } = req.params;

    try {
        const service = await getServiceByIDFromDB(id)

        res.send({
            status: "success",
            data: service
        })
    } catch {
        res.send({
            status: "fail",
            message: "Failed to load service"
        })
    }
}

const updateService = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    try {
        const result = await updateServiceToDB(id, data)

        res.send({
            status: "success",
            message: "Service updated successfully",
            data: result
        })

    } catch {
        res.send({
            status: "fail",
            message: "Failed to update service",
        })
    }
}

const deleteService = async (req, res) => {
    const { id } = req.params;

    try {
        const remainingService = await deleteServiceFromDB(id)

        res.send({
            status: "success",
            message: "Service deleted successfully",
            data: remainingService
        })
    } catch {
        res.send({
            status: "fail",
            message: "Failed to delete service"
        })
    }
}

module.exports = {
    insertService,
    getServices,
    getServiceByID,
    updateService,
    deleteService
}