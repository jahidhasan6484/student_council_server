var validator = require("validator");
const bcrypt = require("bcrypt");
const User = require("./user.model");
const saltRounds = 10;

const {
  generateUserID,
  registerUserToDB,
  generateAuthorityUserID,
  getRegisteredByFromDB,
} = require("./user.service");

const registerUser = async (req, res) => {
  const data = req.body;

  try {
    if (!validator.isEmail(data?.email)) {
      return res.send({
        status: "fail",
        message: "Email is not valid",
      });
    }

    const userExist = await User.findOne({ email: data?.email });

    if (userExist) {
      return res.send({
        status: "fail",
        message: "User already exist",
      });
    }

    let userID;
    if (data?.role === "student") {
      userID = await generateUserID();
    } else {
      const existOnSameName = await User.findOne({ fullName: data?.fullName });

      if (existOnSameName) {
        return res.send({
          status: "fail",
          message: `There is an admin or counsellor named ${data?.fullName}`,
        });
      }
      userID = await generateAuthorityUserID(data?.fullName);
    }
    const password = await bcrypt.hash(userID, saltRounds);

    await registerUserToDB({
      ...data,
      userID,
      password,
    });

    res.send({
      status: "success",
      message: "User registerd successfully",
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to register an user",
    });
  }
};

const getRegisteredBy = async (req, res) => {
  const { registeredBy } = req.params;
  try {
    const registeredList = await getRegisteredByFromDB(registeredBy);
    res.send({
      status: "success",
      data: registeredList,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to get yout registered list",
    });
  }
};

module.exports = {
  registerUser,
  getRegisteredBy,
};
