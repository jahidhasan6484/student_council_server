const {
  insertVideoToDB,
  updateVideoByIDToDB,
  getVideosFromDB,
  getVideoByIDFromDB,
  deleteVideoByIDFromDB,
} = require("./video.service");

const insertVideo = async (req, res) => {
  const data = req.body;

  try {
    const videoes = await insertVideoToDB(data);

    res.send({
      status: "success",
      message: "Video added successfull",
      data: videoes,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to add video",
    });
  }
};

const getVideos = async (req, res) => {
  try {
    const videos = await getVideosFromDB();

    res.send({
      status: "success",
      data: videos,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to get videos",
    });
  }
};

const getVideoByID = async (req, res) => {
  const { id } = req.params;
  try {
    const videos = await getVideoByIDFromDB(id);

    res.send({
      status: "success",
      data: videos,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to get video",
    });
  }
};

const updateVideoByID = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const stats = await updateVideoByIDToDB(id, data);

    res.send({
      status: "success",
      data: stats,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to update video",
    });
  }
};

const deleteVideoByID = async (req, res) => {
  const { id } = req.params;
  try {
    const videos = await deleteVideoByIDFromDB(id);

    res.send({
      status: "success",
      data: videos,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to delete video",
    });
  }
};

module.exports = {
  insertVideo,
  getVideos,
  getVideoByID,
  updateVideoByID,
  deleteVideoByID,
};
