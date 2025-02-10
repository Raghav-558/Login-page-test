'use client'
import React, { useEffect, useState } from "react";

const Calendly = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch(new URLSearchParams(window.location.search).get("search") || "");
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4">
      <p className="text-xl mb-8">
        Search term: <span className="font-semibold">{search}</span>
      </p>
      <div
        className="calendly-inline-widget w-full sm:w-[500px] h-[650px] border rounded-lg shadow-lg"
        data-url="https://calendly.com/jangraraghav9211/new-meeting"
      ></div>
    </div>
  );
};

export default Calendly;
