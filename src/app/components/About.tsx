import React from "react";

const About = () => {
  return (
    <section className=" bg-gray-950 text-white py-12 ">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
       {/* Flex container for text and image */}
       <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8 lg:space-x-12">
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Us</h2>
            <p className="text-lg sm:text-xl mb-6">
              Welcome to TechConf 2024, the premier technology conference
              bringing together industry leaders, innovators, and tech
              enthusiasts from around the world. This year's event will dive
              deep into the latest trends in software development, AI, cloud
              computing, and more, offering attendees a unique opportunity to
              learn, network, and collaborate. At TechConf 2024, you'll
              experience insightful keynote presentations from leading experts,
              hands-on workshops, and panel discussions that will inspire new
              ideas and solutions. Whether you're a developer, entrepreneur, or
              IT professional, TechConf 2024 is the perfect platform to enhance
              your knowledge and connect with peers in the ever-evolving tech
              landscape. Join us for an unforgettable experience as we explore
              the future of technology!
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
            src="/image4.jpg"
            alt="image"
              className="w-full h-auto max-h-[75vh] rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
