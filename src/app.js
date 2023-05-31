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

app.use("/api/v1/uploads", uploadFileRoutes);

module.exports = app;
