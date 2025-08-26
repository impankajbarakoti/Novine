import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
// Import your images
import n1 from "../assets/n1.jpg";
import n2 from "../assets/n2.jpg";
import n3 from "../assets/n3.jpg";
import n4 from "../assets/n4.jpg";
import n5 from "../assets/n5.jpg";

const newsItems = [
  {
    img: n1,
    title: "Styling White Jeans after Labor Day",
    author: "Admin",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: n2,
    title: "New Fall Collection Dropping Soon",
    author: "Admin",
    text: "Explore the latest trends and styles just in time for the new season.",
  },
  {
    img: n3,
    title: "How to Style Accessories",
    author: "Admin",
    text: "Accessorize like a pro with our simple styling tips and tricks.",
  },
  {
    img: n4,
    title: "Behind the Scenes of Our Shoot",
    author: "Admin",
    text: "A sneak peek into how our campaigns come together.",
  },
  {
    img: n5,
    title: "Black Friday Deals Are Coming",
    author: "Admin",
    text: "Get ready to grab amazing discounts on your favorite items.",
  },
];

const NewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 3;

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const canSlide = newsItems.length - cardsPerView + 1;
  const visibleItems = newsItems.slice(
    currentIndex,
    currentIndex + cardsPerView
  );

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-10 bg-white">
     <div className="border bg-white mb-4 px-6 py-4">
                     <h2 className="text-center text-xl font-semibold">
                       <FaStar className="inline-block mr-2 mb-1 text-yellow-500" />
                       Novine News 
                     </h2>
                   </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-500 ease-in-out">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 shadow-md rounded overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-contain"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500 mb-2">
                By <span className="font-semibold">{item.author}</span>
              </p>
              <p className="text-sm text-gray-600 mb-4">{item.text}</p>
              <button className="border border-black px-4 py-2 text-sm hover:bg-black hover:text-white transition">
                READ MORE
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="mt-8 flex justify-center space-x-3">
        {Array.from({ length: canSlide }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-black" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
