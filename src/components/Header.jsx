import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full" >
      {/* Main Navigation */}
      <div className="flex items-center justify-between p-4 border-t ">
        {/* Logo */}
        <div className="md:text-2xl font-bold">Archana RamiKshori Welfare Foundation</div>

        {/* Navigation Container: Donate + Links */}
        <div className="flex items-center gap-6">
          {/* Donate Button */}
          <button className=" md:px-6 md:py-1 mr-2 text-white bg-gray-600 font-bold rounded-lg hover:bg-gray-900 transition">
            Donate Now
          </button>

          {/* Navigation Links (Hidden on small screens) */}
          <ul className="hidden md:flex gap-6 text-lg font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-bold" : "hover:text-blue-600"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-bold" : "hover:text-blue-600"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-bold" : "hover:text-blue-600"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button (Hidden for large screen) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <ul
        className={`${menuOpen ? "flex flex-col gap-6 p-4" : "hidden"
          } md:hidden bg-white shadow-md text-lg font-medium transition-all duration-300`}
      >
        <li>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
