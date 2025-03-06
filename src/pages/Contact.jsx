import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import heroImage from "../assets/contact.jpg";

const Contact = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-64 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${heroImage})` }}>
        <h1 className="text-4xl md:text-5xl font-bold text-white bg-black bg-opacity-50 px-6 py-3 rounded-lg">
          Contact Us
        </h1>
      </div>

      {/* Contact Information & Form */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Contact Details */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600 mt-2">
            We'd love to hear from you! Whether you have a question or want to contribute to our cause, reach out to us.
          </p>

          <div className="mt-4 space-y-4">

            <a href="mailto:abc@gmail.com" className="flex items-center gap-2 text-gray-700"><FaEnvelope className="text-violet-600" /> abc@gmail.com</a>

            <a href="tel:+911234567890" className="flex items-center gap-2 text-gray-700">
              <FaPhone className="text-violet-600" /> +91 12345 67890
            </a>
            <p className="flex items-center gap-2 text-gray-700">
              <FaMapMarkerAlt className="text-violet-600" /> Church Road, Pahalwara, Balrampur, UP, India, 271201.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a href="#"><FaFacebookSquare size={30} className="cursor-pointer hover:text-blue-600 transition" /></a>
            <a href="https://www.instagram.com/official_arkwf">
              <FaInstagramSquare size={30} className="cursor-pointer hover:text-pink-500 transition" />
            </a>

            <a href="#">
              <FaTwitter size={30} className="cursor-pointer hover:text-blue-400 transition" />
            </a>

          </div>
        </div>

        {/* Contact Form */}
        <div className="shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800">Send Us a Message</h2>
          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-violet-600 text-white py-3 px-6 rounded-lg hover:bg-violet-700 transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
