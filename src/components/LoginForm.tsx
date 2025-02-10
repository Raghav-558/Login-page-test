"use client";
import { GoogleIcon } from "@/utils/icons";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated === "true") {
      router.push("/dashboard");
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const emailSyntax = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    if (!emailSyntax.test(email)) {
      setError("Invalid email format");
      return;
    }

    if (password.length < 6) {
      setError("Password must have a minimum of 6 characters");
      return;
    }

    if (!remember) {
      setError("You must agree to remember for 30 days");
      return;
    }

    localStorage.setItem("isAuthenticated", "true");
    router.push("/dashboard");
  };

  return (
    <div className="py-[30px] max-lg:pt-8">
      <div className="max-w-[1597px] mx-auto lg:px-[27px] max-lg:px-[35px]">
        <div className="flex justify-end lg:gap-[120px] flex-wrap max-lg:justify-center">
          <div className="lg:pt-5">
            <Image
              src="/assets/images/page-logo.webp"
              alt="page-logo"
              width={163}
              height={61.71}
              className="pointer-events-none pb-[138.9px] max-md:pb-[90px]"
            />
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
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-[14px] py-[19.2px] outline-none w-[456px] text-light-gray rounded-lg border border-custom-white max-md:w-[320px] shadow-[0_1px_2px_0_#1018280D]"
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
                  placeholder="••••••••"
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-[14px] py-[19.2px] outline-none w-[456px] text-light-gray rounded-lg border border-custom-white max-md:w-[320px] shadow-[0_1px_2px_0_#1018280D]"
                />
              </div>
              <div className="flex md:items-center justify-between pt-[18px] max-md:flex-col max-md:gap-[14px]">
                <label
                  htmlFor="remember"
                  className="inline-flex items-center gap-3"
                >
                  <input
                    type="checkbox"
                    id="remember"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="!size-5 !bg-white !rounded-md !border !border-solid !border-custom-white"
                  />
                  <span className="inter leading-6 text-very-light-gray">
                    Remember for 30 days
                  </span>
                </label>
                <Link
                  href="/"
                  className="text-custom-blue inter leading-6 text-base"
                >
                  Forgot password
                </Link>
              </div>
              {error && <p className="text-red-500 pt-6">{error}</p>}
              <button
                type="submit"
                className="pt-[9px] pb-[10px] bg-deep-black text-white w-full mt-6 hover:bg-green-500 transition-all duration-300 rounded-[9px]"
              >
                Sign In
              </button>
              <button className="pt-[11px] pb-3 bg-white w-full mt-[6px] rounded-[9px] border border-custom-white flex items-center gap-[10px] justify-center">
                <GoogleIcon />
                <p>Sign in with Google</p>
              </button>
              <p className="inter leading-6 text-base md:text-center pt-[18px] text-very-light-gray">
                Don’t have an account?{" "}
                <Link href="/" className="text-custom-blue">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
          <Image
            src="/assets/images/hero.webp"
            alt=""
            width={759}
            height={899}
            className="pointer-events-none max-lg:pt-[98px]"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
