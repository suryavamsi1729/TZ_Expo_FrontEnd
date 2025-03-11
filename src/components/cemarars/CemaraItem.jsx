import React from "react";
import { useEffect,useRef,useState} from "react";
import Container from "../ui/container";
import cctv from "../../assets/cctv.mp4";
import { useNavigate } from "react-router-dom";
import {VideoOff} from "lucide-react";

const CemaraItem = ({item,className,children})=>{
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const [date,setDate] = useState("");
    const [time,setTime] = useState("");
    const handleMouseEnter = () => {
        // Play the video when the mouse enters the video area
        videoRef.current.play();
      };
    
      const handleMouseLeave = () => {
        // Pause the video and optionally reset it when the mouse leaves
        videoRef.current.pause();
        videoRef.current.currentTime = 0; // reset to the beginning (optional)
      };
        useEffect(()=>{
            const now = new Date();
            const timeInterval = setInterval(()=>{
                setDate(now.toLocaleDateString());
                setTime(now.toLocaleTimeString());
            },1000);
    
            return ()=> clearInterval(timeInterval);
        }); 
    return(
        <Container onClick={()=>{navigate("/webcam")}}  key={item.id} className={"relative group w-full h-[200px] rounded-2xl p-0 hover:cursor-pointer transition-all duration-300 ease-in-out"}>
            {item.status? <video ref={videoRef} loop muted onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="w-full h-full object-cover z-40 rounded-2xl">
                <source src={cctv} type="video/mp4" />
                browser not suppoted
            </video>: 
            <div className="w-full h-full flex flex-col justify-center items-center bg-zinc-600/60 rounded-2xl">
                <VideoOff className="w-16! h-16! text-zinc-900 group-hover:opacity-40"/>
            </div>
            }
            <div className={`absolute top-3 right-4 ${item.status?"flex": "hidden"} flex-row justify-center items-center gap-2 z-[60]`}>
                <span class="relative flex justify-center items-center size-3">
                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                    <span class="relative inline-flex size-2 rounded-full bg-red-500"></span>
                </span>
                <p className="text-base font-semibold text-white">Live</p>
            </div>
            <p className={`absolute left-4 top-2 text-lg text-white font-bold`}>{`Cemara ${item.id}`}</p>
            <p className={`w-full h-auto absolute bottom-2  ${item.status?"flex":"hidden"} flex-row justify-between items-center text-sm text-white font-medium px-4`}><span >{date}</span> <span>{time}</span></p>
            
        </Container>
    ); 

}

export default CemaraItem;