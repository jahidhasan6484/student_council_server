const Stats = require("./stats.model");

const insertStatsToDB = async (_data) => {
  await Stats.create(_data);

  return await Stats.find({});
};

const getStatsFromDB = async () => {
  return await Stats.find({}).exec();
};

const updateStatsByIDToDB = async (_id, _newData) => {
  await Stats.findByIdAndUpdate(_id, _newData, {
    new: true,
    runValidators: true,
  });

  return await Stats.find({});
};

module.exports = {
  insertStatsToDB,
  getStatsFromDB,
  updateStatsByIDToDB,
};
