import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gray-100">
      {/* Main Navigation */}
      <div className="flex items-center justify-between py-2 px-4 md:px-8 border-b ">
        {/* logo */}
        <div className="text-center md:text-left space-y-1">
          <h1 className="text-lg md:text-2xl lg:text-3xl font-bold">
            Archana RamKishori Welfare Foundation!
          </h1>
          <span className="text-xs md:text-sm lg:text-base text-gray-500 block">
            Connecting humanity, inspiring people!
          </span>
        </div>

        <div className="flex items-center gap-6">
          {/* Donate Button */}
          <button className="hidden md:block px-6 py-3 text-white bg-gray-600 font-bold rounded-lg hover:bg-gray-900 transition">
            Donate Now
          </button>

          {/* Navigation Links (Hidden on small screens) */}
          <ul className="hidden md:flex gap-6 text-lg font-medium">
            {[
              "Home",
              "Privacy Policy",
              "Terms & Conditions",
              "About Us",
              "Contact",
            ].map((item, index) => (
              <li key={index}>
                <NavLink
                  to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className={({ isActive }) =>
                    isActive ? "text-blue-600 font-bold" : "hover:text-blue-600"
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button (Hidden for large screen) */}
        <div className="md:hidden ml-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <ul
        className={`${
          menuOpen ? "flex flex-col gap-6  " : "hidden"
        } md:hidden bg-white shadow-md text-lg font-medium transition-all duration-300`}
      >
        {[
          "Home",
          "Privacy Policy",
          "Terms & Conditions",
          "About Us",
          "Contact",
        ].map((item, index) => (
          <li key={index} className="p-2 border-b ">
            <NavLink
              to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setMenuOpen(false)}
            >
              <p>{item}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
