const BlogAndNews = require("./blogAndNews.model");

const createPostToDB = async (_data) => {
    await BlogAndNews.create(_data)
};

const getBlogAndNewsFromDB = async () => {
    return await BlogAndNews.find({ }).exec();
}

const getBlogAndNewsByTypeFromDB = async (_type) => {
    return await BlogAndNews.find({ type: _type }).exec();
}

const updatePostToDB = async (_id, _newData) => {
    await BlogAndNews.findByIdAndUpdate(_id, _newData, {
        new: true,
        runValidators: true,
    });
}

const deletePostByIdFromDB = async (_id) => {
    await BlogAndNews.findByIdAndDelete(_id);
    return await BlogAndNews.find({});
}

module.exports = {
    createPostToDB,
    getBlogAndNewsFromDB,
    getBlogAndNewsByTypeFromDB,
    updatePostToDB,
    deletePostByIdFromDB
};
