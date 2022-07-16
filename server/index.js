const express = require("express");
const ytdl = require("ytdl-core");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.get("/info", async (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res.status(400).json({
      success: false,
      message: "Thiếu url đường dẫn video!",
    });
  }

  const checkUrl = ytdl.validateURL(url);
  if (!checkUrl) {
    return res.status(404).json({
      success: false,
      message: "Id video sai hoặc đường dẫn sai định dạng!",
    });
  }

  try {
    const info = await ytdl.getInfo(url);
    res.status(200).json({
      success: true,
      video: {
        title: info?.videoDetails?.title,
        lengthSeconds: info?.videoDetails?.lengthSeconds,
        thumbnails: info?.videoDetails?.thumbnails,
        url: url,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Lỗi từ server!",
    });
  }
});

app.get("/download", async (req, res) => {
  const url = req.query.url;
  const name = `${Math.random()}.mp4`;

  if (!url) {
    return res.status(400).json({
      success: false,
      message: "Thiếu url đường dẫn video!",
    });
  }

  const checkUrl = ytdl.validateURL(url);

  if (!checkUrl) {
    return res.status(404).json({
      success: false,
      message: "Id video sai hoặc đường dẫn sai định dạng!",
    });
  }

  res.header("Content-Disposition", `attachment; filename=${name}`);
  ytdl(url, {
    format: "mp4",
    quality: "highest",
  }).pipe(res);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server is running!");
});
