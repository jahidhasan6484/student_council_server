const bcrypt = require('bcrypt');
const User = require('./user.model');
const saltRounds = 10;

const createUserToDB = async (data) => {
        const { password } = data;

        const hash = await bcrypt.hash(password, saltRounds);

        const newData = {
            ...data,
            password: hash
        };

        await User.create(newData);
};

module.exports = {
    createUserToDB
};
