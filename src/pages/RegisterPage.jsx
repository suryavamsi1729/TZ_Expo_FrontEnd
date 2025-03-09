import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import applogo from "../assets/applogo.svg";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [locationId, setLocationId] = useState("");
  const [plan, setPlan] = useState(""); // Prefilled Plan
  const [locations, setLocations] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Dummy locations data
    const fetchLocations = async () => {
      return [
        { locationId: "1", name: "New York" },
        { locationId: "2", name: "Los Angeles" },
        { locationId: "3", name: "Chicago" },
        { locationId: "4", name: "Houston" },
        { locationId: "5", name: "San Francisco" },
      ];
    };

    // Fetch locations
    fetchLocations().then(setLocations);

    // Retrieve selected plan from localStorage
    const selectedPlan = localStorage.getItem("userPlan");
    if (!selectedPlan) {
      navigate("/subscription"); // Redirect if no plan is selected
    } else {
      setPlan(selectedPlan);
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    if (!plan) {
      setError("Please select a plan before registering.");
      setIsLoading(false);
      return;
    }
  
    if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim() || !locationId) {
      setError("All fields are required");
      setIsLoading(false);
      return;
    }
  
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Invalid email address");
      setIsLoading(false);
      return;
    }
  
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      setIsLoading(false);
      return;
    }
  
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }
  
    try {
      // Dummy registration logic
      console.log("User Registered:", { name, email, password, locationId, plan });
  
      // Define routes for different plans
      const planRoutes = {
        basic: "/dashboard/basic",
        premium: "/dashboard/premium",
        enterprise: "/dashboard/enterprise",
      };
  
      // Get the corresponding route for the plan, default to a generic dashboard if not found
      const dashboardRoute = planRoutes[plan.toLowerCase()] || "/dashboard";
  
      setIsLoading(false);
      toast.success("User Registered Successfully! Redirecting...", { autoClose: 2500 });
  
      // Navigate to the respective dashboard
      navigate(dashboardRoute);
    } catch (err) {
      setError("Registration failed: " + err.message);
      setIsLoading(false);
    }
  };
  

  return (
    <div className="min-w-screen plane-background-auth min-h-screen flex flex-col items-center justify-center max-md:px-2">
      <div className="absolute auth-glash-bacground left-4 -top-20 rotate-45 w-[360px] h-[180px] opacity-50"></div>
      <div className="absolute auth-glash-bacground left-[1024px] top-[550px] rotate-20 w-[200px] h-[110px] opacity-38"></div>
      <div className="absolute auth-glash-bacground left-[880px] top-[220px] rotate-25 w-[160px] h-[160px] opacity-40"></div>
      <div className="absolute auth-glash-bacground left-[60px] top-[440px] -rotate-15 w-[190px] h-[90px] opacity-32"></div>
      <div className="absolute auth-glash-bacground left-[190px] bottom-[80px] rotate-3 w-[156px] h-[87px] opacity-30"></div>
      <div className="absolute auth-glash-bacground left-[360px] top-[500px] rotate-39 w-[290px] h-[128px] opacity-20"></div>
      <div className="absolute auth-glash-bacground left-[360px] top-[120px] rotate-2 w-[229px] h-[130px] opacity-20"></div>
      <div className="absolute auth-glash-bacground left-[30px] top-[200px] rotate-0 w-[220px] h-[90px] opacity-20"></div>
      <div className="rounded-lg border auth-glash-bacground mx-auto max-w-sm"></div>
      <div className="auth-glash-bacground w-full rounded-lg border bg-card text-card-foreground shadow mx-auto max-w-md">
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="font-semibold tracking-tight text-2xl mb-2.5 text-center">
            Register for {plan.charAt(0).toUpperCase() + plan.slice(1)} Plan
          </div>
          <div className="text-sm text-zinc-900/80 text-center">
            Complete your registration to get started
          </div>
        </div>

        <div className="px-6 pb-6">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm pl-0.5 font-medium">Selected Plan</label>
                <input
                  type="text"
                  value={plan.charAt(0).toUpperCase() + plan.slice(1)}
                  disabled
                  className="flex h-9 w-full rounded-md text-white bg-zinc-900/80 px-3 py-1 text-sm shadow-sm ring-0 focus:outline focus:outline-zinc-900 placeholder:text-zinc-800/70"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm pl-0.5 font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-zinc-900 px-3 py-1 text-sm shadow-sm ring-0 focus:outline focus:outline-zinc-900 placeholder:text-zinc-800/70"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm pl-0.5 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-zinc-900 px-3 py-1 text-sm shadow-sm ring-0 focus:outline focus:outline-zinc-900 placeholder:text-zinc-800/70"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm pl-0.5 font-medium">Password</label>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-zinc-900 px-3 py-1 text-sm shadow-sm ring-0 focus:outline focus:outline-zinc-900 placeholder:text-zinc-800/70"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm pl-0.5 font-medium">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm your Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-zinc-900 px-3 py-1 text-sm shadow-sm ring-0 focus:outline focus:outline-zinc-900 placeholder:text-zinc-800/70"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm pl-0.5 font-medium">Location</label>
                <select
                  value={locationId}
                  onChange={(e) => setLocationId(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-zinc-900 px-3 py-1 text-sm shadow-sm ring-0 focus:outline focus:outline-zinc-900 placeholder:text-zinc-800/70"
                >
                  <option value="">Select your location</option>
                  {locations.map((location) => (
                    <option key={location.locationId} value={location.locationId}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>

              {error && <div className="text-red-500 text-xs">{error}</div>}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-white py-2 rounded-md font-medium shadow-md hover:bg-primary/90 transition"
              >
                {isLoading ? "Registering..." : "Register"}
              </button>

              <p className="text-sm text-center mt-2">
                Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login here</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
