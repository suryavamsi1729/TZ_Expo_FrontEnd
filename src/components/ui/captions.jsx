import React, { useRef, useEffect, useState } from "react";
import axios from "axios";

const WebcamRecorder = () => {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [captions, setCaptions] = useState(""); // Store current caption
  const intervalRef = useRef(null); // Store interval reference

  useEffect(() => {
    startWebcam();
    return () => stopWebcam();
  }, []);

  useEffect(() => {
    if (isRecording) {
      // Fetch captions periodically while recording
      const captionInterval = setInterval(fetchCaptions, 1000);
      return () => clearInterval(captionInterval);
    }
  }, [isRecording]);

  const startWebcam = async () => {
    try {
      const videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = videoStream;
      setStream(videoStream);
    } catch (error) {
      console.error("Error accessing webcam:", error);
    }
  };

  const stopWebcam = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  const startRecording = () => {
    if (!stream) return;
    setIsRecording(true);

    const mediaRecorder = new MediaRecorder(stream, { mimeType: "video/webm" });

    mediaRecorder.ondataavailable = async (event) => {
      if (event.data.size > 0) {
        sendVideoChunk(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      console.log("Recording stopped.");
    };

    mediaRecorderRef.current = mediaRecorder;
    mediaRecorder.start();

    intervalRef.current = setInterval(() => {
      if (mediaRecorder.state === "recording") {
        mediaRecorder.stop();
        mediaRecorder.start();
      }
    }, 2000);
  };

  const stopRecording = () => {
    setIsRecording(false);
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
    }
    clearInterval(intervalRef.current);
  };

  const sendVideoChunk = async (videoChunk) => {
    const formData = new FormData();
    formData.append("video", videoChunk, `chunk-${Date.now()}.webm`);

    try {
      const response = await axios.post("http://localhost:9000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Chunk uploaded:", response.data);
    } catch (error) {
      console.error("Error uploading chunk:", error);
    }
  };

  // 🔹 New function to fetch captions separately
  const fetchCaptions = async () => {
    try {
      const response = await axios.get("http://localhost:9000/captions");
      console.log("API Response:", response.data); // Debugging
  
      // Extract captions correctly
      if (response.data.captions && Array.isArray(response.data.captions) && response.data.captions.length > 0) {
        console.log("Latest Caption:", response.data.captions[response.data.captions.length - 1]); // Debugging
        setCaptions(response.data.captions[response.data.captions.length - 1].caption);
      } else {
        console.warn("No captions received! Data received:", response.data);
      }
    } catch (error) {
      console.error("Error fetching captions:", error);
    }
  };
  
  

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h2 className="text-xl font-bold mb-4">Webcam Recorder</h2>
      <video ref={videoRef} autoPlay playsInline className="border rounded-lg shadow-md w-[400px] h-[300px]"></video>
      <div className="mt-4 flex gap-4">
        {!isRecording ? (
          <button onClick={startRecording} className="px-4 py-2 bg-green-500 text-white rounded-lg">
            Start Recording
          </button>
        ) : (
          <button onClick={stopRecording} className="px-4 py-2 bg-red-500 text-white rounded-lg">
            Stop Recording
          </button>
        )}
      </div>
      {captions && (
        <div className="mt-4 p-3 bg-gray-800 text-white rounded-lg shadow-lg text-lg">
          {captions}
        </div>
      )}
    </div>
  );
};

export default WebcamRecorder;
