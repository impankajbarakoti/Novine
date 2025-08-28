import React from "react";
import herobg from "../assets/herobg.jpg";

const HeroSection = () => {
  return (
    <div
      className="w-full h-[100vh] bg-cover bg-center flex items-center justify-center md:justify-start"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      {/* Text content */}
      <div className="w-full max-w-7xl px-6 md:px-12">
        <div className="max-w-md text-center md:text-left text-black bg-white/70 md:bg-transparent p-4 md:p-0 rounded md:rounded-none">
          <p className="text-sm md:text-base text-gray-700 mb-2">
            Summer Collections
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold italic text-gray-900 mb-4">
            New Arrivals!
          </h1>
          <p className="text-base sm:text-lg font-semibold mb-6">
            Take 20% Off ‘Sale Must-Haves'
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 font-semibold rounded">
            SHOP NOW!
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default HeroSection;
