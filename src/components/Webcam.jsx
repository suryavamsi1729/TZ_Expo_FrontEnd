import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import Typewriter from "../hooks/useTypeWriter";
import {Video,VideoOff} from "lucide-react";

const WebcamRecorder = () => {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const containerRef = useRef(null);
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
  useEffect(() => {
    if (containerRef.current) {
      console.log("scroll")
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  },[]);

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

    let recordedChunks = [];
    const mediaRecorder = new MediaRecorder(stream, { mimeType: "video/webm" });

    mediaRecorder.ondataavailable = async (event) => {
      if (event.data.size > 0) {
        recordedChunks.push(event.data);
        sendVideoChunk(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      console.log("Recording stopped.");
    };

    mediaRecorderRef.current = mediaRecorder;
    mediaRecorder.start();

    // Force recording a new chunk every 3 seconds
    intervalRef.current = setInterval(() => {
      if (mediaRecorder.state === "recording") {
        mediaRecorder.stop();
        mediaRecorder.start();
      }
    }, 3000);
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
    formData.append("video", videoChunk, chunk-${Date.now()}.webm);

    try {
      const response = await axios.post("http://localhost:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Chunk uploaded:", response.data);
    } catch (error) {
      console.error("Error uploading chunk:", error);
    }
  };
  const fetchCaptions = async () => {
    try {
      const response = await axios.get("http://localhost:5000/captions");
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
    <div className="w-full h-auto flex flex-col justify-center items-center gap-4">
    <div className="w-full h-auto flex flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-bold ">Webcam Recorder</h2>
      <div className="w-auto h-auto relative flex flex-col justify-center items-center">
        <video ref={videoRef} autoPlay playsInline className="commonShadow object-cover bg-zinc-600/60 rounded-2xl w-[880px] h-[460px]"></video>
        <div className="absolute bottom-4 flex gap-4">
          {!isRecording ? (
            <button onClick={startRecording} className="px-4 py-2 bg-green-500 text-white rounded-lg">
              <Video className="w-6! h-6! stroke-2!"/>
            </button>
          ) : (
            <button onClick={stopRecording} className="px-4 py-2 bg-red-500 text-white rounded-lg">
              <VideoOff className="w-6! h-6! stroke-2!"/>
            </button>
          )}
        </div>
      </div>
    </div>
      <div className="w-full h-auto px-4 py-6">
          <Typewriter className={" w-full h-auto text-lg  text-zinc-600 text-wrap"} speed={5} text=""/>
      </div>
    </div>
  );
};

export default WebcamRecorder;