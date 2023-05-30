const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const insertSingleImage = async (req, res) => {
  try {
    upload.single("image")(req, res, (err) => {
      const file = req.file;
      const { path } = file;

      res.send({
        status: "success",
        message: "Image uploaded successfully",
        data: path,
      });
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to upload image",
    });
  }
};

const insertMultipleImage = async (req, res) => {
  try {
    upload.array("images")(req, res, (err) => {
      const paths = req.files.map((file) => ({ path: file.path }));

      res.send({
        status: "success",
        message: "Images uploaded successfully",
        data: paths,
      });
    });
  } catch {
    res.send({
      status: "fail",
      message: "Failed to upload images",
    });
  }
};

module.exports = {
  insertSingleImage,
  insertMultipleImage,
};
