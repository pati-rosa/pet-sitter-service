const express = require("express");
const multer = require("multer");

const listVideos = require("../controllers/Videos/list");
const downloadVideo = require("../controllers/Videos/download");
const uploadVideo = require("../controllers/Videos/upload");

const router = express.Router();

router.get("get");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/uploads/");
  },
  filename: function (req, file, cb) {
    const fileExtension = file.originalname.split(".")[1];

    const newFileName = new Date();

    cb(null, `${newFileName}.${fileExtension}`);
  },
});

const upload = multer({ storage });

router.get("/videos", listVideos);
router.get("/videos/:id", downloadVideo);
router.post("/videos/upload", upload.single("foto"), uploadVideo);

module.exports = router;
