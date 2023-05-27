const { createUserToDB } = require("./user.service");

const createUser = async (req, res) => {
    const data = req.body;

    try {
        await createUserToDB(data)

        res.send({
            status: "success",
            message: "User created successfully"
        })
    } catch {
        res.send({
            status: "failed",
            message: "Failed to create an user"
        })
    }
}

module.exports = {
    createUser
}