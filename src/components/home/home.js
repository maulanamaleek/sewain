import React from "react";
import Slider from "./slider";
import CalcBtn from "./CalcBtn";
import Keunggulan from "./Keunggulan";
import Langkah from "./Langkah";
import Footer from "./Footer";

export default function home() {
  return (
    <div>
      <Slider />
      <CalcBtn />
      <Keunggulan />
      <Langkah />
      <Footer />
    </div>
  );
}
