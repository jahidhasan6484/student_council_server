const express = require('express');
const { createUser } = require('./user.controller');

const router = express.Router();


router.post("/create-user", createUser)

module.exports = router;