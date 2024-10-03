import React from "react";
import Back from "./assessts/backdrop.jpg";

export default function SectionOne() {
  return (
    <div
      className="relative isolate px-6 pt-32 lg:px-8 text-center bg-white mt-20"
      style={{
        backgroundImage: `url(${Back})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Experience Authentic Indian Flavors
      </h1>
      <h2 className="mt-4 text-lg leading-8 text-gray-600">
        Delightful curries and dishes crafted with passion and tradition.
      </h2>
      <div className="mt-10 flex justify-center gap-x-6">
        <a
          href="#"
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition duration-200 glow"
        >
          Order
        </a>
        <a
          href="#"
          className="rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition duration-200"
        >
          Menu
        </a>
      </div>

      {/* Custom CSS for glowing animation */}
      <style jsx global>{`
        @keyframes glow {
          0% {
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.7);
          }
          50% {
            box-shadow: 0 0 20px rgba(0, 255, 123, 1);
          }
          100% {
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.7);
          }
        }
        .glow {
          animation: glow 1.5s infinite alternate;
        }
      `}</style>
    </div>
  );
}
