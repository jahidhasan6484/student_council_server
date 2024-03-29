const bcrypt = require("bcrypt");
const saltRounds = 10;
const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: "salmanshah11062019@gmail.com",
    pass: "qdzowfvjtzhknaqr",
  },
  tls: {
    ciphers: "SSLv3",
  },
});

const sendOTP = async (_email) => {
  const otp = `${Math.floor(1000 + Math.random() * 9000)}`;

  const hashedOTP = await bcrypt.hash(otp, saltRounds);

  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: "salmanshah11062019@gmail.com",
      to: _email,
      subject: "Forget Password Request",
      html: `Please enter <b>${otp}</b> as forget password request`,
    };

    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject({ status: "fail", error });
      } else {
        resolve({ status: "success", hashedOTP });
      }
    });
  });
};

const sendUserNameAndPassword = (_email, _userID, _password) => {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: "salmanshah11062019@gmail.com",
      to: _email,
      subject: "Login Credential",
      html: `Welcome to Student Council 
      <br> <br>
      
      UserID: <b>${_userID}</b> 
      <br> 
      Password: <b>${_password}</b>
      
      <br><br>
      You can access our portal by using email or userID and password
      
      <br> <br>
      
      Thank You`,
    };

    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject({ status: "fail", error });
      } else {
        resolve({ status: "success", info });
      }
    });
  });
};

const sendAlert = (_email, _text) => {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: "salmanshah11062019@gmail.com",
      to: _email,
      subject: "Notification Alert",
      text: _text,
    };

    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject({ status: "fail", error });
      } else {
        resolve({ status: "success", info });
      }
    });
  });
};

module.exports = {
  sendOTP,
  sendUserNameAndPassword,
  sendAlert,
};
