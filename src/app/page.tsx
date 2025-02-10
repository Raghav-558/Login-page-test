"use client";
import Dummy from "@/components/Dummy";
import LoginForm from "@/components/LoginForm";
import { BrowserRouter as Router } from "react-router-dom";

export default function Home() {
  return (
    <Router>
      {/* <Dummy /> */}
      <LoginForm />
    </Router>
  );
}
