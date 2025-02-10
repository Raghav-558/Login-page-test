"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { QUESTION_LIST } from "@/utils/helper";
import Calendly from "./Calendly";
import QuestionOne from "./QuestionOne";
import ImageUpload from "./ImageUpload";

const Dashboard = () => {
  const [open, setOpen] = useState(0);
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  console.log(page);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    router.push("/");
  };

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      router.push("/");
    }
  }, [router]);

  const handleButtonClick = (index: any) => {
    setOpen(open === index ? false : index);
  };

  return (
    <div className="flex min-h-screen w-full pl-[300px] relative">
      <div className="flex flex-col py-10 px-5 bg-black text-white w-[300px] fixed top-0 left-0 min-h-screen justify-between ">
        <div className="flex flex-col gap-2">
          <h1 className="mb-3 text-center text-4xl font-semibold">Dashboard</h1>
          {QUESTION_LIST.map((item, index) => (
            <Link
              href={`/dashboard?page=${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => handleButtonClick(index)}
              key={index}
              className="py-2 px-3 rounded-lg bg-white text-black cursor-pointer hover:bg-white/50 transition-all duration-300 hover:text-black"
            >
              {item}
            </Link>
          ))}
        </div>
        <button
          onClick={handleLogout}
          className="bg-white py-2 px-3 hover:bg-white/30 hover:text-white transition-all duration-300 ease-linear rounded-lg text-black"
        >
          Logout
        </button>
      </div>
      <div className="w-full pt-20">
        <div className="bg-blue-400 min-h-20 py-5 px-3 w-full fixed top-0">
          <h1 className="text-white font-semibold font-inter text-3xl">
            {" "}
            My Dashboard
          </h1>
        </div>
        {page === "button-1" ? (
          <QuestionOne />
        ) : page === "button-2" ? (
          <Calendly />
        ) : page === "button-3" ? (
          <p><ImageUpload/></p>
        ) : null}
      </div>
    </div>
  );
};

export default Dashboard;
