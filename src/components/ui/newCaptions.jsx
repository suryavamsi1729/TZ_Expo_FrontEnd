import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import {Video,VideoOff} from "lucide-react";
import { cn } from "../../lib/utils";

const WebcamRecorder = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [captions, setCaptions] = useState("werhjnfgbijhsbbbd  sjhjsys"); 
  const intervalRef = useRef(null);
  const isUploadingRef = useRef(false);
  const lastCaptionRef = useRef("");
  const isRenderingSlow = useRef(true); // Flag for slow rendering

  useEffect(() => {
    startWebcam();
    return () => stopWebcam();
  }, []);

  useEffect(() => {
    if (isRecording) {
      const captionInterval = setInterval(fetchCaptions, 500);
      return () => clearInterval(captionInterval);
    }
  }, [isRecording]);

  const startWebcam = async () => {
    try {
      const videoStream = await navigator.mediaDevices.getUserMedia({
        video: { frameRate: { ideal: 5, max: 10 } }, // Low frame rate for webcam feed
      });
      videoRef.current.srcObject = videoStream;
      setStream(videoStream);

      // Start rendering frames slowly
      startRenderingSlow();
    } catch (error) {
      console.error("Error accessing webcam:", error);
    }
  };

  const stopWebcam = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  const startRenderingSlow = () => {
    if (!videoRef.current || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 300;

    const drawFrame = () => {
      if (isRenderingSlow.current && videoRef.current) {
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        setTimeout(drawFrame, 2000); // 🔹 Slower update (1 frame per 2 seconds)
      }
    };

    drawFrame();
  };

  const startRecording = () => {
    if (!stream) return;
    setIsRecording(true);
    isRenderingSlow.current = true; // Keep slow frame updates
  
    const mediaRecorder = new MediaRecorder(stream, { mimeType: "video/webm" });
    let recordedChunks = [];
  
    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        recordedChunks.push(event.data);
      }
    };
  
    mediaRecorder.onstop = async () => {
      if (recordedChunks.length > 0 && !isUploadingRef.current) {
        isUploadingRef.current = true;
        const blob = new Blob(recordedChunks, { type: "video/webm" });
        await sendVideoChunk(blob);
        recordedChunks = [];
        isUploadingRef.current = false;
      }
    };
  
    mediaRecorderRef.current = mediaRecorder;
    mediaRecorder.start();
    intervalRef.current = setInterval(() => {
      if (mediaRecorder.state === "recording") {
        mediaRecorder.stop();
        mediaRecorder.start();
      }
    }, 1000);
  };
  
  const stopRecording = () => {
    setIsRecording(false);
    isRenderingSlow.current = false; // Stop slow rendering

    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
    }
    clearInterval(intervalRef.current);
  };

  const sendVideoChunk = async (videoChunk) => {
    const formData = new FormData();
    formData.append("video", videoChunk, `chunk-${Date.now()}.webm`);

    try {
      await axios.post("http://localhost:9000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.error("Error uploading chunk:", error);
    }
  };

  const fetchCaptions = async () => {
    try {
      const response = await axios.get("http://localhost:9000/captions");

      const newCaptions = response.data.captions;
      console.log("api response",newCaptions);

      if (newCaptions && Array.isArray(newCaptions) && newCaptions.length > 0) {
        const latestCaption = newCaptions[newCaptions.length - 1].caption;
        console.log(latestCaption);
        
        if (latestCaption !== lastCaptionRef.current) {
          lastCaptionRef.current = latestCaption;
          setCaptions(latestCaption);
        }
      }
    } catch (error) {
      console.error("Error fetching captions:", error);
    }
  };

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center gap-4">
    <div className="w-full h-auto flex flex-col items-center justify-center py-2 gap-6">
      <h2 className="text-2xl font-bold ">Webcam Recorder</h2>
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
          <div className={`w-full h-auto bg-white commonShadow rounded-2xl ${captions===""?"hidden":"flex"}  flex-col justify-center items-start gap-3 py-4 px-1 `}>
              <h1 className='text-2xl font-semibold text-zinc-900 px-7'>Caption:</h1>
              <div ref={containerRef} className='scroll-container typingConatiner w-full h-[320px] overflow-scroll px-7'>
                <div className={cn("w-full h-auto flex flex-col justify-center items-center gap-4 text-lg  text-zinc-600 text-wrap py-3")}>
                    {captions && (() => {
                      // Extract JSON from the string
                      const jsonMatch = captions.match(/```json([\s\S]*?)```/);
                      
                      if (!jsonMatch) return <p className="text-red-500">❌ Invalid caption format</p>;

                      try {
                        const parsedData = JSON.parse(jsonMatch[1].trim());

                        return (
                          <div className="mt-4 p-4 bg-gray-800 text-white rounded-lg shadow-lg text-lg space-y-2">
                            <div>
                              <strong>🚨 Alert Detected:</strong> 
                              {parsedData.is_alert_detected ? " Yes" : " No"}
                            </div>

                            {parsedData.alert_description && (
                              <div>
                                <strong>📝 Alert Description:</strong> {parsedData.alert_description}
                              </div>
                            )}

                            <div>
                              <strong>🎮 Video Background:</strong> {parsedData.video_background}
                            </div>

                            <div>
                              <strong>📹 Video Foreground:</strong> {parsedData.video_foreground}
                            </div>

                            <div>
                              <strong>🧑‍🤝‍🧑 People in Video:</strong> {parsedData["people in the video"]}
                            </div>

                            <div>
                              <strong>📋 Video Summary:</strong> {parsedData.video_summary}
                            </div>
                          </div>
                        );
                      } catch (error) {
                        return <p className="text-red-500">❌ Error parsing captions</p>;
                      }
                    })()}
                </div>
              </div>
          </div>
          {/* <Typewriter className={" w-full h-auto text-lg  text-zinc-600 text-wrap"} speed={5} text=""/> */}
      </div>
    </div>
  );
};

export default WebcamRecorder;
