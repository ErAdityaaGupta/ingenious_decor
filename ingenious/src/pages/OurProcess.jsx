import React from "react";
import image9 from "../assets/9.jpg";

const Process = () => {
  return (
    <div className="p-8">
      <div
        className="h-portfolio bg-cover bg-center flex items-center justify-center shadow-md mb-8 rounded-lg"
        style={{ backgroundImage: `url(${image9})` }}
      >
        <h2 className="text-6xl font-bold text-white pb-20">Our Process</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* First Section */}
        <div className="md:w-1/2 p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-6xl font-semibold mb-6">Our Process</h1>
          <p className="text-xl leading-relaxed text-gray-700">
            {/* At Ingenious Decor Aesthetic, our dedicated team of designers and
            project specialists brings over 15 years of experience in creating
            personalized interiors across Delhi, Gurgaon, Noida, and surrounding
            areas. We recently completed the interior design for villas in Rise
            Resort Residences, Greater Noida West. Our philosophy combines
            beauty with functionality, focusing on tailored solutions that
            reflect each client’s vision. Through a collaborative process, from
            consultation to installation, we ensure a smooth experience,
            including weekly reviews to stay aligned with our clients’
            expectations and timelines. */}
            Ingenious Decor Aesthetic is a team of dedicated designers and
            project specialists with over 15 years of experience in crafting
            unique interiors. They serve clients across Delhi, Gurgaon, Noida,
            and other nearby areas, including high-profile projects like
            multiple villas at Rise Resort Residences. The team values design
            accessibility, balancing beauty with practicality to create
            comfortable, personalized spaces that reflect each client’s vision.
            Their collaborative approach involves close client partnerships from
            the first consultation through execution, with regular progress
            reviews ensuring alignment with expectations. By handling all
            project details, from material selection to installation oversight,
            Ingenious Decor Aesthetic provides clients with a seamless,
            transparent experience. Their commitment to frequent feedback
            sessions ensures satisfaction at each stage and fosters designs that
            resonate on both functional and emotional levels, making each home a
            true reflection of its inhabitants.
          </p>
        </div>

        {/* Second Section */}
        <div className="md:w-1/2 space-y-8">
          <div className="bg-lightcream p-6 rounded-lg shadow-lg">
            <h2 className="text-5xl font-bold mb-4">Our Background</h2>
            <p className="text-xl leading-relaxed text-gray-700">
              Hey There! Team Ingenious Decor Aesthetic is passionate team of
              innovative designers & delivery team to take care of end to end
              journey of your dream home. Our 15+ years experienced team have
              delivered interior of many dream homes across Delhi, Gurgaon,
              Noida, Meerut, Ghaziabad and many near by cities. In our latest
              endeavor we have delivered interior of multiple villas within Rise
              Resort Residences, Greater Noida West. See below our "Inspiration
              Gallery" for actual videos and images of our exciting deliveries.{" "}
            </p>
          </div>

          <div className="bg-lightcream p-6 rounded-lg shadow-lg">
            <h2 className="text-5xl font-bold mb-4">Our Design Philosophy</h2>
            <p className="text-xl leading-relaxed text-gray-700">
              At INGENIOUS DECOR AESTHETIC, we believe that great design should
              be accessible to everyone. We strive to create spaces that are not
              only aesthetically pleasing, but also functional and comfortable.
              We work closely with our clients to understand their needs and
              preferences, and use our expertise to bring their vision to life.
            </p>
          </div>

          {/* <div className="bg-lightcream p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              We take a collaborative approach to design, working closely with
              our clients to ensure that every detail is just right. From the
              initial consultation to the final installation, we are there every
              step of the way to ensure a seamless and stress-free experience.
              We review delivery every week with our clients to get their
              constant feedback for staying aligned with their expectation and
              schedule.{" "}
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Process;
