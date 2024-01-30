import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Mass from "./mass/Mass";
import Length from "./length/Length";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Mass" element={<Mass />}/>
        <Route path="/Length" element={<Length />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;