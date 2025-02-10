"use client";
import { GoogleIcon } from "@/utils/icons";
import { useState } from "react";
import Image from "next/image";


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }

    if (password.length < 6) {
      setError("Password must have a minimum of 6 characters");
      return;
    }

    localStorage.setItem("isAuthenticated", "true");
    window.location.href = "/dashboard";
  };

  return (
    <div className="py-[30px]">
      <div className="max-w-[1172px] mx-auto px-4">
        <div>
          <Image src="/assets/images/page-logo.webp" alt="page-logo" width={163}
          height={61.71} className="pointer-events-none pb-[138.9px]"/>
          <form onSubmit={handleSubmit} className="max-w-[456px]">
            <h2 className="font-semibold text-3xl leading-[58.45px] text-custom-black">
              Welcome Back
            </h2>
            <p className="text-sm leading-[30px] text-custom-gray pb-[31px]">
              Welcome back! Please enter your details.
            </p>
            <div className="pb-[18px]">
              <label
                htmlFor="email"
                className="font-medium leading-5 pb-[6px] block text-deep-black"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-[14px] py-5 outline-none w-[456px] text-light-gray rounded-lg border border-custom-white"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="font-medium leading-5 pb-[6px] block text-deep-black"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-[14px] py-5 outline-none w-[456px] text-light-gray rounded-lg border border-custom-white"
              />
            </div>
            <div className="flex items-center justify-between pt-[18px]">
              <label
                htmlFor="remember"
                className="inline-flex items-center gap-3"
              >
                <input
                  type="checkbox"
                  id="remember"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="form-checkbox rounded text-indigo-600"
                />
                <span className="inter leading-6">Remember for 30 days</span>
              </label>
              <p className="text-custom-blue inter leading-6 text-base">
                Forgot password
              </p>
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              type="submit"
              className="pt-[9px] pb-[10px] bg-deep-black text-white w-full mt-6 hover:bg-green-500 transition-all duration-300 rounded-[9px]"
            >
              Sing In
            </button>
            <div className="pt-[11px] pb-3 bg-white w-full mt-[6px] rounded-[9px] border border-custom-white flex items-center gap-[10px] justify-center">
              <GoogleIcon />
              <p>Sign in with Goolge</p>
            </div>
            <p className="inter leading-6 text-base text-center pt-[18px] text-very-light-gray">
              Don’t have an account? <span className="text-custom-blue"> Sign up</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
