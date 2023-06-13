const BlogAndNews = require("./blogAndNews.model");

const createPostToDB = async (_data) => {
  await BlogAndNews.create(_data);

  return await BlogAndNews.find({ type: _data?.type }).exec({});
};

const getBlogAndNewsFromDB = async () => {
  return await BlogAndNews.find({}).exec();
};

const getBlogAndNewsByIdFromDB = async (_id) => {
  return await BlogAndNews.findOne({ _id: _id });
};

const getBlogAndNewsByTypeFromDB = async (_type) => {
  return await BlogAndNews.find({ type: _type }).exec();
};

const updatePostToDB = async (_id, _newData) => {
  await BlogAndNews.findByIdAndUpdate(_id, _newData, {
    new: true,
    runValidators: true,
  });

  return await BlogAndNews.find({});
};

const deletePostByIdFromDB = async (_id) => {
  await BlogAndNews.findByIdAndDelete(_id);
  return await BlogAndNews.find({});
};

module.exports = {
  createPostToDB,
  getBlogAndNewsFromDB,
  getBlogAndNewsByTypeFromDB,
  updatePostToDB,
  deletePostByIdFromDB,
  getBlogAndNewsByIdFromDB,
};
