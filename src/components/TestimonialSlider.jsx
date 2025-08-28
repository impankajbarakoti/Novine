


import React, { useState } from "react";
import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.jpg";
import testimonial from "../assets/testimonial.jpg";

const testimonials = [
  {
    img: client1,
    text: `Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis..`,
    name: "Jason Statham",
    designation: "Founder at Brand",
  },
  {
    img: client2,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis...`,
    name: "Scarlett Johansson",
    designation: "Marketing Head",
  },
  {
    img: client3,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elitQuis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...`,
    name: "Chris Evans",
    designation: "CEO at Company",
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(false);

  const handlePaginationClick = (index) => {
    if (index === current) return;

    setAnimate(true);

    // Wait for animation to complete before updating current
    setTimeout(() => {
      setCurrent(index);
      setAnimate(false);
    }, 300); // Match this to your animation duration
  };

  return (
    <div
      className="relative text-white flex flex-col items-center py-7 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${testimonial})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content wrapper */}
      <div
        className="relative z-10 flex flex-col items-center max-w-3xl text-center transition-transform duration-300 ease-in-out transform"
        style={{ transform: animate ? "translateX(-10px)" : "translateX(0)" }}
      >
        {/* Client Image */}
        <img
          src={testimonials[current].img}
          alt={testimonials[current].name}
          className="w-20 h-20 rounded-full border-4 border-white mt-16 mb-6 object-cover transition-opacity duration-300"
        />

        {/* Testimonial Text */}
        <p className="italic leading-relaxed mb-8 transition-opacity duration-300">
          {testimonials[current].text}
        </p>

        {/* Name & Designation */}
        <h3 className="text-xl font-semibold">{testimonials[current].name}</h3>
        <p className="text-sm mb-8">{testimonials[current].designation}</p>

        {/* Pagination Dots */}
        <div className="flex space-x-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handlePaginationClick(index)}
              className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                current === index ? "bg-white" : "bg-white/40"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
