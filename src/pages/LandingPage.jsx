import { Link,useNavigate } from "react-router-dom";
import applogo from "../assets/applogo.svg";
import cemera from "../assets/loginCam.png";
import rltCam from "../assets/rltloginCam.png";


const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="relative plane-background-auth min-w-screen min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-12">

      <div className="absolute auth-glash-bacground left-4 -top-20 rotate-45 w-[360px] h-[180px] opacity-50"></div>
      <div className="absolute auth-glash-bacground left-[1024px] top-[550px] rotate-20 w-[200px] h-[110px] opacity-38"></div>
      <div className="absolute auth-glash-bacground left-[880px] top-[220px] rotate-25 w-[160px] h-[160px] opacity-40"></div>
      <div className="absolute auth-glash-bacground left-[60px] top-[440px] -rotate-15 w-[190px] h-[90px] opacity-32"></div>
      <div className="absolute auth-glash-bacground left-[190px] bottom-[80px] rotate-3 w-[156px] h-[87px] opacity-30"></div>
      <div className="absolute auth-glash-bacground left-[360px] top-[500px] rotate-39 w-[290px] h-[128px] opacity-20"></div>
      <div className="absolute auth-glash-bacground left-[360px] top-[120px] rotate-2 w-[229px] h-[130px] opacity-20"></div>
      <div className="absolute auth-glash-bacground left-[30px] top-[200px] rotate-0 w-[220px] h-[90px] opacity-20"></div>
      {/* <img src={cemera} className="absolute -rotate-18 top-6 right-0 w-44 h-44 object-contain" alt="cemera image"/> */}
      {/* <img src={rltCam} className="absolute rotate-18 top-6 left-0 w-44 h-44 object-contain" alt="cemera image"/> */}
      <div className="flex flex-col items-center gap-4">
        <img src={applogo} alt="logo" className="w-24 h-24"/>
        <h1 className="text-3xl lg:text-5xl font-bold text-center text-gray-200 tracking-widest ">
          Welcome to SHWAS
        </h1>
        <p className="text-lg font-medium text-gray-300/80 text-center">
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
