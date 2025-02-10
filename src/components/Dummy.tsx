"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Dummy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("tab1");
  const [searchParam, setSearchParam] = useSearchParams();

  useEffect(() => {
    const urlTab = searchParam.get("tab") || "tab1";
    setActiveTab(urlTab);
  }, [searchParam]);

  const handleClick = (tab: string) => {
    setActiveTab(tab);
    setSearchParam({ tab });
  };

  return (
    <div>
      <div className="py-20 min-w-[1172px] mx-auto px-4 bg-black min-h-screen">
        <ul className="flex bg-black text-white justify-between items-center ">
          <li
            onClick={() => handleClick("tab1")}
            className={`${
              activeTab === "tab1"
                ? "bg-black text-white border border-white"
                : "bg-white"
            } rounded text-3xl text-black px-4 py-2 cursor-pointer`}
          >
            tab1
          </li>
          <li
            onClick={() => handleClick("tab2")}
            className={`${
              activeTab === "tab2"
                ? "bg-black text-white border border-white"
                : "bg-white border-white border"
            } rounded text-3xl text-black px-4 py-2 cursor-pointer`}
          >
            tab2
          </li>
          <li
            onClick={() => handleClick("tab3")}
            className={`${
              activeTab === "tab3"
                ? "bg-black text-white border border-white"
                : "bg-white border-white border"
            } rounded text-3xl text-black px-4 py-2 cursor-pointer`}
          >
            tab3
          </li>
        </ul>
        <div className="flex bg-black text-white w-full justify-center items-center gap-40 pt-10">
          <div className={`${activeTab === "tab1" ? "" : "hidden"} text-xl`}>
            <h1>Tab-1</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
              similique harum vitae laudantium excepturi sit tenetur animi
              debitis laboriosam nulla.
            </p>
          </div>
          <div className={`${activeTab === "tab2" ? "" : "hidden"} text-xl`}>
            <h1>Tab-2</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
              dolore odio omnis quod neque ut necessitatibus quos hic iste,
              autem ullam aspernatur rerum quae amet iusto pariatur mollitia eum
              non?
            </p>
          </div>
          <div className={`${activeTab === "tab3" ? "" : "hidden"} text-xl`}>
            <h1>Tab-3</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dummy;
