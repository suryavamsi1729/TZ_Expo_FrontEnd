import React from "react";
import Container from "../../components/ui/container";
import { 
  RiUserLine, 
  RiUserAddLine, 
  RiGroupFill, 
  RiBearSmileLine, // Icon for Kids
  RiUserHeartLine  // Icon for Old
} from "react-icons/ri";
import ProfileConatiner from "../../components/ui/dashbord/profilecontainer";
import { PiBabyFill } from "react-icons/pi"; // Kids Icon
import { FaUserTie } from "react-icons/fa"; // Adult Icon
import { MdElderly } from "react-icons/md"; // Elderly Icon

import AccidentsChart from "../../components/charts/AccidentsChart";
import TrafficViolationsChart from "../../components/charts/TrafficViolationsChart";
import { accidentsData, violationsData } from "../../data/chartData";

const StatCard = ({ icon, title, value, change }) => (
  <Container className="w-full h-auto p-4 flex flex-col justify-start items-start gap-4" >
    <div className="w-full h-auto flex flex-row items-center justify-between gap-4">
      <div className=" grow h-auto flex flex-col justify-start items-start gap-2">
        <p className="text-zinc-900 font-semibold text-base">{title}</p>
        <p className="text-xl lg:text-3xl font-bold mt-2">{value}</p>
      </div>
      <div className="text-2xl lg:text-3xl text-blue-500">{icon}</div>
    </div>
    <div className="w-full grow flex flex-row justify-start items-center p-2 gap-1">
       <div className="w-11 h-11 rounded-[6px] flex flex-col justify-center items-center">
       <svg className={`${true?"rotate-0":"-rotate-180"}`} width="36" height="36" viewBox="0 0 42 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className={`${true?"stroke-green-500":"stroke-red-500"}`} d="M4 27.0227L14.9274 13.9999" stroke="red" stroke-width="3" stroke-linecap="round"/>
          <path className={`${true?"stroke-green-500":"stroke-red-500"}`}d="M22.7956 20.4673L33.723 7.44453" stroke="red" stroke-width="3" stroke-linecap="round"/>
          <path className={`${true?"stroke-green-500":"stroke-red-500"}`}d="M35.4852 14.1448L34.788 6.17522" stroke="red" stroke-width="3" stroke-linecap="round"/>
          <path className={`${true?"stroke-green-500":"stroke-red-500"}`}d="M34.5251 5.95459L26.5555 6.65184" stroke="red" stroke-width="3" stroke-linecap="round"/>
          <path className={`${true?"stroke-green-500":"stroke-red-500"}`}d="M15.1351 14.0393L22.7956 20.4672" stroke="red" stroke-width="3" stroke-linecap="round"/>
        </svg>
       </div>
       <p className={`text-2xl font-semibold ${true?"text-green-500":"text-red-500"}`}>1</p>
    </div>
  </Container>
);

const BasicDashboard = () => {
  const familyMembers = [
    { name: "John", category: "Adult" },
    { name: "Jane", category: "Adult" },
    { name: "Mike", category: "Kid" },
    { name: "Sarah", category: "Kid" },
    { name: "Grandpa", category: "Old" },
  ];

  const categoryCount = {
    Kid: 2,
    Adult: 2,
    Old: 1,
  };

  const stats = [
    { 
      icon: <RiUserLine />, 
      title: "Total Family Members", 
      value: familyMembers.length, 
    },
    { 
      icon: <RiUserAddLine />, 
      title: "New Members This Month", 
      value: "2", 
    },
  ];
  return (
    <div className="flex flex-col justify-start items-center gap-4">
        <div className="w-full h-auto grid grid-cols-2 justify-start items-center gap-4 mb-0">
          <ProfileConatiner />
        </div>
      <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
        <Container className="w-full h-auto p-4">
        <div className="w-full h-full flex flex-row items-center justify-between gap-4">
          <div className="w-full h-full flex flex-col justify-start items-start gap-2">
            <p className="w-full h-auto text-zinc-900 font-semibold text-base">Family Categories</p>
            <div className="w-full grow flex flex-col justify-between items-start gap-4 md:gap-3 lg:gap-3 p-2">
              <p className="w-auto h-full flex flex-row justify-start items-center gap-2 font-medium text-zinc-900/80 text-lg ">
                <PiBabyFill className="w-6! h-6! inline text-yellow-300" /> 
                Kids : <span className="text-zinc-900 text-xl font-semibold ps-[2px]"> {categoryCount.Kid}</span></p>
              <p className="w-auto h-full flex flex-row justify-start items-center gap-2 font-medium text-zinc-900/80 text-lg ">
                <FaUserTie className="w-6! h-6! inline text-blue-500" /> 
                Adults : <span className="text-zinc-900 text-xl font-semibold ps-[2px]"> {categoryCount.Adult}</span>
              </p>
              <p className="w-auto h-full flex flex-row justify-start items-center gap-2 font-medium text-zinc-900/80 text-lg ">
              <MdElderly className="w-6! h-6! inline text-red-500" /> Old :  
              <span className="text-zinc-900 text-xl font-semibold ps-[2px]"> {categoryCount.Old}</span>
              </p>
            </div>
          </div>
        </div>
        </Container>
      </div>
      <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
        <AccidentsChart data={accidentsData} />
        <TrafficViolationsChart data={violationsData} />
      </div>
    </div>
  );
};

export default BasicDashboard;
