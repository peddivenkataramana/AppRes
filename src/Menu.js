import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  // Menu categories, dishes, and their prices
  const menuCategories = [
    {
      category: "Curries",
      dishes: [
        { name: "Chicken Curry", price: "$12.99" },
        { name: "Lamb Rogan Josh", price: "$14.99" },
        { name: "Butter Chicken", price: "$13.99" },
        { name: "Vegetable Curry", price: "$10.99" },
      ],
    },
    {
      category: "Biryani",
      dishes: [
        { name: "Vegetable Biryani", price: "$11.99" },
        { name: "Chicken Biryani", price: "$13.99" },
        { name: "Lamb Biryani", price: "$15.99" },
        { name: "Paneer Biryani", price: "$12.99" },
      ],
    },
    {
      category: "Tandoori",
      dishes: [
        { name: "Paneer Tikka", price: "$9.99" },
        { name: "Tandoori Chicken", price: "$13.99" },
        { name: "Tandoori Lamb Chops", price: "$17.99" },
      ],
    },
    {
      category: "Appetizers",
      dishes: [
        { name: "Samosa", price: "$4.99" },
        { name: "Onion Bhaji", price: "$5.99" },
        { name: "Aloo Tikki", price: "$4.49" },
        { name: "Pakora", price: "$6.99" },
      ],
    },
    {
      category: "Bread",
      dishes: [
        { name: "Naan", price: "$2.99" },
        { name: "Garlic Naan", price: "$3.49" },
        { name: "Roti", price: "$2.49" },
        { name: "Paratha", price: "$3.99" },
      ],
    },
    {
      category: "Desserts",
      dishes: [
        { name: "Gulab Jamun", price: "$3.49" },
        { name: "Ras Malai", price: "$4.49" },
        { name: "Kheer", price: "$3.99" },
        { name: "Jalebi", price: "$3.99" },
      ],
    },
    {
      category: "Drinks",
      dishes: [
        { name: "Mango Lassi", price: "$3.99" },
        { name: "Sweet Lassi", price: "$3.49" },
        { name: "Masala Chai", price: "$2.49" },
      ],
    },
  ];

  return (
    <div>
      {/* Menu Section */}
      <section className="p-8 mt-14">
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          Our Menu
        </h1>
        <div className="mt-6 text-center">
          <p className="text-lg text-gray-700">
            Explore our authentic Indian dishes!
          </p>
        </div>

        <div className="mt-8 space-y-8">
          {menuCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900 text-center">
                {category.category}
              </h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.dishes.map((dish, idx) => (
                  <div
                    key={idx}
                    className="border p-4 rounded-lg shadow-md hover:shadow-xl transition duration-200"
                  >
                    <p className="text-lg font-semibold text-gray-900">
                      {dish.name}
                    </p>
                    <p className="text-gray-600 text-sm">{dish.price}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Order Now Button (Placed at the Bottom of the Menu) */}
        <div className="flex justify-center mt-10">
          <Link
            to="/order"
            className="rounded-md bg-orange-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-orange-500 transition duration-200"
          >
            Order Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Menu;
