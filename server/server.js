const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 5000;

// Enable CORS (allows frontend to send requests)
app.use(cors());

// Create 'uploads' directory if it doesn't exist
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Multer configuration for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save videos in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, `chunk-${Date.now()}.webm`); // Unique filename for each segment
  }
});

const upload = multer({ storage });

// Upload video endpoint
app.post("/upload", upload.single("video"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No video uploaded" });
  }

  console.log("Received video chunk:", req.file.filename);
  res.json({ message: "Video chunk uploaded successfully", filename: req.file.filename });
});

// Serve uploaded videos (for testing)
app.use("/uploads", express.static("uploads"));

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
