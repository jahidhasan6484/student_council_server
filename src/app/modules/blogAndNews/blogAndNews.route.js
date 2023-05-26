const express = require('express');
const { createPost } = require('./blogAndNews.controller');

const router = express.Router();


router.post("/post", createPost)

module.exports = router;