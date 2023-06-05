const Video = require("./video.model");

const insertVideoToDB = async (_data) => {
  await Video.create(_data);

  return await Video.find({});
};

const getVideosFromDB = async () => {
  return await Video.find({}).exec();
};

const getVideoByIDFromDB = async (_id) => {
  return await Video.findById(_id);
};

const updateVideoByIDToDB = async (_id, _newData) => {
  await Video.findByIdAndUpdate(_id, _newData, {
    new: true,
    runValidators: true,
  });

  return await Video.find({});
};

const deleteVideoByIDFromDB = async (_id) => {
  await Video.findByIdAndDelete(_id);
  return await Video.find({});
};

module.exports = {
  insertVideoToDB,
  getVideosFromDB,
  getVideoByIDFromDB,
  updateVideoByIDToDB,
  deleteVideoByIDFromDB,
};
