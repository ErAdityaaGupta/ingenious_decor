import React from "react";
import  background  from "../assets/3.jpg";

export const HeroSection = () => {
  return (
    <div>
      {/* <img src="../assets/background1.jpg" alt="" /> */}
      <img src={background} alt="" className="w-full object-cover h-background" />
    </div>
  );
};
