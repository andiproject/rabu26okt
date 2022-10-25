import React from "react";
import { Routes, Route } from "react-router-dom";
import Biodata from "./pages/Biodata";
import Home from "./pages/Home";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/biodata" element={<Biodata />} />
    </Routes>
  );
}
