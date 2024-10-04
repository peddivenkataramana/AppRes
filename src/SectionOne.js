import React from "react";
import Back from "./assessts/bgc3.jpeg"; // Corrected the assets folder name

export default function SectionOne() {
  return (
    <div
      className="relative isolate flex flex-col justify-center items-center px-6 lg:px-8 text-center bg-white mt-20 overflow-hidden"
      style={{
        backgroundImage: `url(${Back})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "70vh",
      }}
    >
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl shadow-lg">
        Experience Authentic Indian Flavors
      </h1>
      <h2 className="mt-6 text-lg leading-8 text-white shadow-md">
        Delightful curries and dishes crafted with passion and tradition.
      </h2>
      <div className="mt-8 flex justify-center gap-x-4">
        <a
          href="#"
          className="rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 transition duration-200"
        >
          Order
        </a>
        <a
          href="#"
          className="rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-100 transition duration-200"
        >
          Menu
        </a>
      </div>

      {/* Custom CSS for text shadow */}
      <style jsx global>{`
        h1,
        h2 {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7); // Added text shadow for better visibility
        }

        /* Media query for responsive adjustments */
        @media (max-width: 1024px) {
          .relative {
            height: 70vh; // Maintain height for iPad
            display: flex;
            justify-content: center; // Center content vertically
            align-items: center; // Center content horizontally
            text-align: center; // Center text
          }
          h1 {
            margin-top: 0; // Remove margin for centered layout
            font-size: 3rem; // Increased size for iPad
          }
          h2 {
            margin-top: 1vh; // Adjust spacing
            font-size: 1.5rem; // Increased size for iPad
          }
          a {
            font-size: 0.875rem; // Smaller button text for mobile/tablet
          }
        }

        @media (min-width: 1025px) {
          h1 {
            margin-top: 10vh; // Increase top margin for laptop
            font-size: 4rem; // Increase size for laptop
          }
          h2 {
            margin-top: 2vh; // Increase spacing for laptop
            font-size: 1.5rem; // Increase size for laptop
          }
          a {
            font-size: 1rem; // Increase button text for laptop
          }
        }
      `}</style>
    </div>
  );
}
