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
  const [chunks, setChunks] = useState([]);
  const intervalRef = useRef(null); // Store interval reference
  useEffect(() => {
    startWebcam();
    return () => stopWebcam();
  }, []);
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
    formData.append("video", videoChunk, `chunk-${Date.now()}.webm`);

    try {
      const response = await axios.post("http://localhost:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Chunk uploaded:", response.data);
    } catch (error) {
      console.error("Error uploading chunk:", error);
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
      <Typewriter className={" w-full h-auto text-lg  text-zinc-600 text-wrap"} speed={25} text="Content in UX and UI is important because it provides clarity, appeals to users’ emotions and builds on a brand. A human-centred approach to writing even the most minor bits of copy within a user interface can immensely change the user experience.

The copy within an interface can show users a brand’s purpose, make the user feel understood and intuitively show users how to interact with it. Even in just a few words, content designers are telling a compelling, all-inclusive story. Storytelling is an important approach to UX design, which we cover here in more detail.

Content design clarifies navigation and bridges the gaps between context and visual design. For example, if someone gave you a road sign with no words, could you tell them what it meant? More than 11% of people can’t. That’s where good content comes in. A stop sign with the word “STOP” on it is much more effective than a red octagon alone.

Content provides direction or persuades a user to perform a specific action. While the visual design might lure someone in, product teams can use content design to persuade a user. Calls to action can convince a user to perform a specific action, like buying a product or service. Content conveys value and makes the big picture clear.

Content can also be used as another layer of design. Aligning their copy with a brand’s identity helps content designers add personality, show a brand’s value and strengthen a brand’s authenticity. All of these factors are what make a brand stand out from the crowd.

Content designers are tasked with transforming a brand and style guide into a lexicon that conveys an entire brand. By using specific words and writing styles consistently, UX writers enhance brand trust and compel users in the most subtle ways. Content in UX and UI is important because it provides clarity, appeals to users’ emotions and builds on a brand. A human-centred approach to writing even the most minor bits of copy within a user interface can immensely change the user experience.

The copy within an interface can show users a brand’s purpose, make the user feel understood and intuitively show users how to interact with it. Even in just a few words, content designers are telling a compelling, all-inclusive story. Storytelling is an important approach to UX design, which we cover here in more detail.

Content design clarifies navigation and bridges the gaps between context and visual design. For example, if someone gave you a road sign with no words, could you tell them what it meant? More than 11% of people can’t. That’s where good content comes in. A stop sign with the word “STOP” on it is much more effective than a red octagon alone.

Content provides direction or persuades a user to perform a specific action. While the visual design might lure someone in, product teams can use content design to persuade a user. Calls to action can convince a user to perform a specific action, like buying a product or service. Content conveys value and makes the big picture clear.

Content can also be used as another layer of design. Aligning their copy with a brand’s identity helps content designers add personality, show a brand’s value and strengthen a brand’s authenticity. All of these factors are what make a brand stand out from the crowd.

Content designers are tasked with transforming a brand and style guide into a lexicon that conveys an entire brand. By using specific words and writing styles consistently, UX writers enhance brand trust and compel users in the most subtle ways."/>
      </div>
    </div>
  );
};

export default WebcamRecorder;
