"use client";
import { GoogleIcon } from "@/utils/icons";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const form = {
    email: "",
    password: "",
    checkbox: false,
  };

  const [formData, setFormData] = useState(form);
  const [error, setError] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);
  const emailSyntax = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated === "true") {
      router.push("/dashboard");
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(true);
    setCheckboxError(!formData.checkbox);

    // Check for valid email, password, and checkbox validation
    if (
      emailSyntax.test(formData.email) && // Valid email
      formData.password.length >= 6 && // Password length must be at least 6 characters
      formData.checkbox // Checkbox must be checked
    ) {
      setFormData(form); // Reset form
      setError(false);
      setCheckboxError(false);
      localStorage.setItem("isAuthenticated", "true");
      router.push("/dashboard");
    }
  };

  return (
    <div className="py-[30px] max-lg:pt-8 max-lg:pb-[96px] min-h-max">
      <div className="max-w-[1597px] mx-auto lg:px-[27px] max-lg:px-[35px]">
        <div className="flex justify-end lg:gap-[120px] flex-wrap max-2xl:justify-center ">
          <div className="lg:pt-5">
            <Image
              src="/assets/images/page-logo.webp"
              alt="page-logo"
              width={163}
              height={61.71}
              className="pointer-events-none pb-[138.9px] max-md:pb-[90px]"
            />
            <h2 className="font-semibold text-3xl leading-[58.45px] text-custom-black">
              Welcome Back
            </h2>
            <p className="text-sm leading-[30px] text-custom-gray pb-[31px]">
              Welcome back! Please enter your details.
            </p>
            <form onSubmit={handleSubmit} noValidate className="max-w-[456px]">
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
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Email"
                  className="px-[14px] py-[19.2px] outline-none w-[456px] text-light-gray rounded-lg border border-custom-white max-md:w-[320px] shadow-[0_1px_2px_0_#1018280D]"
                />
                {error && formData.email.length === 0 ? (
                  <p className="text-red-600 pt-2">Email is required</p>
                ) : !emailSyntax.test(formData.email) &&
                  formData.email.length > 0 ? (
                  <p className="text-red-600 pt-2">Enter valid email</p>
                ) : (
                  ""
                )}
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
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="••••••••"
                  className="px-[14px] py-[19.2px] outline-none w-[456px] text-light-gray rounded-lg border border-custom-white max-md:w-[320px] shadow-[0_1px_2px_0_#1018280D]"
                />
                {error && formData.password.length === 0 ? (
                  <p className="text-red-600 pt-2">Password is required</p>
                ) : formData.password.length < 6 &&
                  formData.password.length > 0 ? (
                  <p className="text-red-600 pt-2">
                    Password must be 6 characters
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="flex md:items-center justify-between pt-[18px] max-md:flex-col max-md:gap-[14px]">
                <label
                  htmlFor="remember"
                  className="inline-flex items-center gap-3"
                >
                  <input
                    type="checkbox"
                    id="remember"
                    checked={formData.checkbox}
                    onChange={(e) =>
                      setFormData({ ...formData, checkbox: e.target.checked })
                    }
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
              {checkboxError && (
                <p className="text-red-600 pt-2">You must agree to the terms</p>
              )}
              <button
                type="submit"
                className="pt-[9px] pb-[10px] bg-deep-black text-white w-full mt-6 hover:bg-green-500 transition-all duration-300 rounded-[9px]"
              >
                Sign In
              </button>
            </form>
            <div className="pt-[11px] pb-3 cursor-pointer bg-white w-full mt-[6px] rounded-[9px] border border-custom-white flex items-center gap-[10px] justify-center hover:bg-gray-200 transition-all duration-300">
              <GoogleIcon />
              <p>Sign in with Google</p>
            </div>
            <p className="inter leading-6 text-base md:text-center pt-[18px] text-very-light-gray">
              Don’t have an account?{" "}
              <Link href="/" className="text-custom-blue">
                Sign up
              </Link>
            </p>
          </div>
          <Image
            src="/assets/images/hero.webp"
            alt=""
            width={759}
            height={899}
            className="pointer-events-none max-lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
