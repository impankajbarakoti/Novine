import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-2xl font-bold text-black">Novine</div>

        {/* Center: Navigation Links */}
        <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 text-sm md:text-base font-medium text-black">
          <li>
            <Link to="/" className="hover:text-stone-500 transition uppercase">
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-stone-500 transition uppercase"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-stone-500 transition uppercase"
            >
              CONTACT
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="hover:text-stone-500 transition uppercase"
            >
              BLOG
            </Link>
          </li>
        </ul>

        {/* Right (desktop only) */}
        <div className="hidden md:flex items-center space-x-6 text-black">
          <button
            className="hover:text-stone-500transition"
            aria-label="Search"
          >
            <FaSearch size={18} />
          </button>

          <Link to="/" className="font-medium hover:text-stone-500 transition">
            LOGIN
          </Link>

          <div className="relative">
            <Link
              to="/"
              className="flex items-center hover:text-stone-500 transition"
            >
              <FaShoppingCart size={22} />
              <span className="ml-1 font-semibold">CART</span>
            </Link>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </div>
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-4 text-black text-base font-medium">
            <li>
              <Link
                to="/"
                className="block hover:text-orange-500"
                onClick={toggleMenu}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block hover:text-orange-500"
                onClick={toggleMenu}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block hover:text-orange-500"
                onClick={toggleMenu}
              >
                CONTACT
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="block hover:text-orange-500"
                onClick={toggleMenu}
              >
                BLOG
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="block hover:text-orange-500"
                onClick={toggleMenu}
              >
                LOGIN
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="block hover:text-orange-500"
                onClick={toggleMenu}
              >
                CART (3)
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
