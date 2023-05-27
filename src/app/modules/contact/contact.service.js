const Contacts = require("./contact.model")

const insertContactRequestToDB = async (_data) => {
    await Contacts.create(_data)
}

const getContactRequestFromDB = async () => {
    return await Contacts.find({}).exec();
}

const getTodayContactRequestFromDB = async (req, res) => {
    const today = new Date();

    const todayQuery = {
        $and: [
            { date: today.getDate() },
            { month: today.getMonth() + 1 },
            { year: today.getFullYear() }
        ],
    };

    return await Contacts.find(todayQuery).exec();
}

module.exports = {
    insertContactRequestToDB,
    getContactRequestFromDB,
    getTodayContactRequestFromDB
}