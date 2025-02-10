"use client";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <div className="bg-off-white">
      <div className="max-w-[1172px] mx-auto px-4">
        <div>
          <form onSubmit={handleSubmit} className="max-w-[456px]">
            <h2 className="font-semibold text-3xl leading-[58.45px] text-custom-black">
              Welcome Back
            </h2>
            <p className="text-sm leading-[30px] text-custom-gray">
              Welcome back! Please enter your details.
            </p>
            <div className="pb-[18px]">
              <label htmlFor="email" className="font-medium leading-5 pb-[6px] block">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-[14px] py-5 outline-none w-[456px]"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="font-medium leading-5 pb-[6px] block"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-[14px] py-5 outline-none w-[456px]"
              />
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button type="submit" className="">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
