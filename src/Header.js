"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import Logo from "./assessts/Logo-1.png"; // Ensure the path to your logo is correct

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center">
              <span className="sr-only">Curry Express</span>
              <img
                alt="Curry Express Logo"
                src={Logo}
                className="h-8 w-auto mr-2"
                loading="lazy" // Lazy loading for optimization
              />
              <span className="text-xl font-bold text-gray-900">
                Curry Express
              </span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} // Toggle menu open/close
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              {!mobileMenuOpen ? (
                <div className="flex flex-col space-y-1">
                  <div className="h-1 w-6 bg-gray-700"></div>
                  <div className="h-1 w-6 bg-gray-700"></div>
                  <div className="h-1 w-6 bg-gray-700"></div>
                </div>
              ) : (
                // Cross icon
                <div className="relative w-6 h-6">
                  <div className="absolute inset-0 bg-gray-700 h-1 w-6 transform rotate-45"></div>
                  <div className="absolute inset-0 bg-gray-700 h-1 w-6 transform -rotate-45"></div>
                </div>
              )}
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            {/* Hide logo and name when menu is open */}
            {!mobileMenuOpen && (
              <div className="flex items-center justify-between mb-6">
                <a href="#" className="-m-1.5 p-1.5 flex items-center">
                  <span className="sr-only">Curry Express</span>
                  <img
                    alt="Curry Express Logo"
                    src={Logo}
                    className="h-8 w-auto mr-2"
                    loading="lazy" // Lazy loading for optimization
                  />
                  <span className="text-xl font-bold text-gray-900">
                    Curry Express
                  </span>
                </a>
              </div>
            )}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 mt-4" // Added margin-top for more space
            >
              <span className="sr-only">Close menu</span>
              <div className="relative w-6 h-6">
                <div className="absolute inset-0 bg-gray-700 h-1 w-6 transform rotate-45"></div>
                <div className="absolute inset-0 bg-gray-700 h-1 w-6 transform -rotate-45"></div>
              </div>
            </button>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
