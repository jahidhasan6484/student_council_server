const Contacts = require("./contact.model")

const insertContactRequestToDB = async (_data) => {
    await Contacts.create(_data)
}

const getContactRequestFromDB = async () => {
    return await Contacts.find({}).exec();
}

const getTodayContactRequestFromDB = async () => {
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

const getByReferenceFromDB = async (_ref) => {
    return await Contacts.find({reference: _ref})
}

module.exports = {
    insertContactRequestToDB,
    getContactRequestFromDB,
    getTodayContactRequestFromDB,
    getByReferenceFromDB
}