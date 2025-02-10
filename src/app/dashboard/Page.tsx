import Dashboard from "@/components/dashboard/Dashboard";
import React, { Suspense } from "react";

const Page = () => {
  return (
    <Suspense>
      <Dashboard />
    </Suspense>
  );
};

export default Page;
