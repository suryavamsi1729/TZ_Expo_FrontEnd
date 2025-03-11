import React from "react";
import Layout from "../layouts/Layout";
import YouTubeStreamer from "../components/ui/LiveStream";
// import {Video,VideoOff} from "lucide-react";
// import YouTubePlayer from "../components/ui/liveui";
// import { useRef,useState,useEffect } from "react";
// import { cn } from "../lib/utils";


const LivePage = ()=>{
    // const videoRef = useRef(null);
    //   const containerRef = useRef(null);
    //   const [isRecording, setIsRecording] = useState(false);
    //   const [captions, setCaptions] = useState(""); // Store current caption   
    
    return(
        <Layout>
            {/* <div className="w-full h-auto flex flex-col justify-center items-center gap-4">
                <div className="w-full h-auto flex flex-col items-center justify-center py-2 gap-6">
                    <h2 className="text-2xl font-bold ">Live Recorder</h2>
                    <div className="w-auto h-auto relative flex flex-col justify-center items-center rounded-2xl">
                        <YouTubePlayer/>
                    </div>
                </div>
                <div className="w-full h-auto px-4 py-6">
                    <div className={`w-full h-auto bg-white commonShadow rounded-2xl ${captions===""?"hidden":"flex"} flex-col justify-center items-start gap-3 py-4 px-1 `}>
                        <h1 className='text-2xl font-semibold text-zinc-900 px-7'>Caption:</h1>
                        <div ref={containerRef} className='scroll-container typingConatiner w-full h-[320px] overflow-scroll px-7'>
                            <p className={cn("w-full h-auto text-lg  text-zinc-600 text-wrap py-3",)}>{captions}</p>
                        </div>
                    </div>
                    <Typewriter className={" w-full h-auto text-lg  text-zinc-600 text-wrap"} speed={5} text=""/>
                </div>
            </div> */}
            <YouTubeStreamer/>
        </Layout>
    );
}

export default LivePage;