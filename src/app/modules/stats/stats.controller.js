const Stats = require("./stats.model");
const {
  insertStatsToDB,
  getStatsFromDB,
  updateStatsByIDToDB,
} = require("./stats.service");

const insertStats = async (req, res) => {
  const data = req.body;

  try {
    let stats = await Stats.find({}).exec();

    if (stats.length > 0) {
      return res.send({
        status: "fail",
        message: "Stats already added",
        data: stats,
      });
    }

    stats = await insertStatsToDB(data);

    res.send({
      status: "success",
      message: "Stats added successfull",
      data: stats,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to add stats",
    });
  }
};

const getStats = async (req, res) => {
  try {
    const stats = await getStatsFromDB();

    res.send({
      status: "success",
      data: stats,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to get stats",
    });
  }
};

const updateStats = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const stats = await updateStatsByIDToDB(id, data);

    res.send({
      status: "success",
      data: stats,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to update stats",
    });
  }
};

module.exports = {
  insertStats,
  getStats,
  updateStats,
};
