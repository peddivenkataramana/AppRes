"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./assessts/Logo1.png";

const navigation = [
  { name: "About Us", href: "#aboutus", scrollToCenter: true },
  { name: "Location", href: "#location", scrollToCenter: true },
  { name: "Contact Us", href: "#footer", scrollToCenter: true }, // Added Contact Us
];

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      setHeaderVisible(lastScrollY > currentScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();

    if (href.startsWith("/")) {
      navigate(href);
    } else if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }

    setMobileMenuOpen(false); // Close the mobile menu after click
  };

  const renderNavigation = () => {
    if (location.pathname === "/order") {
      return (
        <>
          <a
            href="/AppRes"
            onClick={(e) => handleLinkClick(e, "/AppRes")}
            className="text-lg font-semibold text-gray-900 transition duration-200 hover:text-blue-500"
          >
            Home
          </a>
          <div className="text-lg font-semibold text-gray-900">
            <p>For further assistance:</p>
            <a
              href="tel:+1234567890"
              className="text-blue-500 transition duration-200 hover:text-blue-700"
            >
              Phone No: +1 234 567 890
            </a>
          </div>
        </>
      );
    } else if (location.pathname === "/menu") {
      return (
        <>
          <a
            href="/order"
            onClick={(e) => handleLinkClick(e, "/order")}
            className="text-lg font-semibold text-gray-900 transition duration-200 hover:text-blue-500"
          >
            Order Now
          </a>
          <a
            href="/AppRes"
            onClick={(e) => handleLinkClick(e, "/AppRes")}
            className="text-lg font-semibold text-gray-900 transition duration-200 hover:text-blue-500"
          >
            Home
          </a>
          <div className="text-lg font-semibold text-gray-900">
            <p>For further assistance:</p>
            <a
              href="tel:+1234567890"
              className="text-blue-500 transition duration-200 hover:text-blue-700"
            >
              Phone No: +1 234 567 890
            </a>
          </div>
        </>
      );
    } else if (location.pathname === "/AppRes") {
      return (
        <>
          <a
            href="/order"
            onClick={(e) => handleLinkClick(e, "/order")}
            className="text-lg font-semibold text-gray-900 transition duration-200 hover:text-blue-500"
          >
            Order Now
          </a>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="text-lg font-semibold text-gray-900 transition duration-200 hover:text-blue-500"
            >
              {item.name}
            </a>
          ))}
        </>
      );
    } else {
      return navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          onClick={(e) => handleLinkClick(e, item.href)}
          className="text-lg font-semibold text-gray-900 transition duration-200 hover:text-blue-500"
        >
          {item.name}
        </a>
      ));
    }
  };

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        headerVisible
          ? scrolled
            ? "bg-white shadow-lg"
            : "bg-transparent"
          : "transform -translate-y-full"
      }`}
    >
      <header className="flex items-center justify-between p-4 lg:p-4 lg:pt-4 lg:pb-1">
        <div className="flex items-center">
          <Link to="/AppRes" className="flex items-center">
            <img
              alt="Curry Express Logo"
              src={Logo}
              className="h-12 w-auto"
              loading="lazy"
            />
            <span className="text-2xl font-bold text-gray-900 ml-2">
              Curry Xpress
            </span>
          </Link>
        </div>

        <nav className="hidden lg:flex lg:gap-x-8 ml-auto">
          {renderNavigation()}
        </nav>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="text-gray-900 focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </header>

      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-black opacity-75" />
        <DialogPanel className="fixed inset-0 z-50 bg-white p-6 flex flex-col transition-transform transform-gpu">
          <div className="flex justify-end mb-4 ">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-900 focus:outline-none"
            >
              <span className="sr-only">Close menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center space-y-6">
            {renderNavigation()}
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
}

export default Header;
