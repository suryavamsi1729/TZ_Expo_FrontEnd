import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import applogo from "../assets/applogo.svg";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const sanitizedEmail = email.trim();
    const sanitizedPassword = password.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (sanitizedEmail === "" || sanitizedPassword === "") {
      setError("All fields are required");
      setIsLoading(false);
      return;
    }

    if (!emailRegex.test(sanitizedEmail)) {
      setError("Invalid email address");
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="relative plane-background-auth min-w-screen min-h-screen flex flex-col items-center justify-start md:py-28 max-md:px-2">
      <div className="w-full h-auto flex flex-row justify-center items-center gap-5 mb-10">
          <img className="w-12 h-12 object-cover" src={applogo} alt="logo"/>
          <p className="text-zinc-900 font-bold text-4xl">SHWAS</p>
      </div>
      <div className="absolute auth-glash-bacground left-4 -top-20 rotate-45 w-[360px] h-[180px] opacity-50"></div>
      <div className="absolute auth-glash-bacground left-[1024px] top-[550px] rotate-20 w-[200px] h-[110px] opacity-38"></div>
      <div className="absolute auth-glash-bacground left-[880px] top-[220px] rotate-25 w-[160px] h-[160px] opacity-40"></div>
      <div className="absolute auth-glash-bacground left-[60px] top-[440px] -rotate-15 w-[190px] h-[90px] opacity-32"></div>
      <div className="absolute auth-glash-bacground left-[190px] bottom-[80px] rotate-3 w-[156px] h-[87px] opacity-30"></div>
      <div className="absolute auth-glash-bacground left-[360px] top-[500px] rotate-39 w-[290px] h-[128px] opacity-20"></div>
      <div className="absolute auth-glash-bacground left-[360px] top-[120px] rotate-2 w-[229px] h-[130px] opacity-20"></div>
      <div className="absolute auth-glash-bacground left-[30px] top-[200px] rotate-0 w-[220px] h-[90px] opacity-20"></div>
      <div className="rounded-lg border auth-glash-bacground mx-auto max-w-sm">
      
        <div className="flex flex-col space-y-1.5 p-8">
          
          <div className="font-semibold tracking-tight text-2xl mb-2.5">
            Login
          </div>
          <div className="text-sm text-zinc-900 font-semibold">
            Enter your credentials below to login to your account
          </div>
        </div>

        <div className="px-6 pb-8">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label
                  className="text-sm pl-0.5 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="flex h-9 w-full rounded-md border border-zinc-950/80 bg-transparent px-3 py-1 text-sm text-zinc-900 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-900/90 disabled:cursor-not-allowed disabled:opacity-50"
                  id="email"
                  name="email"
                  placeholder="Enter your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <label
                  className="text-sm pl-0.5 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="flex h-9 w-full rounded-md border border-zinc-950/80 bg-transparent px-3 py-1 text-sm text-zinc-900 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-900/90 disabled:cursor-not-allowed disabled:opacity-50"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <p className="my-1 text-xs pb-0">
                Don't Have An Account ?{" "}
                <Link to="/signup" className="hover:underline">
                  Register Here
                </Link>
              </p>

              {error && (
                <div className="text-red-500 text-[0.8rem] mb-[-8px] pl-0.5">
                  {error}
                </div>
              )}

              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Logging in...." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
