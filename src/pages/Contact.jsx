import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaFacebookSquare, FaInstagramSquare, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import heroImage from "../assets/contact.jpg";
import { FaLinkedin } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    emailjs
    //   .send(
    //     "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
    //     "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
    //     formData,
    //     "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
    //   )
    //   .then(
    //     (response) => {
    //       console.log("Email sent successfully:", response);
    //       toast.success("Message sent successfully!");
    //       setFormData({ name: "", email: "", message: "" }); // Reset form
    //     },
    //     (error) => {
    //       console.error("Failed to send email:", error);
    //       toast.error("Failed to send message. Please try again.");
    //     }
    //   );
  };

  return (
    <div className="w-full bg-gray-100">
      <ToastContainer />
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

            <a href="mailto:arkwf.org@gmail.com" className="flex items-center gap-2 text-gray-700"><FaEnvelope className="text-violet-600" /> arkwf.org@gmail.com</a>

            <a href="tel:+918563856382" className="flex items-center gap-2 text-gray-700">
              <FaPhone className="text-violet-600" /> +91 8563856382
            </a>
            <p className="flex items-center gap-2 text-gray-700">
              <FaMapMarkerAlt className="text-violet-600" /> C/o Sri Ram Nararyan, Church Road, Pahalwara, Balrampur, Uttar Pradesh,
              India, 271201.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a href="https://www.facebook.com/official.arkwf"><FaFacebookSquare size={30} className="cursor-pointer hover:text-blue-600 transition" /></a>
            <a href="https://www.instagram.com/official_arkwf">
              <FaInstagramSquare size={30} className="cursor-pointer hover:text-pink-500 transition" />
            </a>

            <a href="#https://www.linkedin.com/company/thearkwf">
              <FaLinkedin size={30} className="cursor-pointer hover:text-blue-400 transition" />
            </a>

          </div>
        </div>

        {/* Contact Form */}
        <div className="shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                rows="4"
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
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
