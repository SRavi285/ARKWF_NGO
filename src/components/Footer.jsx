import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold">Archana RamKishori Welfare Foundation</h2>
          <p className="text-gray-400 mt-2">
            We are dedicated to making a difference in the lives of those in need through various social initiatives.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <NavLink to="/" className="hover:text-violet-400 transition">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-violet-400 transition">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-violet-400 transition">Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="mt-2 flex items-center gap-2">
            <FaEnvelope /> abc@gmail.com
          </p>
          <p className="mt-2 flex items-center gap-2">
            <FaMapMarkerAlt /> Church Road, Pahalwara, Balrampur, UP,
            India, 271201.
          </p>
          <div className="flex gap-4 mt-4">
            <FaFacebookSquare size={30} className="cursor-pointer hover:text-blue-600 transition" />
            <FaInstagramSquare size={30} className="cursor-pointer hover:text-pink-500 transition" />
            <FaTwitter size={30} className="cursor-pointer hover:text-blue-400 transition" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Archana RamiKshori Welfare Foundation. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
