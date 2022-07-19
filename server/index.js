const express = require("express");
const ytdl = require("ytdl-core");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

// JSON
app.use(express.json());

// Cors
app.use(cors());

const getMp3File = async (videoId) => {
  const res = await axios.get(`${process.env.API_URL_MP3}?id=${videoId}`, {
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": process.env.API_HOST,
    },
  });

  return res.data;
};

app.get("/download", async (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res.status(400).json({
      success: false,
      message: "Missing parameter url!",
    });
  }

  if (!ytdl.validateURL(url)) {
    return res.status(500).json({
      success: false,
      message: "Id video or url wrong!",
    });
  }

  const videoId = ytdl.getURLVideoID(url);

  Promise.all([ytdl.getInfo(url), getMp3File(videoId)])
    .then((data) => {
      res.status(200).json({
        success: true,
        formats: data[0].formats
          .filter((item) => item.hasVideo && item.hasAudio)
          .map((item) => ({
            url: item.url,
            qualityLabel: item.qualityLabel,
            container: item.container,
          })),
        video: {
          title: data[0]?.videoDetails?.title,
          lengthSeconds: data[0]?.videoDetails?.lengthSeconds,
          thumbnails: data[0]?.videoDetails?.thumbnails,
          url: url,
        },
        mp3: data[1]?.link,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server not found!",
        err,
      });
    });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server is running!");
});
