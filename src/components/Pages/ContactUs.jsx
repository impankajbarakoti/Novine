import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaBehance, 
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaFax,
  FaLocationDot,
  FaStar,
} from "react-icons/fa6";
import LogoRow from "../LogoRow";

const ContactUs = () => {
    return (
      <>
    <div className="text-gray-800 px-4 sm:px-6 lg:px-20 py-10 space-y-10">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500">
        <a href="#" className="hover:underline">
          Home
        </a>{""}
        / <span>Contact Us</span>
      </div>

      {/* Title */}
      <div className="border bg-white mb-4 px-6 py-4">
                      <h2 className="text-center text-xl font-semibold">
                        <FaStar className="inline-block mr-2 mb-1 text-yellow-500" />
                      Contact Us
                      </h2>
                    </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Column */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Here to Help</h3>
          <p className="mb-4 text-sm">
            Have a question? You may find an answer in our FAQs. But you can
            also contact us
            
            .
          </p>

          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaLocationDot className="text-gray-700" />
              <span>Location: 2750 Quadra Street Victoria, Canada</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-gray-700" />
              <span>Call Us: (+123) 456-7898</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-gray-700" />
              <span>Email Us: support@novine.com</span>
            </li>
            <li className="flex items-center gap-2">
              <FaFax className="text-gray-700" />
              <span>Fax: +123456</span>
            </li>
          </ul>

          <div className="mt-6 text-sm">
            <h4 className="font-semibold mb-2">Opening Hours:</h4>
            <p>
              <strong>Monday:</strong> 8AM - 6AM
            </p>
            <p>
              <strong>Tuesday:</strong> 8AM - 6AM
            </p>
            <p>
              <strong>Wednesday:</strong> 8AM - 6AM
            </p>
            <p>
              <strong>Thursday - Friday:</strong> 8AM - 6AM
            </p>
            <p>
              <strong>Sunday:</strong> Closed
            </p>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold text-sm mb-2">Follow Us:</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <FaBehance />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <FaPinterestP />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Drop Us A Line</h3>
          <p className="text-sm mb-6">
            We’re happy to answer any questions you have or provide you with an
            estimate. Just send us a message in the form below with any
            questions you may have.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1">
                NAME (required)*
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border p-2 rounded bg-gray-100 focus:outline-none focus:ring-1 focus:ring-black"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                EMAIL (required)*
              </label>
              <input
                type="email"
                placeholder="Enter your Email Address"
                className="w-full border p-2 rounded bg-gray-100 focus:outline-none focus:ring-1 focus:ring-black"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                PHONE NUMBER (required)*
              </label>
              <input
                type="tel"
                placeholder="Enter your Phone Number"
                className="w-full border p-2 rounded bg-gray-100 focus:outline-none focus:ring-1 focus:ring-black"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                YOUR MESSAGE (required)*
              </label>
              <textarea
                placeholder="Enter your Message"
                rows="5"
                className="w-full border p-2 rounded bg-gray-100 focus:outline-none focus:ring-1 focus:ring-black"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition text-sm"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
          </div>
       
            </div>
            <LogoRow/>
      </>
  );
};

export default ContactUs;
