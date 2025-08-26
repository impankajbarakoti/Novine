import React from "react";

// Image imports
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const LogoRow = () => {
  return (
    <div className="bg-gray-100 py-6 px-4">
      <div
        className="
          flex 
          sm:flex-wrap sm:justify-center sm:gap-24 
          overflow-x-auto no-scrollbar
          space-x-6 sm:space-x-0
        "
      >
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            className="h-12 sm:h-16 md:h-20 lg:h-24 object-contain flex-shrink-0"
            style={{ minWidth: "80px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoRow;
