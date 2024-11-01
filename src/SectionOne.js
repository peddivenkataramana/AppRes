import React from "react";
import Back from "./assessts/bgc3.jpeg"; // Make sure the path is correct
import { Link } from "react-router-dom";

const SectionOne = () => {
  return (
    <section className="m-0 p-0">
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
          <Link
            to="/order" // This links to the Order page
            className="rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 transition duration-200"
          >
            Order
          </Link>
          <Link
            to="#"
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-100 transition duration-200"
          >
            Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
