import React from "react";
import TestimonialSlider from "../TestimonialSlider";
import FeatureSection from "../FeatureSection";

const AboutUs = () => {
    return (
      <>
        <section className="max-w-7xl mb-36 ml-16 mx-auto px-6 py-12 relative">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-8">
            <a href="/" className="hover:text-black">
              Home
            </a>{" "}
            / <span>About Us</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">About Our Store</h2>
              <p className="text-gray-600 leading-relaxed text-base mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>

              {/* Signature / Logo */}
              <img
                src="https://novine-react.envytheme.com/images/signature.png"
                alt="Signature"
                className="h-10"
              />
            </div>

            {/* Right Images */}
            <div className="relative flex justify-center items-end">
              {/* First Image (Base) */}
              <img
                src="https://novine-react.envytheme.com/images/about1.jpg"
                alt="Model 1"
                className="w-[400px] h-[300px] object-contain rounded shadow-md"
              />
              {/* Second Image (Overlay on left-bottom of first image) */}
              <img
                src="https://novine-react.envytheme.com/images/about2.jpg"
                alt="Model 2"
                className="w-[250px] h-[400px] object-contain rounded shadow-md absolute left-0 bottom-0 top-44 -ml-12"
              />
            </div>
          </div>
            </section>
            <TestimonialSlider />
            <FeatureSection/>
      </>
    );
};

export default AboutUs;
