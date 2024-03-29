const validator = require("validator");
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
  getUserByIdentifierFromDB,
  generatePassword,
} = require("./user.service");
const {
  sendUserNameAndPassword,
  sendAlert,
  sendOTP,
} = require("../../../../utils/sendEmail");
const OTP = require("../otp/otp.model");

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

    const genPass = await generatePassword();

    console.log(genPass);

    const password = await bcrypt.hash(genPass, saltRounds);
    const jwtToken = await generateJWT(userID);

    await registerUserToDB({
      ...data,
      userID,
      password,
      jwtToken,
    });

    await sendUserNameAndPassword(data?.email, userID, genPass);

    const result = await getUsersFromDB();

    res.send({
      status: "success",
      message:
        "User registered successfully, Login Credential has been sent on your email",
      data: result,
    });
  } catch (err) {
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
        userID: user?.userID,
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

const getUserByIdentifier = async (req, res) => {
  const { identifier } = req.params;
  try {
    const user = await getUserByIdentifierFromDB(identifier);

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

const getUserFullNameByUserID = async (req, res) => {
  const { userID } = req.params;
  try {
    const fullName = await User.findOne({ userID: userID }, { fullName: 1 });

    res.send({
      status: "success",
      data: fullName,
    });
  } catch (error) {
    res.send({
      status: "fail",
    });
  }
};

const changePasswordByUserID = async (req, res) => {
  const { userID, oldPassword, newPassword } = req.body;
  try {
    const user = await User.findById(userID);

    const isPasswordMatch = await bcrypt.compare(oldPassword, user?.password);
    if (!isPasswordMatch) {
      return res.send({
        status: "fail",
        message: "Old password is not correct",
      });
    }

    if (!validator.isStrongPassword(newPassword)) {
      return res.send({
        status: "fail",
        message: "Provided password is not strong",
      });
    }

    const newHashPassword = await bcrypt.hash(newPassword, saltRounds);

    await User.findByIdAndUpdate(userID, { password: newHashPassword });

    await sendAlert(user?.email, "Your password has been changed");

    res.send({
      status: "success",
      message: "Password change successful",
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "fail",
      message: "Failed to change password",
    });
  }
};

const forgetPasswordByUserID = async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) {
      return res.send({
        status: "fail",
        message: "Empty email address",
      });
    }

    const result = await sendOTP(email);

    if (result?.status === "success") {
      await OTP.create({
        email,
        otp: result?.hashedOTP,
        createdAt: Date.now(),
        expiresAt: Date.now() + 3600000,
      });
    }

    res.send({
      status: "success",
      message: "OTP sent successfully",
    });
  } catch (error) {
    res.send({
      status: "fail",
      message: "Failed to resend OTP",
    });
  }
};

const verifyForgetOTPByUserID = async (req, res) => {
  const { email, otp } = req.body;

  try {
    if (!email || !otp) {
      return res.send({
        status: "fail",
        message: "Empty details are not allowed",
      });
    }

    const forgetOTPRecords = await OTP.find({ email }).exec();

    forgetOTPRecords.reverse();

    if (forgetOTPRecords.length <= 0) {
      return res.send({
        status: "fail",
        message: "There is no forget password request",
      });
    }

    const { expiresAt } = forgetOTPRecords[0];
    const hashedOTP = forgetOTPRecords[0]?.otp;

    if (expiresAt < Date.now()) {
      return res.send({
        status: "fail",
        message: "Forget OTP code has expired, please request again",
      });
    }

    const isValidOTP = await bcrypt.compare(otp, hashedOTP);

    if (!isValidOTP) {
      return res.send({
        status: "fail",
        message: "Forget OTP is invalid",
      });
    }

    await OTP.deleteMany({ email });

    res.send({
      status: "success",
      message: "Forget password request approve",
      isForgetOTPMatch: true,
    });
  } catch (error) {
    res.send({
      status: "fail",
      message: "OTP not match, try again",
      isForgetOTPMatch: false,
    });
  }
};

const updatePasswordByForgetOTP = async (req, res) => {
  const { isForgetOTPMatch, email, newPassword } = req.body;

  try {
    if (!isForgetOTPMatch) {
      return res.send({
        status: "fail",
        message: "You can't able to update password",
      });
    }

    if (newPassword.length < 8) {
      return res.send({
        status: "fail",
        message: "Password should have 8 characters",
      });
    }

    if (!validator.isStrongPassword(newPassword)) {
      return res.send({
        status: "fail",
        message:
          "Please add at least one lowercase, uppercase, numbers, and symbols",
      });
    }

    const newHashPassword = await bcrypt.hash(newPassword, saltRounds);

    // Update password with newHashPassword
    await User.findOneAndUpdate({ email }, { password: newHashPassword });

    res.send({
      status: "success",
      message: "Password updated successfully",
    });
  } catch (error) {
    return res.send({
      status: "fail",
      message: "Failed to update password",
    });
  }
};

const resendOTP = async (req, res) => {
  const { email } = req.body;
  try {
    const result = await sendOTP(email);

    if (result?.status === "success") {
      await OTP.create({
        email,
        otp: result?.hashedOTP,
        createdAt: Date.now(),
        expiresAt: Date.now() + 3600000,
      });
    }

    res.send({
      status: "success",
      message: "OTP sent successfully",
    });
  } catch (error) {
    res.send({
      status: "fail",
      message: "Failed to resend OTP",
    });
  }
};

module.exports = {
  registerUser,
  getUsers,
  getUserByIdentifier,
  loginUser,
  getUsersByRole,
  getRegisteredBy,
  getProfileInfoByIdentifier,
  updateProfileInfoByIdentifier,
  getUserFullNameByUserID,
  changePasswordByUserID,
  forgetPasswordByUserID,
  verifyForgetOTPByUserID,
  updatePasswordByForgetOTP,
  resendOTP,
};
