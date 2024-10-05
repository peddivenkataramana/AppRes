"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import Logo from "./assessts/Logo-1.png"; // Ensure the correct path

const navigation = [
  { name: "Menu", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Location", href: "#" },
  { name: "Contact Us", href: "#" },
];

export default function Header() {
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
          {!mobileMenuOpen && (
            <a href="#" className="flex items-center">
              <img
                alt="Curry Express Logo"
                src={Logo}
                className="h-12 w-auto"
                loading="lazy"
              />
              <span className="text-2xl font-bold text-gray-900 ml-2">
                Curry Xpress
              </span>
            </a>
          )}
        </div>
        <nav className="hidden lg:flex lg:gap-x-8 ml-auto">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-lg font-semibold text-gray-900 transition duration-200 hover:text-blue-500`}
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`text-gray-900 focus:outline-none`}
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
          <div className="flex items-center justify-between mb-4">
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
          <div className="flex flex-col items-center space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-gray-900 hover:bg-gray-200 rounded-full px-4 py-2 transition duration-300 ease-in-out transform hover:scale-105"
              >
                {item.name}
              </a>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
}
