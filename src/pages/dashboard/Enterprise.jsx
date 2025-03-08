import React from "react";
import { 
  RiUserLine, 
  RiUserAddLine, 
  RiGroupFill, 
  RiBearSmileLine, // Icon for Kids
  RiUserHeartLine  // Icon for Old
} from "react-icons/ri";

import { PiBabyFill } from "react-icons/pi"; // Kids Icon
import { FaUserTie ,FaGem} from "react-icons/fa"; // Adult Icon
import { MdElderly } from "react-icons/md"; // Elderly Icon
import {  GiCutDiamond } from "react-icons/gi"; // Silver, Gold, Diamond icons
import AccidentsChart from "../../components/charts/AccidentsChart";
import TrafficViolationsChart from "../../components/charts/TrafficViolationsChart";
import { accidentsData, violationsData } from "../../data/chartData";
import UserProfile from "../../components/dashboard/UserProfile";

const StatCard = ({ icon, title, value, change }) => (
  <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-xl lg:text-xl font-bold mt-2">{value}</p>
      </div>
      <div className="text-2xl lg:text-3xl text-blue-500">{icon}</div>
    </div>
    {/* {change !== null && change !== undefined && (
      <p className={`text-sm mt-4 ${change >= 0 ? "text-green-500" : "text-red-500"}`}>
        {change >= 0 ? "↑" : "↓"} {Math.abs(change)}% from last month
      </p>
    )} */}
  </div>
);

const EnterpriseDashboard = () => {
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
    //   change: 0 
    },
    { 
      icon: <RiUserAddLine />, 
      title: "New Members This Month", 
      value: "2", 
      
    },
    { 
       
      title: "Family Categories", 
      value: (
        <>
          <p><PiBabyFill className="inline text-yellow-300" /> Kids: {categoryCount.Kid}</p>
          <p><FaUserTie className="inline text-blue-500" /> Adults: {categoryCount.Adult}</p>
          <p><MdElderly className="inline text-red-500" /> Old: {categoryCount.Old}</p>
        </>
      ),
    //   change: null
    }
  ];
  

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between w-full">
  <h1 className="text-2xl lg:text-3xl font-bold mt-2 text-gray-800">
    Dashboard Overview
  </h1>
  <FaGem className="text-cyan-400 text-3xl" />
</div>

      <div className="mb-6">
        <UserProfile />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AccidentsChart data={accidentsData} />
        <TrafficViolationsChart data={violationsData} />
      </div>
    </div>
  );
};

export default EnterpriseDashboard;
