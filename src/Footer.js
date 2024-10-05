import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "./assessts/Logo-1.png"; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Logo and Name */}
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <img src={Logo} alt="Curry Express Logo" className="h-16 mb-2" />
          <h1 className="text-3xl font-bold mb-2">Curry Express</h1>

          {/* Social Links */}
          <div className="flex space-x-4 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl hover:text-blue-500" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl hover:text-pink-500" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-2xl hover:text-blue-400" />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row mb-4">
            <div className="flex space-x-4">
              <a href="#" className="hover:underline">
                Home
              </a>
              <a href="#" className="hover:underline">
                Menu
              </a>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </div>
          </div>
        </div>

        {/* Restaurant Hours */}
        <div className="text-center mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">Restaurant Hours</h2>
          <p>Friday: 11 AM–8 PM</p>
          <p>Saturday: 11 AM–8 PM</p>
          <p>Sunday: 12–5 PM</p>
          <p>Monday: 11 AM–8 PM</p>
          <p>Tuesday: 11 AM–8 PM</p>
          <p>Wednesday: 11 AM–8 PM</p>
          <p>Thursday: 11 AM–8 PM</p>
        </div>

        {/* Contact Us */}
        <div className="text-center mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <p>Phone: +1 217-542-5114</p>
          <p>Email: info@curryexpress.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
