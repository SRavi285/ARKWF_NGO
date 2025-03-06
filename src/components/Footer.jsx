import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaLinkedin, FaPhone } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold">
            Archana RamKishori Welfare Foundation!
          </h2>
          <p className="mt-2">
            Section 8 License Number: 163714, NITI Aayog Number: UP/2025/05-5470
          </p>
          <p className="mt-2">
            {/* <FaMapMarkerAlt /> */}
            C/o Sri Ram Nararyan, Church Road, Pahalwara, Balrampur, Uttar
            Pradesh, India, 271201.
          </p>
          <p className=" mt-2">CIN U88900UP2025NPL215536</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <NavLink to="/" className="hover:text-violet-400 transition">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/privacy-policy"
                className="hover:text-violet-400 transition"
              >
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/terms-conditions"
                className="hover:text-violet-400 transition"
              >
                Terms & Conditions
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-violet-400 transition">
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-violet-400 transition"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="mt-2 flex items-center gap-2">
            <a
              href="mailto:arkwf.org@gmail.com"
              className="flex items-center gap-2 text-gray-700"
            >
              <FaEnvelope className="text-violet-600" /> arkwf.org@gmail.com
            </a>
          </p>
          <p className="mt-2 flex items-center gap-2">
            <a
              href="tel:+918563856382"
              className="flex items-center gap-2 text-gray-700"
            >
              <FaPhone className="text-violet-600" /> +91 8563856382
            </a>
          </p>

          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com/official.arkwf">
              <FaFacebookSquare
                size={30}
                className="cursor-pointer hover:text-blue-600 transition"
              />
            </a>
            <a href="https://www.instagram.com/official_arkwf">
              <FaInstagramSquare
                size={30}
                className="cursor-pointer hover:text-pink-500 transition"
              />
            </a>
            <a href="#https://www.linkedin.com/company/thearkwf">
              <FaLinkedin
                size={30}
                className="cursor-pointer hover:text-blue-400 transition"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Archana RamKishori Welfare Foundation.
        All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
