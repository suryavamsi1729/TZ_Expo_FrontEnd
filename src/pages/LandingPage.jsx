import { Link,useNavigate } from "react-router-dom";
import applogo from "../assets/applogo.svg";
import cemera from "../assets/loginCam.png";
import rltCam from "../assets/rltloginCam.png";


const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="relative plane-background min-w-screen min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-12">
      {/* <img src={cemera} className="absolute -rotate-18 top-6 right-0 w-44 h-44 object-contain" alt="cemera image"/> */}
      {/* <img src={rltCam} className="absolute rotate-18 top-6 left-0 w-44 h-44 object-contain" alt="cemera image"/> */}
      <div className="flex flex-col items-center gap-4">
        <img src={applogo} alt="logo" className="w-18 h-18"/>
        <h1 className="text-3xl lg:text-5xl font-bold text-center text-gray-800 tracking-widest ">
          Welcome to SHWAS
        </h1>
        <p className="text-lg font-medium text-gray-600/80 text-center">
          Monitor your traffic cameras and get status captions in real-time
        </p>
      </div>
      <button onClick={() => navigate("/subscription")} className="px-10 py-3 font-semibold text-white bg-blue-600/95 hover:bg-blue-600 rounded-lg hover:cursor-pointer">
        Get Started
      </button>
      
    </div>
  );
};

export default LandingPage;
