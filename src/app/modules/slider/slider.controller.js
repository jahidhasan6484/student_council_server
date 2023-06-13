const {
  insertSliderToDB,
  getSlidersFromDB,
  updateSliderByIDToDB,
  deleteSliderByIDFromDB,
  getSliderByIDFromDB,
} = require("./slider.service");

const insertSlider = async (req, res) => {
  const data = req.body;
  try {
    const slider = await insertSliderToDB(data);
    res.send({
      status: "success",
      data: slider,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to add slider",
    });
  }
};

const getSliders = async (req, res) => {
  try {
    const slider = await getSlidersFromDB();

    res.send({
      status: "success",
      data: slider,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to get slider",
    });
  }
};

const getSliderByID = async (req, res) => {
  const { id } = req.params;
  try {
    const slider = await getSliderByIDFromDB(id);

    res.send({
      status: "success",
      data: slider,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to get slider",
    });
  }
};

const updateSliderByID = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const slider = await updateSliderByIDToDB(id, data);

    res.send({
      status: "success",
      data: slider,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to update slider",
    });
  }
};

const deleteSliderByID = async (req, res) => {
  const { id } = req.params;
  try {
    const slider = await deleteSliderByIDFromDB(id);

    res.send({
      status: "success",
      data: slider,
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to delete slider",
    });
  }
};

module.exports = {
  insertSlider,
  getSliders,
  getSliderByID,
  updateSliderByID,
  deleteSliderByID,
};
