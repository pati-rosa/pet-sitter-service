const uploadVideo = async (req, res) => {
  try {
    const { nome, site } = req.body;
    res.json({ nome, site });
  } catch (error) {
    return res.status(400).send({ error: "List Videos" });
  }
};

module.exports = uploadVideo;
