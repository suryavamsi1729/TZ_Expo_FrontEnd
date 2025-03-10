const express = require("express");
const multer = require("multer");
const cors = require("cors");
const axios = require("axios");
const FormData = require("form-data");

const app = express();
const port = 5000;

app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage });
let consumerStarted = false;

// 🔹 Ensure Kafka consumer starts at server startup
const startConsumer = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/start_consumer");
    console.log("✅ Kafka Consumer started:", response.data);
    consumerStarted = true;
  } catch (error) {
    console.error("❌ Error starting Kafka Consumer:", error.response?.data || error.message);
  }
};

// 🔹 Call this function when the server starts
startConsumer();

app.post("/upload", upload.single("video"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No video uploaded" });
  }

  try {
    // 🔹 Ensure consumer is running before sending chunks
    if (!consumerStarted) {
      await startConsumer();
    }

    // Convert file buffer into FormData
    const formData = new FormData();
    formData.append("video", req.file.buffer, { filename: "chunk.webm" });

    const response = await axios.post("http://127.0.0.1:8000/upload_video", formData, {
      headers: formData.getHeaders(),
    });

    console.log("Chunk forwarded to API:", response.data);
    res.json({ message: "Chunk forwarded successfully", apiResponse: response.data });
  } catch (error) {
    console.error("Error forwarding chunk:", error.response?.data || error.message);
    res.status(500).json({ message: "Failed to forward chunk" });
  }
});

app.get("/captions", async (req, res) => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/captions");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch captions" });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
