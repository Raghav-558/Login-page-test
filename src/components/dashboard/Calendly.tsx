"use client";
import React from "react";
import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4">
      <p className="text-xl mb-8">Calendly</p>
      <div className="sm:w-[500px] h-[650px] border rounded-lg shadow-lg">
        <InlineWidget url="https://calendly.com/jangraraghav9211/new-meeting" />
      </div>
    </div>
  );
};

export default Calendly;
