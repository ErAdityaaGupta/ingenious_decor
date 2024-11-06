import React from "react";
import image1 from "../assets/3.jpg";
import image2 from "../assets/4.jpg";
import image3 from "../assets/1.jpg";
import image4 from "../assets/2.jpg";
import image5 from "../assets/5.jpg";
import image6 from "../assets/6.jpg";
import image7 from "../assets/8.jpg";
import image8 from "../assets/7.jpg";
import image9 from "../assets/9.jpg";

const images = [image1, image2, image3, image4, image5, image6, image7, image8]; 


const Portfolio = () => {
  return (
    <div className="p-6">
      <div
        className="h-portfolio bg-cover bg-center flex items-center justify-center "
        style={{ backgroundImage: `url(${image9})` }}
      >
        <h2 className="text-5xl font-bold text-white pb-20">Featured Work</h2>
      </div>
      <div className="flex flex-wrap justify-center m-16 pt-10">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Instagram Image ${index + 1}`}
            className="w-1/2 p-4 h-portfolio"
          />
        ))}
      </div>
      {/* Add content or images related to your portfolio */}
    </div>
  );
};

export default Portfolio;
