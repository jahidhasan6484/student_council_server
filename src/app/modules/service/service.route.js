const express = require('express');
const { insertService, getServices, getServiceByID, updateService, deleteService } = require('./service.controller');

const router = express.Router();

router.post("/", insertService)
router.get("/", getServices)
router.get("/:id", getServiceByID)
router.patch("/update/:id", updateService)
router.delete("/delete/:id", deleteService)

module.exports = router;