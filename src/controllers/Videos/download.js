const downloadVideo = async (req, res) => {
  console.log("BANANA", req.params.id);
  try {
    res.download(`./src/uploads/${req.params.id}`, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Vídeo Enviado");
      }
    });
  } catch (error) {
    return res.status(400).send({ error: "Download Video" });
  }
};

module.exports = downloadVideo;
