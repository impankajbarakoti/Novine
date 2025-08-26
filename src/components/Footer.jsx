import React, { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFax,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  // Show button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700 relative">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Novine</h2>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-black">
                Home
              </a>
            </li>
            
              <li>
                <a href="/about" className="hover:text-black">
                  About Us
                </a>
              </li>
           

            <li>
              <a href="/contact" className="hover:text-black">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">INFORMATION</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="blog" className="hover:text-black">
                Blog
              </a>
            </li>
            <li>
              <a href="/blog/1" className="hover:text-black">
                Blogs Deatails
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1" />
              <span>
                2750 Quadra Street
                <br />
                Victoria, Canada
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt /> <span>(+123) 456-7898</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope /> <span>support@novine.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FaFax /> <span>+123456</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4 px-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <p className="text-sm text-gray-500">
          © Novine is Proudly Owned by{" "}
          <a
            href="https://envytheme.com"
            className="text-blue-600 hover:underline"
          >
            EnvyTheme.com
          </a>
        </p>

        {/* Payment Icons */}
        <div className="flex gap-3 mt-4 mr-20 md:mt-0">
          <img
            src="https://novine-react.envytheme.com/images/visa.png"
            alt="Visa"
            className="h-6"
          />
          <img
            src="https://novine-react.envytheme.com/images/mastercard.png"
            alt="Mastercard"
            className="h-6"
          />
          <img
            src="https://novine-react.envytheme.com/images/mastercard2.png"
            alt="Discover"
            className="h-6"
          />
          <img
            src="https://novine-react.envytheme.com/images/visa2.png"
            alt="Amex"
            className="h-6"
          />
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-black text-white p-3 rounded shadow-lg hover:bg-gray-800 transition"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
