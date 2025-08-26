import React from "react";
import promo1 from "../assets/promo1.jpg"
import promo2 from "../assets/promo2.jpg";
import promo3 from "../assets/promo3.jpg";
import promo4 from "../assets/promo4.jpg";
const banners = [
  {
    image: promo1 , // Red chair
    label: "Don’t Miss Today",
    discount: "50% OFF",
    button: "SHOP NOW",
  },
  {
    image: promo2, // White room
    label: "New Collection",
    discount: "40% OFF",
    button: "SHOP NOW",
  },
  {
    image: promo3, // Gray chair
    label: "Your Looks",
    discount: "30% OFF",
    button: "SHOP NOW",
  },
  {
    image:  promo4 , // Blue chair
    label: "Winter Spring!",
    discount: "20% OFF",
    button: "SHOP NOW",
  },
];

const PromoBanners = () => {
  return (
    <div className="py-8 px-4 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {banners.map((banner, index) => (
          <div
            key={index}
            className="relative rounded overflow-hidden shadow-sm group"
          >
            <img
              src={banner.image}
              alt={banner.label}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-end px-6 text-white">
              <h4 className="text-sm md:text-base font-semibold">
                {banner.label}
              </h4>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {banner.discount}
              </h2>
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-4 py-2 rounded">
                {banner.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoBanners;



