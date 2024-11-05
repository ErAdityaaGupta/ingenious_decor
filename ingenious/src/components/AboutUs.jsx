// import React from 'react'
// import background from '../assets/4.jpg'

// const AboutUs = () => {
//   return (
//     <div className="flex justify-center">
//       <div className="w-1/2">
//         <h1 className="text-3xl font-bold">About Us</h1>
//         <p className="text-lg ">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam Lorem
//           ipsum dolor sit amet, consectetur adipiscing elit. Nullam Lorem ipsum
//           dolor sit amet, consectetur adipiscing elit. Nullam Lorem ipsum dolor
//           sit amet, consectetur adipiscing elit. Nullam Lorem ipsum dolor sit
//           amet, consectetur adipiscing elit. Nullam Lorem ipsum dolor sit amet,
//           consectetur adipiscing elit. Nullam Lorem ipsum dolor sit amet,
//           consectetur adipiscing elit. Nullam Lorem ipsum dolor sit amet,
//           consectetur adipiscing elit. Nullam Lorem ipsum dolor sit amet,
//           consectetur adipiscing elit. Nullam
//         </p>
//       </div>

//       <div>
//         <img src={background} alt="" className="flex justify-end" />
//       </div>
//     </div>
//   );
// }

// export default AboutUs

import React from "react";
import background from "../assets/4.jpg";

const AboutUs = () => {
  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        {" "}
        {/* Left half for text */}
        <div className="text-6xl font-bold mt-40 ml-16 mr-36">
          <p>Welcome To Ingenious</p>
          <p className="mt-10">Decor Aesthetic</p>
        </div>
        <div className="text-xl pt-32 pl-16 pr-72 font-playfair ">
          <p className="leading-relaxed">
            At Ingenious Decor Aesthetic, we are a passionate team of innovative
            designers and delivery specialists dedicated to guiding you through
            the entire journey of creating your dream home. With over 15 years
            of experience, our team has transformed numerous residences across
            Delhi, Gurgaon, Noida, Meerut, Ghaziabad, and many nearby cities.
            Our latest achievement includes the successful interior design of
            multiple villas within the Rise Resort Residences in Greater Noida
            West.
          </p>
          <br />
          <p className="leading-relaxed">
            We believe that exceptional design should be accessible to everyone.
            Our philosophy centers on creating spaces that are not only visually
            stunning but also functional and comfortable. We collaborate closely
            with our clients to understand their needs and preferences, using
            our expertise to bring their vision to life.
          </p>
          <br />
          <p className="leading-relaxed">
            Our design process is highly collaborative; we work hand-in-hand
            with our clients to ensure that every detail is meticulously
            crafted. From the initial consultation to the final installation, we
            are committed to providing a seamless and stress-free experience. We
            conduct weekly reviews with our clients to gather feedback and stay
            aligned with their expectations and project timelines.
          </p>
        </div>
      </div>

      <div className="w-1/2">
        {" "}
        {/* Right half for the image */}
        <img
          src={background}
          alt="About Us"
          className="w-full h-full object-cover"
        />{" "}
        {/* Image takes full height and width */}
      </div>
    </div>
  );
};

export default AboutUs;
