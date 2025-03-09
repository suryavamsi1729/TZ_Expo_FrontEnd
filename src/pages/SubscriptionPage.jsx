import React from "react";
import { useNavigate } from "react-router-dom";
import applogo from "../assets/applogo.svg";
import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic Plan",
    description: "Great for starters with essential features",
    price: "9.99",
    color: "bg-gradient-to-r from-yellow-900 to-yellow-600",
    hover: "hover:from-yellow-800 hover:to-yellow-500",
    shadow: "shadow-yellow-600",
    border: "border-yellow-400",
    textColor: "text-yellow-200",
    buttonColor: "bg-yellow-700 hover:bg-yellow-600",
    planKey: "basic",
    spacifications: ["1 webcam acess",]
  },
  {
    name: "Premium Plan",
    description: "Advanced features for growing needs",
    price: "19.99",
    color: "bg-gradient-to-r from-gray-500 to-gray-300",
    hover: "hover:from-gray-600 hover:to-gray-400",
    shadow: "shadow-gray-400",
    border: "border-gray-300",
    textColor: "text-gray-200",
    buttonColor: "bg-gray-600 hover:bg-gray-500",
    planKey: "premium",
    spacifications: ["5 webcam acess"]

  },
  {
    name: "Enterprise Plan",
    description: "Full access to all premium features",
    price: "29.99",
    color: "bg-gradient-to-r from-yellow-500 to-yellow-300",
    hover: "hover:from-yellow-600 hover:to-yellow-400",
    shadow: "shadow-yellow-500",
    border: "border-yellow-400",
    textColor: "text-yellow-100",
    buttonColor: "bg-yellow-500 hover:bg-yellow-400",
    planKey: "enterprise",
    spacifications: ["unlimited webcam acess","Chatbot access",]
  },
];
// https://dribbble.com/shots/22554637-Pricing-for-Poe-landing-page
const SubscriptionPage = () => {
  const navigate = useNavigate();

  const handleSubscription = (plan) => {
    console.log("button clicked");
    localStorage.setItem("userPlan", plan); // Store selected plan
    navigate(`/login`); // Redirect to respective dashboard
  };

  return (
    <div className="plane-background min-w-screen min-h-screen flex flex-col justify-start items-center text-white p-6 font-poppins gap-7 ">
      <div className="w-full h-auto p-4 flex flex-row justify-center items-center gap-4">
        <img src={applogo} alt="logo" className="w-12 h-12"/>
        <h2 className="text-5xl font-bold text-zinc-900">SHWAS</h2>
      </div>
      <div className="w-full grow flex flex-col items-center justify-start gap-16">
        <div className="w-full h-auto flex flex-col items-center justify-start gap-3">
          <h1 className="text-5xl font-extrabold text-[#2152AD]">
            Choose Your Plan
          </h1>
          <p className="font-bold text-2xl bg-linear-to-r from-[#b78bc8] via-[#d8999c] to-[#c499cc] to-90% bg-clip-text text-transparent">Unlock endless possibilities</p>
        </div>
        <div className="flex flex-wrap justify-center gap-12">
          {plans.map((plan, index) => (
            <div key={index} className={`relative group w-[280px] h-auto p-[2px]  rounded-3xl  bg-radial-[circle_at_20%_20%] from-[#91FAEB]/100 hover:from-[#D68CFA] to-[#4B3C46] to-40% hover:scale-105 transition-all duration-150 ease-in-out  `}>
              {plan.name === "Premium Plan" ? <div className="absolute top-4 right-4 w-auto h-auto px-3 py-1 rounded-4xl border border-[#4B3C46] bg-[#443946ce]  backdrop-blur-[8px] drop-shadow-lg text-xs font-semibold text-white "> Popular </div> : null}
              {/* Animated border glow */}
              <div className="group-hover:cursor-pointer w-full h-full rounded-[22px] px-6 py-10 flex flex-col justify-start items-start gap-4 bg-radial-[at_10%_10%] from-[#4B3C46] via-[#34202e]  to-[#392d4a] to-85% ">
                {/* Plan Details */}
                  <div className="w-fulll h-auto flex flex-col items-start justify-center gap-2">
                      <h2 className={`text-2xl font-semibold text-[#91FAEB] group-hover:text-[#D68CFA] drop-shadow-md transition-colors duration-150 ease-in-out`}>
                        {plan.name}
                      </h2>
                      <p className="text-sm font-light  text-white">{plan.description}</p>
                  </div>
                  <div className="w-full h-auto flex flex-col justify-center items-start gap-8">
                      <p className="text-[44px]/[48px] font-bold mt-6 flex flex-row justify-start items-start"><span className="text-2xl font-bold text-[#91FAEB] group-hover:text-[#D68CFA] mr-1 transition-colors duration-150 ease-in-out">$</span> {plan.price}<span className="ml-1 self-end text-xs font-medium text-neutral-100/50 group-hover:text-neutral-100 transition-colors duration-150 ease-in-out"> Per Month</span></p>
                      {/* Subscribe Button */}
                      <button onClick={() => handleSubscription(plan.planKey)} className={`w-full h-auto py-2 rounded-4xl border border-[#4B3C46] group-hover:border-[#D68CFA] bg-[#4B3C46]/40 group-hover:bg-[#D68CFA] backdrop-blur-[6px] drop-shadow-lg text-sm font-bold hover:cursor-pointer text-white group-hover:text-zinc-900 transition-colors duration-150 ease-in-out`}>
                        Get Started
                      </button>
                  </div>
                  <div className="w-full grow flex flex-col justify-start items-start mt-3 gap-3">
                    {plan.spacifications.map((spec, index) => {
                      return (
                        <>
                        <div key={index} className="flex flex-row justify-start items-center gap-3 py-1">
                          <div className="w-4 h-4 p-[3px]  bg-[#91FAEB] group-hover:bg-[#D68CFA] rounded-full flex flex-col justify-center items-center transition-colors duration-150 ease-in-out">
                            <Check className="w-[10px]! h-[10px]! stroke-[4px]!" color="#4B3C46" />
                          </div>
                          <p className="text-sm font-medium text-white">{spec}</p>
                        </div>
                        {plan.spacifications.length-1!==index?<div className="w-full h-[1px] rounded-xl bg-[#4B3C46]"></div>:null}
                        </>
                      );
                    })}
                  </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
