import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa"; // Ensure you have react-icons installed

const categories = [
  "All",
  "Appetizers",
  "Main Course",
  "Desserts",
  "Beverages",
];

// Sample menu items
const menuItems = [
  {
    id: 1,
    name: "Chicken Tikka Masala",
    description: "Tender chicken in a creamy tomato sauce.",
    price: 12.99,
    category: "Main Course",
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    description: "Paneer cooked in a rich, buttery gravy.",
    price: 11.99,
    category: "Main Course",
  },
  {
    id: 3,
    name: "Vegetable Biryani",
    description:
      "Aromatic basmati rice cooked with mixed vegetables and spices.",
    price: 10.99,
    category: "Main Course",
  },
  {
    id: 4,
    name: "Samosas",
    description: "Crispy pastries filled with spiced potatoes.",
    price: 5.99,
    category: "Appetizers",
  },
  {
    id: 5,
    name: "Gulab Jamun",
    description: "Sweet fried dough balls soaked in syrup.",
    price: 4.99,
    category: "Desserts",
  },
  {
    id: 6,
    name: "Mango Lassi",
    description: "Creamy yogurt drink with mango.",
    price: 3.99,
    category: "Beverages",
  },
  {
    id: 7,
    name: "Biryani Chicken",
    description: "Spiced chicken with basmati rice.",
    price: 14.99,
    category: "Main Course",
  },
  {
    id: 8,
    name: "Chole Bhature",
    description: "Spicy chickpeas served with fried bread.",
    price: 9.99,
    category: "Main Course",
  },
  {
    id: 9,
    name: "Palak Paneer",
    description: "Cottage cheese in spinach gravy.",
    price: 11.49,
    category: "Main Course",
  },
];

const OrderPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSpiceLevel, setSelectedSpiceLevel] = useState({});
  const [orderItems, setOrderItems] = useState({});
  const [quantity, setQuantity] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);

  const spiceLevels = initializeSpiceLevels();

  function initializeSpiceLevels() {
    const initialLevels = {};
    menuItems.forEach((item) => {
      if (item.category === "Main Course") {
        initialLevels[item.id] = "Less Spicy"; // Default spice level for main courses
      }
    });
    return initialLevels;
  }

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSpiceLevelChange = (id, level) => {
    setSelectedSpiceLevel((prev) => ({
      ...prev,
      [id]: level,
    }));
  };

  const handleAddToOrder = (item) => {
    const spiceLevel = selectedSpiceLevel[item.id] || spiceLevels[item.id]; // Use default if not selected
    const orderItem = {
      ...item,
      spiceLevel,
      quantity: quantity[item.id] || 1,
    };

    setOrderItems((prev) => ({
      ...prev,
      [item.id]: orderItem,
    }));
    alert(`${item.name} added to your order with spice level: ${spiceLevel}`);
  };

  const handleQuantityChange = (id, change) => {
    setQuantity((prev) => {
      const newQuantity = (prev[id] || 1) + change;
      return { ...prev, [id]: newQuantity < 1 ? 1 : newQuantity }; // Prevent going below 1
    });
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-14 relative">
      <h1 className="text-2xl font-bold mb-8 text-center">Order Now</h1>
      <button
        className="absolute top-4 right-4 bg-yellow-500 p-2 rounded-full"
        onClick={toggleCart}
      >
        <FaShoppingCart className="text-white" />
      </button>
      <input
        type="text"
        placeholder="Search for dishes..."
        className="border rounded-lg p-2 w-full mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex overflow-x-auto mb-6 hide-scrollbar flex-nowrap">
        {categories.map((category) => (
          <button
            key={category}
            className={`whitespace-nowrap px-4 py-2 mx-2 rounded-md text-xs text-white transition duration-300 ease-in-out ${
              selectedCategory === category
                ? "bg-blue-500"
                : "bg-green-500 hover:bg-green-600"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="space-y-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="p-4 border rounded-lg shadow-md bg-white"
          >
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600 text-sm">{item.description}</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-lg font-bold">
                ${item.price.toFixed(2)}
              </span>
              <div className="flex items-center">
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded-l text-xs"
                  onClick={() => handleQuantityChange(item.id, -1)}
                >
                  -
                </button>
                <span className="px-3">{quantity[item.id] || 1}</span>
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded-r text-xs"
                  onClick={() => handleQuantityChange(item.id, 1)}
                >
                  +
                </button>
              </div>
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded text-xs"
                onClick={() => handleAddToOrder(item)}
              >
                Add
              </button>
            </div>
            {/* Spice Level Options (only for Main Course) */}
            {item.category === "Main Course" && (
              <div className="mt-2">
                <label className="mr-2 text-sm">Spice Level:</label>
                <select
                  value={selectedSpiceLevel[item.id] || spiceLevels[item.id]}
                  onChange={(e) =>
                    handleSpiceLevelChange(item.id, e.target.value)
                  }
                  className="border rounded-md p-1 text-sm"
                >
                  <option value="Less Spicy">Less Spicy</option>
                  <option value="Spicy">Spicy</option>
                  <option value="Extra Spicy">Extra Spicy</option>
                </select>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg max-w-md w-full relative">
            <h2 className="text-lg font-bold">Your Cart</h2>
            <button
              className="absolute top-2 right-2 text-red-500 text-xl"
              onClick={toggleCart}
            >
              &times; {/* X button to close the cart */}
            </button>
            <ul className="list-disc pl-5">
              {Object.values(orderItems).length === 0 ? (
                <li>No items in the cart</li>
              ) : (
                Object.values(orderItems).map((orderItem, index) => (
                  <li key={index}>
                    {orderItem.name} - {orderItem.spiceLevel} (Quantity:{" "}
                    {orderItem.quantity}) - ${orderItem.price.toFixed(2)}
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderPage;
