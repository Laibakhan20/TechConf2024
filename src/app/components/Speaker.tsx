import React from 'react'
import Image from 'next/image';

function Speaker ()  {
  
    const speakers = [
        { name: "Melanie Perkin", title: "CEO of Canva",  image: "/ceo2.jpg" },
        { name: "Demis Hassabis", title: "AI Specialist", image: "/specialistai.jpg" },
        { name: "Andreas Antonopoulos", title: "Blockchain Expert", image: "/blockchainexpert.jpg" },
      ];
    
      return (
        <section className="bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 ">Our Speakers</h2>

        {/* Grid Layout for Speakers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="bg-white text-gray-950 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              {/* Speaker Image */}
              <Image
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-56 object-cover"
                width={200}
                height={56}
                quality={100}
              />
              
              {/* Speaker Information */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{speaker.name}</h3>
                <p className="text-gray-800">{speaker.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Speaker


{/* <Image
            src={"/05.png"}
            alt="img1"
            className="w-full h-full"
            width={200}
            height={200}
          /> */}