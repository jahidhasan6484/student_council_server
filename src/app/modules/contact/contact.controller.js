const { insertContactRequestToDB, getContactRequestFromDB, getTodayContactRequestFromDB } = require("./contact.service")

const contactRequest = async (req, res) => {
    const data = req.body;
    try {
        await insertContactRequestToDB(data)

        res.send({
            status: "success",
            message: "A contact request has been sent",
            data: data
        })
    } catch {
        res.send({
            status: "fail",
            message: "Failed to send contact request"
        })
    }
}

const getContactRequest = async (req, res) => {
    try {
        const requestList = await getContactRequestFromDB()

        res.send({
            status: "success",
            data: requestList
        })
    } catch {
        res.send({
            status: "fail",
            message: "Failed to load contact request list"
        })
    }
}

const getTodayContactRequest = async (req, res) => {
    try {
        const todayRequest = await getTodayContactRequestFromDB();

        res.send({
            status: "success",
            data: todayRequest
        })
    } catch {
        res.send({
            status: "fail",
            message: "Failed to load today's contact request list"
        })
    }
}

module.exports = {
    contactRequest,
    getContactRequest,
    getTodayContactRequest
}