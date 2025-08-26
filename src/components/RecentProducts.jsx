import React from "react";
import { FaEye, FaHeart, FaSyncAlt, FaStar } from "react-icons/fa";
import r1 from "../assets/r1.jpg";
import r2 from "../assets/r2.jpg";
import r3 from "../assets/r3.jpg";
import r4 from "../assets/r4.jpg";
import r5 from "../assets/r5.jpg";
import r6 from "../assets/r6.jpg";

const products = [
  {
    name: "Dericka Accent Chair",
    price: "$220",
    image: r1,
    rating: 4,
  },
  {
    name: "Soletren Oversized Chair",
    price: "$350",
    image: r2,
    rating: 4,
  },
  {
    name: "Flair Chair",
    price: "$110",
    image: r3,
    rating: 4,
  },
  {
    name: "Dorsten Oversized Chair",
    price: "$330",
    image: r4,
    rating: 4,
  },
  {
    name: "Linon Blair Chair",
    price: "$450",
    image: r5,
    rating: 4,
  },
  {
    name: "Modern Alt Blue Arm Chair",
    price: "$299",
    image: r6,
    rating: 4,
  },
];

const RecentProducts = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-16">
      <div className="border bg-white mb-4 px-6 py-4">
               <h2 className="text-center text-xl font-semibold">
                 <FaStar className="inline-block mr-2 mb-1 text-yellow-500" />
                Recent Products
               </h2>
             </div>
         
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="border bg-white hover:shadow-lg transition duration-300 relative group"
          >
            {/* Product Image */}
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[300px] object-contain bg-white"
              />

              {/* Hover Actions Sliding from Right */}
              <div className="absolute top-4 right-[-50px] flex flex-col space-y-2 transition-all duration-300 group-hover:right-4">
                <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                  <FaEye />
                </button>
                <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                  <FaHeart />
                </button>
                <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                  <FaSyncAlt />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="text-center py-4 px-3">
              <h3 className="text-sm font-medium text-gray-700 mb-1">
                {product.name}
              </h3>
              <p className="text-base font-bold text-black">{product.price}</p>

              {/* Stars */}
              <div className="flex justify-center items-center text-yellow-500 mt-2 mb-4">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < product.rating ? "" : "text-gray-300"}
                    />
                  ))}
              </div>

              {/* Add to Cart Button */}
              <button className="w-full text-sm font-semibold py-2 border hover:bg-black hover:text-white transition">
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProducts;
