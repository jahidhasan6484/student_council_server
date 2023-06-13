const express = require("express");
const cors = require("cors");
const app = express();

// Application routes
const userRoutes = require("./app/modules/user/user.route");
const blogAndNewsRoutes = require("./app/modules/blogAndNews/blogAndNews.route");
const contactRoutes = require("./app/modules/contact/contact.route");
const serviceRoutes = require("./app/modules/service/service.route");
const countryRoutes = require("./app/modules/country/country.route");
const universityRoutes = require("./app/modules/university/university.route");
const testimonialRoutes = require("./app/modules/testimonial/testimonial.route");
const whyUsRoutes = require("./app/modules/whyUs/whyUs.route");
const sliderRoutes = require("./app/modules/slider/slider.route");
const aboutRoutes = require("./app/modules/about/about.route");
const partnerRoutes = require("./app/modules/partner/partner.route");
const logoRoutes = require("./app/modules/logo/logo.route");
const privacyRoutes = require("./app/modules/privacy/privacy.route");
const footerRoutes = require("./app/modules/footer/footer.route");
const statsRoutes = require("./app/modules/stats/stats.route");
const videoRoutes = require("./app/modules/video/video.route");
const expoRoutes = require("./app/modules/expo/expo.route");
const registrationRoutes = require("./app/modules/registration/registration.route");
const assessmentRoutes = require("./app/modules/assessment/assessment.route");
const seminarRoutes = require("./app/modules/seminar/seminar.route");
const chatRoutes = require("./app/modules/chat/chat.route");
const messageRoutes = require("./app/modules/message/message.route");
const visitingStudentRoutes = require("./app/modules/VisitingStudent/VisitingStudent.route");

const uploadFileRoutes = require("./app/modules/uploadFile/uploadFile.route");

// Using cors
app.use(cors());
app.use("/api/v1/uploads", express.static("uploads"));
// Parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blogAndNews", blogAndNewsRoutes);
app.use("/api/v1/contact", contactRoutes);
app.use("/api/v1/service", serviceRoutes);
app.use("/api/v1/country", countryRoutes);
app.use("/api/v1/university", universityRoutes);
app.use("/api/v1/testimonial", testimonialRoutes);
app.use("/api/v1/whyUs", whyUsRoutes);
app.use("/api/v1/slider", sliderRoutes);
app.use("/api/v1/about", aboutRoutes);
app.use("/api/v1/partner", partnerRoutes);
app.use("/api/v1/logo", logoRoutes);
app.use("/api/v1/privacy", privacyRoutes);
app.use("/api/v1/footer", footerRoutes);
app.use("/api/v1/stats", statsRoutes);
app.use("/api/v1/video", videoRoutes);
app.use("/api/v1/event/expo", expoRoutes);
app.use("/api/v1/event/registration", registrationRoutes);
app.use("/api/v1/event/assessment", assessmentRoutes);
app.use("/api/v1/event/seminar", seminarRoutes);
app.use("/api/v1/chat", chatRoutes);
app.use("/api/v1/message", messageRoutes);
app.use("/api/v1/visitingStudent", visitingStudentRoutes);

app.use("/api/v1/uploads", uploadFileRoutes);

module.exports = app;
