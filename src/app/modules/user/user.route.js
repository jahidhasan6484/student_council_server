const express = require("express");
const {
  registerUser,
  getRegisteredBy,
  loginUser,
  getUsers,
  getUsersByRole,
  getUserByIdentifier,
  getProfileInfoByIdentifier,
  updateProfileInfoByIdentifier,
  getUserFullNameByUserID,
  changePasswordByUserID,
  forgetPasswordByUserID,
  verifyForgetOTPByUserID,
  updatePasswordByForgetOTP,
  resendOTP,
} = require("./user.controller");

const router = express.Router();

router.post("/register", registerUser);
router.get("/", getUsers);
router.get("/:identifier", getUserByIdentifier);
router.post("/login", loginUser);
router.get("/role/:role", getUsersByRole);
router.get("/register/:registeredBy", getRegisteredBy);

router.get("/profile/:identifier", getProfileInfoByIdentifier);
router.patch("/profile/:identifier", updateProfileInfoByIdentifier);

router.get("/fullName/:userID", getUserFullNameByUserID);

router.post("/change-password", changePasswordByUserID);
router.post("/forget-password", forgetPasswordByUserID);
router.post("/verifyForgetOTP", verifyForgetOTPByUserID);
router.post("/updatePassword", updatePasswordByForgetOTP);
router.post("/resendOTP", resendOTP);

module.exports = router;
