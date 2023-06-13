const BlogAndNews = require("./blogAndNews.model");
const {
  createPostToDB,
  getBlogAndNewsByTypeFromDB,
  deletePostByIdFromDB,
  updatePostToDB,
  getBlogAndNewsFromDB,
  getBlogAndNewsByIdFromDB,
} = require("./blogAndNews.service");

const createPost = async (req, res) => {
  const data = req.body;

  try {
    const latest = await createPostToDB(data);

    res.send({
      status: "success",
      message: "Blog and News posted successfully",
      data: latest,
    });
  } catch {
    res.send({
      status: "failed",
      message: "Failed to post an Blog and News",
    });
  }
};

const getBlogAndNews = async (req, res) => {
  try {
    const data = await getBlogAndNewsFromDB();

    res.send({
      status: "success",
      data: data,
    });
  } catch {
    res.send({
      status: "fail",
    });
  }
};

const getBlogAndNewsByType = async (req, res) => {
  const { type } = req.params;
  try {
    const blogAndNews = await getBlogAndNewsByTypeFromDB(type);

    res.send({
      status: "success",
      data: blogAndNews,
    });
  } catch {
    res.send({
      status: "failed",
    });
  }
};

const getBlogAndNewsById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await getBlogAndNewsByIdFromDB(id);

    res.send({
      status: "success",
      data: data,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to load blog and news",
    });
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const result = await updatePostToDB(id, data);
    const post = await BlogAndNews.findOne({ _id: id })
    const filterData = await getBlogAndNewsByTypeFromDB(post.type);
    res.send({
      status: "success",
      message: "Post updated successfully",
      data: filterData,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to update post",
    });
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await getBlogAndNewsByIdFromDB(id)
    const remainingPost = await deletePostByIdFromDB(id);
    const finalData = await getBlogAndNewsByTypeFromDB(data.type)
    res.send({
      status: "success",
      message: "Post deleted successfully",
      data: finalData,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to delete post",
    });
  }
};

module.exports = {
  createPost,
  getBlogAndNews,
  getBlogAndNewsByType,
  updatePost,
  deletePost,
  getBlogAndNewsById,
};
