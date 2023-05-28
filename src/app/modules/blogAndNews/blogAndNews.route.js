const express = require('express');
const { createPost, deletePost, updatePost, getBlogAndNewsByType, getBlogAndNews } = require('./blogAndNews.controller');

const router = express.Router();

router.get("/", getBlogAndNews)
router.get("/:type", getBlogAndNewsByType)
router.post("/", createPost)
router.patch("/:id", updatePost)
router.delete("/:id", deletePost)

module.exports = router;