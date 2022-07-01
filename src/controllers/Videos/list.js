const readFiles = require("../../../utils/readFiles");

const listVideos = async (req, res) => {
  try {
    const files = await readFiles();
    res.send(files);
  } catch (error) {
    console.log(error);
  }
};

module.exports = listVideos;
