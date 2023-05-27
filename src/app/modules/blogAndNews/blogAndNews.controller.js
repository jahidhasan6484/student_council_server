const { createPostToDB, getBlogAndNewsByTypeFromDB, deletePostByIdFromDB, updatePostToDB, getBlogAndNewsFromDB } = require("./blogAndNews.service");

const createPost = async (req, res) => {
    const data = req.body;

    try {
        await createPostToDB(data)

        res.send({
            status: "success",
            message: "Blog and News posted successfully"
        })
    } catch {
        res.send({
            status: "failed",
            message: "Failed to post an Blog and News"
        })
    }
}

const getBlogAndNews = async (req, res) => {
    try {
        const data = await getBlogAndNewsFromDB()
        
        res.send({
            status: "success",
            data: data
        })
    } catch {
        res.send({
            status: "fail",
        })
    }
}

const getBlogAndNewsByType = async (req, res) => {
    const { type } = req.params;
    try {
        const blogAndNews = await getBlogAndNewsByTypeFromDB(type)

        res.send({
            status: "success",
            data: blogAndNews
        })
    } catch {
        res.send({
            status: "failed"
        })
    }
}

const updatePost = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const result = await updatePostToDB(id, data)
        console.log("Result: ", result)
    } catch {
        res.send({
            status: "fail",
            message: "Failed to update post"
        })
    }
}

const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedPost = await deletePostByIdFromDB(id)

        res.send({
            status: "success",
            message: "Post deleted successfully",
            data: updatedPost
        })
    } catch {
        res.send({
            status: "fail",
            message: "Failed to delete post"
        })
    }
}

module.exports = {
    createPost,
    getBlogAndNews,
    getBlogAndNewsByType,
    updatePost,
    deletePost
}