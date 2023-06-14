var validator = require("validator");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const User = require("./user.model");

const {
  generateUserID,
  registerUserToDB,
  generateAuthorityUserID,
  getRegisteredByFromDB,
  getUsersFromDB,
  getUsersByRoleFromDB,
  getUserByIdFromDB,
  getProfileInfoByIdentifierFromDB,
  updateProfileInfoByIdentifierFromDB,
} = require("./user.service");

const generateJWT = (_userID) => {
  const jwtKey = process.env.JWT_SECRET_KEY;

  return jwt.sign({ _userID }, jwtKey);
};

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
      const existOnSameName = await User.findOne({
        fullName: data?.fullName,
        role: { $ne: "student" },
      });

      if (existOnSameName) {
        return res.send({
          status: "fail",
          message: `There is an admin or counsellor named ${data?.fullName}`,
        });
      }
      userID = await generateAuthorityUserID(data?.fullName);
    }
    const password = await bcrypt.hash(userID, saltRounds);
    const jwtToken = await generateJWT(userID);

    await registerUserToDB({
      ...data,
      userID,
      password,
      jwtToken,
    });

    const result = await getUsersFromDB();

    res.send({
      status: "success",
      message: "User registered successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.send({
      status: "fail",
      message: "Failed to register an user",
    });
  }
};

const loginUser = async (req, res) => {
  const { identifier, password } = req.body;
  try {
    const user = await User.findOne({
      $or: [{ userID: identifier }, { email: identifier }],
    });

    if (!user) {
      return res.send({
        status: "fail",
        message: `${identifier} did not exist`,
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user?.password);

    if (!isPasswordMatch) {
      return res.send({
        status: "fail",
        message: "Incorrect password",
      });
    }

    res.send({
      status: "success",
      data: {
        fullName: user?.fullName,
        email: user?.email,
        role: user?.role,
        phoneNumber: user?.phoneNumber,
        imageURL: user?.imageURL,
        jwtToken: user?.jwtToken,
      },
    });
  } catch {
    res.send({
      status: "fail",
      message: "Invalid information",
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await getUsersFromDB();

    res.send({
      status: "success",
      data: users,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to get user list",
    });
  }
};

const getUserById = async (req, res) => {
  const { email } = req.params;
  try {
    const user = await getUserByIdFromDB(email);

    res.send({
      status: "success",
      data: user,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to get user list",
    });
  }
};

const getUsersByRole = async (req, res) => {
  const { role } = req.params;
  try {
    const users = await getUsersByRoleFromDB(role);
    res.send({
      status: "success",
      data: users,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to get users by role",
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

const getProfileInfoByIdentifier = async (req, res) => {
  const { identifier } = req.params;
  try {
    const user = await getProfileInfoByIdentifierFromDB(identifier);
    res.send({
      status: "success",
      data: user,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to get profile information",
    });
  }
};

const updateProfileInfoByIdentifier = async (req, res) => {
  const { identifier } = req.params;
  const data = req.body;
  try {
    const user = await updateProfileInfoByIdentifierFromDB(identifier, data);
    res.send({
      status: "success",
      data: user,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to update profile information",
    });
  }
};

module.exports = {
  registerUser,
  getUsers,
  getUserById,
  loginUser,
  getUsersByRole,
  getRegisteredBy,
  getProfileInfoByIdentifier,
  updateProfileInfoByIdentifier,
};
