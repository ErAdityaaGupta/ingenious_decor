import React from 'react'
import background from '../assets/3.jpg'

const HeroSection = () => {
  return (
    <div>
      {/* <img src="../assets/background1.jpg" alt="" /> */}
      <img
        src={background}
        alt=""
        className="w-full object-cover h-background"
      />
    </div>
  );
}

export default HeroSection