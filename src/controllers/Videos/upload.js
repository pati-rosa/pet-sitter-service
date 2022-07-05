const uploadVideo = async (req, res) => {
  try {
    res.send({ message: "Upload realizado com sucesso" });
  } catch (error) {
    return res.status(400).send({ error: "Error on upload photo" });
  }
};

module.exports = uploadVideo;
