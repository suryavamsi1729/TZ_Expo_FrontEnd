import React from "react";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Basic Plan",
    description: "Great for starters with essential features",
    price: "$9.99/month",
    color: "bg-gradient-to-r from-yellow-900 to-yellow-600",
    hover: "hover:from-yellow-800 hover:to-yellow-500",
    shadow: "shadow-yellow-600",
    border: "border-yellow-400",
    textColor: "text-yellow-200",
    buttonColor: "bg-yellow-700 hover:bg-yellow-600",
    planKey: "basic",
  },
  {
    name: "Premium Plan",
    description: "Advanced features for growing needs",
    price: "$19.99/month",
    color: "bg-gradient-to-r from-gray-500 to-gray-300",
    hover: "hover:from-gray-600 hover:to-gray-400",
    shadow: "shadow-gray-400",
    border: "border-gray-300",
    textColor: "text-gray-200",
    buttonColor: "bg-gray-600 hover:bg-gray-500",
    planKey: "premium",
  },
  {
    name: "Enterprise Plan",
    description: "Full access to all premium features",
    price: "$29.99/month",
    color: "bg-gradient-to-r from-yellow-500 to-yellow-300",
    hover: "hover:from-yellow-600 hover:to-yellow-400",
    shadow: "shadow-yellow-500",
    border: "border-yellow-400",
    textColor: "text-yellow-100",
    buttonColor: "bg-yellow-500 hover:bg-yellow-400",
    planKey: "enterprise",
  },
];

const Subscription = () => {
  const navigate = useNavigate();

  const handleSubscription = (plan) => {
    console.log("button clicked");
    localStorage.setItem("userPlan", plan); // Store selected plan
    navigate(`/subscription/${plan}`); // Redirect to respective dashboard
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-8 font-poppins">
      <h1 className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500 drop-shadow-lg">
        Choose Your Plan
      </h1>

      <div className="flex flex-wrap justify-center gap-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative group h-[380px] w-[320px] p-8 rounded-3xl ${plan.color} text-white border-4 ${plan.border} text-center transition transform duration-500 hover:scale-105 hover:shadow-2xl ${plan.shadow} backdrop-blur-lg bg-opacity-40 overflow-hidden`}
          >
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-20 transition duration-500"></div>

            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-yellow-400 group-hover:opacity-100 opacity-0 transition duration-500"></div>

            {/* Plan Details */}
            <h2 className={`text-3xl font-extrabold mb-3 ${plan.textColor} drop-shadow-md`}>
              {plan.name}
            </h2>
            <p className="text-xl font-medium opacity-90">{plan.description}</p>
            <p className="text-3xl font-bold mt-6">{plan.price}</p>

            {/* Subscribe Button */}
            <button 
              onClick={() => handleSubscription(plan.planKey)}
              className={`relative z-10 mt-6 px-8 py-3 text-xl font-semibold rounded-lg ${plan.buttonColor} text-white transition duration-300 hover:scale-105 hover:shadow-lg`}
            >
              Subscribe
            </button>

            {/* Floating Light Effect */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-yellow-300 opacity-20 blur-2xl rounded-full group-hover:opacity-40 transition duration-500"></div>

            {/* Glow Effect */}
            <div className={`absolute inset-0 rounded-3xl blur-lg opacity-30 ${plan.shadow}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscription;
