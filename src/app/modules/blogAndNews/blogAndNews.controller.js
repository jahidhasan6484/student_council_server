const { createPostToDB } = require("./blogAndNews.service");

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

module.exports = {
    createPost
}