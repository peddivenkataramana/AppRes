import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "./assessts/Logo1.png"; // Ensure the correct path
import { Link } from "react-router-dom"; // Import Link for routing

const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll to top
    });
  };

  return (
    <footer id="footer" className="bg-gray-800 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-8">
        {/* Left Side: Logo and Name */}
        <div className="flex flex-col items-center mb-8 md:mb-0 md:w-1/2">
          <img src={Logo} alt="Curry Express Logo" className="h-16 mb-0" />{" "}
          {/* No margin below logo */}
          <h1 className="text-4xl font-bold tracking-tight mt-1">
            Curry Xpress
          </h1>{" "}
          {/* Restaurant Name */}
          <p className="text-center text-md mt-1">
            Where Flavor Meets Tradition!
          </p>{" "}
          {/* Description */}
          <div className="flex space-x-4 mt-2">
            <a
              href="https://www.facebook.com/people/Curry-Xpress/100092756291418/?mibextid=eQY6cl"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 transform hover:scale-110 hover:text-blue-500"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/curry__xpress/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 transform hover:scale-110 hover:text-pink-500"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 transform hover:scale-110 hover:text-blue-400"
            >
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Right Side: Restaurant Hours and Contact Us */}
        <div className="flex flex-col items-center mb-8 md:mb-0 md:w-1/2">
          <h2 className="text-lg font-semibold text-center">
            Restaurant Hours
          </h2>
          <p className="mt-1 text-center">Mon - Sat: 11 AM – 8 PM</p>
          <p className="text-center">Sun: 12 PM – 5 PM</p>
          <h2 className="text-lg font-semibold mt-6 text-center">Contact Us</h2>
          <p className="mt-1 text-center">Phone: +1 217-542-5114</p>
          <p className="text-center">
            Email:{" "}
            <a
              href="mailto:info@curryexpress.com"
              className="hover:underline hover:text-gray-100"
            >
              info@curryexpress.com
            </a>
          </p>
        </div>
      </div>

      {/* Centered Navigation Links Below */}
      <div className="mt-8 text-center">
        <nav className="flex justify-center space-x-6">
          <a
            href="#home" // This will scroll to the top of the page (Home)
            onClick={scrollToTop} // Use the custom function to scroll
            className="hover:underline hover:text-gray-100"
          >
            Home
          </a>
          <a
            href="#aboutus" // This will scroll to the About Us section on the same page
            className="hover:underline hover:text-gray-100"
          >
            About Us
          </a>
          <Link
            to="/menu" // This links to the menu page directly
            className="hover:underline hover:text-gray-100"
          >
            Menu
          </Link>
        </nav>
      </div>

      {/* Centered Footer Text */}
      <div className="border-t border-gray-700 mt-4 pt-4 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Curry Xpress. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
