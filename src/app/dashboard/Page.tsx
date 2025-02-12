import React, { Suspense } from "react";
import Dashboard from "./[button]/page";

const Page = () => {
  return (
    <Suspense>
      <Dashboard/>
    </Suspense>
  );
};

export default Page;
