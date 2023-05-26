const BlogAndNews = require("./blogAndNews.model");

const createPostToDB = async (data) => {
    await BlogAndNews.create(data)
};

module.exports = {
    createPostToDB
};
