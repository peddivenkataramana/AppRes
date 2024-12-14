import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa"; // Ensure you have react-icons installed

const categories = [
  "All",
  "Appetizers",
  "Platter",
  "Veg Spl",
  "Goat Spl",
"Lamb Spl",
"Biryani Spl",
"Shrimp Spl",
"Biryani Spl",
"Drinks",  
"Kids Spl",
"Breads",
"Chutney (Indian Sauce)",
"Dessert",
  "Drinks",
];

// Sample menu items
const menuItems = [
  {
    id: 1,
    name: "Samosa",
    description: "Tender chicken in a creamy tomato sauce.",
    price: 2.49,
    category: "Appetizers",
  },
  {
    id: 2,
    name: "Samosa Chaat",
    description: "Paneer cooked in a rich, buttery gravy.",
    price: 8.99,
    category: "Appetizers",
  },
  {
    id: 3,
    name: "Mix Vegetable Pakora",
    description:
      "Aromatic basmati rice cooked with mixed vegetables and spices.",
    price: ,
    category: "Appetizers",
  },
  {
    id: 4,
    name: "Panner Pakora",
    description: "Crispy pastries filled with spiced potatoes.",
    price: 10.99,
    category: "Appetizers",
  },
  {
    id: 5,
    name: "Aloo Tikki Chat",
    description: "Sweet fried dough balls soaked in syrup.",
    price: 8.99,
    category: "Appetizers",
  },
  {
    id: 6,
    name: "Pani Puri",
    description: "Creamy yogurt drink with mango.",
    price: ,
    category: "Appetizers",
  },
  {
    id: 7,
    name: "Chicken Wings (Fry)",
    description: "Creamy yogurt drink with mango.",
    price: 10.99,
    category: "Appetizers",
  },{
    id: 8,
    name: "Chicken Pakora",
    description: "Creamy yogurt drink with mango.",
    price: 11.99,
    category: "Appetizers",
  },{
    id: 9,
    name: "Chicken 65",
    description: "Creamy yogurt drink with mango.",
    price: 15.99 ,
    category: "Appetizers",
  },{
    id: 10,
    name: "Fish Pakora",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: "Appetizers",
  },
{
    id: 11,
    name: "Vegetable Korma",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: "Platter",
  },
{
    id: 12,
    name: "Butter Chicken",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: "Platter",
  },{
    id: 13,
    name: "Panner Makhani",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: "Platter",
  },{
    id: 14,
    name: "Chicken Korma",
    description: "Creamy yogurt drink with mango.",
    price: 3.99,
    category: "Platter",
  },{
    id: 14,
    name: "Chicken Korma",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: "Platter",
  },{
    id: 15,
    name: "Chana Masala",
    description: "Creamy yogurt drink with mango.",
    price: 14.99,
    category: "Platter",
  },{
    id: 16,
    name: "Chicken Curry",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: "Platter",
  },{
    id: 17,
    name: "Dal Tadka",
    description: "Creamy yogurt drink with mango.",
    price: 14.99,
    category: "Platter",
  },{
    id: 18,
    name: "Aloo Mutter",
    description: "Creamy yogurt drink with mango.",
    price: 14.99,
    category: Veg Spl,
  },{
    id: 19,
    name: "Panner Makhani",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: Veg Spl,
  },{
    id: 20,
    name: "Kadhai Panner",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: Veg Spl,
  },{
    id: 21,
    name: "Palak Panner",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: Veg Spl,
  },{
    id: 22,
    name: "Mutter Panner",
    description: "Creamy yogurt drink with mango.",
    price: 14.99,
    category: Veg Spl,
  },{
    id: 23,
    name: "Chilli Panner",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: Veg Spl,
  },{
    id: 24,
    name: "Panner Tikka Masala",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: Veg Spl,
  },{
    id: 25,
    name: "Vegetable Korma",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: Veg Spl,
  },{
    id: 26,
    name: "Mix Vegetable",
    description: "Creamy yogurt drink with mango.",
    price: 14.99,
    category: Veg Spl,
  },{
    id: 27,
    name: "Malai Kofta",
    description: "Creamy yogurt drink with mango.",
    price: 14.99,
    category: Veg Spl,
  },{
    id: 28,
    name: "Kadhi Pakoda",
    description: "Creamy yogurt drink with mango.",
    price: 14.99,
    category: Veg Spl,
  },{
    id: 29,
    name: "Chana Masala",
    description: "Creamy yogurt drink with mango.",
    price: 14.99,
    category: Veg Spl,
  },{
    id: 30,
    name: "Puri Chole",
    description: "Creamy yogurt drink with mango.",
    price: 12.99,
    category: Veg Spl,
  },{
    id: 31,
    name: "Goat Curry",
    description: "Creamy yogurt drink with mango.",
    price: 18.99,
    category: "Goat Spl",
  },{
    id: 32,
    name: "Goat Vindaloo",
    description: "Creamy yogurt drink with mango.",
    price: 18.99,
    category: "Goat Spl",
  },{
    id: 33,
    name: "Goat Rogan Josh",
    description: "Creamy yogurt drink with mango.",
    price: 18.99,
    category: "Goat Spl",
  },{
    id: 34,
    name: "Kadai Goat",
    description: "Creamy yogurt drink with mango.",
    price: 18.99,
    category: "Goat Spl",
  },{
    id: 35,
    name: "Bhuna Goat",
    description: "Creamy yogurt drink with mango.",
    price: 18.99,
    category: "Goat Spl",
  },{
    id: 36,
    name: "Lamb Curry",
    description: "Creamy yogurt drink with mango.",
    price: 18.99,
    category: "Lamb Spl",
  },{
    id: 37,
    name: "Lamb Vindaloo",
    description: "Creamy yogurt drink with mango.",
    price: 18.99,
    category:  "Lamb Spl",
  },{
    id: 38,
    name: "Lamb Rogan Josh",
    description: "Creamy yogurt drink with mango.",
    price: 18.99,
    category:  "Lamb Spl",
  },{
    id: 39,
    name: "Lamb Saag",
    description: "Creamy yogurt drink with mango.",
    price: 18.99,
    category:  "Lamb Spl",
  },{
    id: 40,
    name: "Butter Chicken",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: "Biryani Spl",
  },{
    id: 41,
    name: "Chicken Tikka Masala",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: "Biryani Spl",
  },
{
    id: 42,
    name: "Chicken Curry",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: "Biryani Spl",
  },
{
    id: 43,
    name: "Chicken Vindaloo",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: "Chicken Spl",
  },
{
    id: 44,
    name: "Chicken Rogan Josh",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: "Chicken Spl",
  },
{
    id: 45,
    name: "Chicken Korma",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: "Chicken Spl",
  },
{
    id: 46,
    name: "Kadai Chicken",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: "Chicken Spl",
  },
{
    id: 47,
    name: "Saag Chicken",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: "Chicken Spl",
  },
{
    id: 48,
    name: "Chilli Chicken",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: "Chicken Spl",
  },
{
    id: 49,
    name: "Tandoori Chicken",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: "Chicken Spl",
  },{
    id: 50,
    name: "Shrimp Curry",
    description: "Creamy yogurt drink with mango.",
    price: 18.99,
    category: "Shrimp Spl",
  },{
    id: 51,
    name: "Shrimp Tikka Masala",
    description: "Creamy yogurt drink with mango.",
    price: 18.99,
    category: "Shrimp Spl",
  },{
    id: 52,
    name: "Shrimp Chilly",
    description: "Creamy yogurt drink with mango.",
    price: 18.99,
    category: "Shrimp Spl",
  },{
    id: 53,
    name: "Vegetable Biryani",
    description: "Creamy yogurt drink with mango.",
    price: 14.99,
    category: "Biryani Spl",
  },{
    id: 54,
    name: "Chicken Biryani",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: "Biryani Spl",
  },{
    id: 55,
    name: "Goat Biryani",
    description: "Creamy yogurt drink with mango.",
    price: 18.99,
    category: "Biryani Spl",
  },{
    id: 56,
    name: "Lamb Biryani",
    description: "Creamy yogurt drink with mango.",
    price: 18.99,
    category: "Biryani Spl",
  },{
    id: 57,
    name: "Shrimp Biryani",
    description: "Creamy yogurt drink with mango.",
    price: 18.99,
    category: "Biryani Spl",
  },{
    id: 58,
    name: "Chicken Over Rice",
    description: "Creamy yogurt drink with mango.",
    price: 14.99,
    category: "Curry Xpress Spl",
  },{
    id: 59,
    name: "Rice And 1 Entree & Drink",
    description: "Creamy yogurt drink with mango.",
    price: 14.99,
    category: "Kids Spl",
  },{
    id: 60,
    name: "Plain Naan",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: "Breads",
  },{
    id: 61,
    name: "Garlic Naan",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: "Breads",
  },{
    id: 62,
    name: "Tawa Roti",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: "Breads",
  },{
    id: 63,
    name: "Plain Prantha",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: "Breads",
  },{
    id: 64,
    name: "Aloo Prantha",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: "Breads",
  },{
    id: 65,
    name: "Paneer Prantha",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: "Breads",
  },{
    id: 66,
    name: "Mango Chutney",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: "Chutney",
  },{
    id: 67,
    name: "Gulab Jamun",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: "Dessert",
  },{
    id: 68,
    name: "Ras Mala",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: "Dessert",
  },{
    id: 69,
    name: "Mango Lassi",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: "Drinks",
  },{
    id: 70,
    name: "Thums Up, Limca",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: "Drinks",
  },{
    id: 71,
    name: "Soda",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: "Drinks",
  },{
    id: 72,
    name: "Masala Tea",
    description: "Creamy yogurt drink with mango.",
    price: 15.99,
    category: "Drinks",
  },



];

const OrderPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSpiceLevel, setSelectedSpiceLevel] = useState({});
  const [orderItems, setOrderItems] = useState({});
  const [quantity, setQuantity] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAddConfirmationVisible, setIsAddConfirmationVisible] =
    useState(false);
  const [isCheckoutStep, setIsCheckoutStep] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [orderStatus, setOrderStatus] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false); // For "Item added to cart" popup
  const [isOrderPlaced, setIsOrderPlaced] = useState(false); // Track if the order was placed
  const [cartEmptyMessage, setCartEmptyMessage] = useState(""); // Message for empty cart

  const spiceLevels = initializeSpiceLevels();
  const taxRate = 0.1; // 10% tax rate

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
    const spiceLevel = selectedSpiceLevel[item.id] || spiceLevels[item.id];
    const orderItem = {
      ...item,
      spiceLevel,
      quantity: quantity[item.id] || 1,
    };

    setOrderItems((prev) => ({
      ...prev,
      [item.id]: orderItem,
    }));

    setQuantity((prev) => ({ ...prev, [item.id]: 1 }));

    setIsAddConfirmationVisible(true);
    setIsPopupVisible(true); // Show the item added popup

    // Reset the cart empty message when items are added
    if (cartEmptyMessage) {
      setCartEmptyMessage("");
    }
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);

    // Reset the cart empty message when the cart is opened
    if (cartEmptyMessage) {
      setCartEmptyMessage("");
    }
  };

  const handleCheckout = () => {
    if (Object.keys(orderItems).length === 0) {
      setCartEmptyMessage("Your cart is empty. Please add items to the cart.");
    } else {
      setCartEmptyMessage(""); // Clear the message if cart is not empty
      setIsCheckoutStep(true); // Proceed to the checkout step
    }
  };

  const handleQuantityChange = (id, change) => {
    setQuantity((prev) => {
      const newQuantity = (prev[id] || 1) + change;
      return { ...prev, [id]: newQuantity < 1 ? 1 : newQuantity };
    });
  };
  const handleRemoveFromCart = (id) => {
    const updatedOrderItems = { ...orderItems };
    delete updatedOrderItems[id]; // Remove the item with the provided ID
    setOrderItems(updatedOrderItems); // Update the state with the new cart
  };

  const handleSubmitOrder = async () => {
    if (!customerName || !customerPhone) {
      alert("Customer name and phone number are required.");
      return;
    }
    const orderId = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const items = Object.values(orderItems);
    const totalPrice = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    const taxAmount = totalPrice * taxRate;
    const finalTotal = totalPrice + taxAmount;

    const orderData = {
      orderId,
      customerName,
      customerPhone,
      items,
      totalPrice: finalTotal, // Including tax
      taxAmount,
    };

    try {
      const response = await fetch(
        "https://appresbackend.onrender.com/AppRes/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }
      );

      const responseData = await response.json();

      if (response.ok) {
        // Order placed successfully
        setOrderStatus("Thank you for ordering!");
        setIsOrderPlaced(true);
        setOrderItems({}); // Clear cart items
        setQuantity({}); // Reset quantity
        setCustomerName(""); // Clear customer name
        setCustomerPhone(""); // Clear customer phone
        setIsCartOpen(false); // Close the cart modal
        setIsPopupVisible(false); // Hide the "Item added to cart" popup
        setIsCheckoutStep(false); // Close the checkout modal
      } else {
        setOrderStatus(`Error placing order: ${responseData.message}`);
      }
    } catch (error) {
      console.error("Network error:", error);
      setOrderStatus("There was an error with the network.");
    }
  };

  // Calculate tax for each item
  const calculateTaxForItem = (item) => {
    return item.price * taxRate;
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-14 relative">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
        Order Now
      </h1>
      <input
        type="text"
        placeholder="Search for dishes..."
        className="border rounded-lg p-3 w-full mb-4 text-gray-700"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex overflow-x-auto mb-6 hide-scrollbar flex-nowrap">
        {categories.map((category) => (
          <button
            key={category}
            className={`whitespace-nowrap px-4 py-2 mx-2 rounded-md text-xs font-semibold text-white transition duration-300 ease-in-out ${
              selectedCategory === category
                ? "bg-teal-600"
                : "bg-teal-500 hover:bg-teal-600"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="space-y-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="p-4 border rounded-lg shadow-md bg-white transition-all duration-300 hover:shadow-lg"
          >
            <h2 className="text-lg font-semibold text-gray-900">{item.name}</h2>
            <p className="text-gray-600 text-sm">{item.description}</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-lg font-bold text-teal-600">
                ${item.price.toFixed(2)}
              </span>
              <div className="flex items-center space-x-3">
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-full text-sm transition duration-300 hover:bg-red-600"
                  onClick={() => handleQuantityChange(item.id, -1)}
                >
                  -
                </button>
                <span className="text-lg">{quantity[item.id] || 1}</span>
                <button
                  className="bg-green-500 text-white px-3 py-1 rounded-full text-sm transition duration-300 hover:bg-green-600"
                  onClick={() => handleQuantityChange(item.id, 1)}
                >
                  +
                </button>
              </div>
              <button
                className="bg-teal-600 text-white px-4 py-1 rounded-md text-sm transition duration-300 hover:bg-teal-700"
                onClick={() => handleAddToOrder(item)}
              >
                Add
              </button>
            </div>
            {/* Spice Level Options (only for Main Course) */}
            {item.category === "Main Course" && (
              <div className="mt-4">
                <label className="mr-2 text-sm text-gray-700">
                  Spice Level:
                </label>
                <select
                  value={selectedSpiceLevel[item.id] || spiceLevels[item.id]}
                  onChange={(e) =>
                    handleSpiceLevelChange(item.id, e.target.value)
                  }
                  className="border rounded-md p-2 text-sm text-gray-700"
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

      {/* Cart Button (Floating) */}
      <button
        onClick={toggleCart}
        className="fixed bottom-14 right-10 bg-teal-600 text-white rounded-full p-4 shadow-lg z-50 transition-all duration-300 hover:bg-teal-700"
      >
        <FaShoppingCart size={24} />
      </button>
      {/* Cart Modal */}
      {isCartOpen && !isCheckoutStep && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative overflow-y-auto h-3/4">
            <h2 className="text-lg font-bold mb-4 text-gray-900">Your Cart</h2>
            <button
              className="absolute top-2 right-2 text-red-500 text-2xl"
              onClick={toggleCart}
            >
              &times;
            </button>
            <div className="space-y-4 overflow-auto max-h-64">
              {Object.values(orderItems).map((item) => {
                const itemTotal = item.price * item.quantity;
                const itemTax = calculateTaxForItem(item);
                return (
                  <div
                    key={item.id}
                    className="flex justify-between items-center"
                  >
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p>{item.spiceLevel}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-teal-600 font-bold">
                        ${itemTotal.toFixed(2)} (Tax: ${itemTax.toFixed(2)})
                      </span>
                      <button
                        className="text-red-500"
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Universal Bill */}
            <div className="mt-6 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-bold">Subtotal: </span>
                <span className="text-teal-600 text-lg font-semibold">
                  $
                  {Object.values(orderItems)
                    .reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )
                    .toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold">Tax: </span>
                <span className="text-teal-600 text-lg font-semibold">
                  $
                  {Object.values(orderItems)
                    .reduce(
                      (total, item) => total + calculateTaxForItem(item),
                      0
                    )
                    .toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center font-bold">
                <span>Total: </span>
                <span className="text-teal-600 text-lg font-semibold">
                  $
                  {(
                    Object.values(orderItems).reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    ) +
                    Object.values(orderItems).reduce(
                      (total, item) => total + calculateTaxForItem(item),
                      0
                    )
                  ).toFixed(2)}
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <button
                onClick={handleCheckout}
                className="bg-teal-600 text-white px-6 py-2 rounded-lg transition duration-300 hover:bg-teal-700"
              >
                Proceed to Checkout
              </button>
              <button
                onClick={toggleCart}
                className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg transition duration-300 hover:bg-gray-400"
              >
                Close Cart
              </button>
            </div>
            {cartEmptyMessage && (
              <div className="text-red-500 mt-2 text-center font-semibold">
                {cartEmptyMessage}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {isCheckoutStep && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
            <h2 className="text-lg font-bold mb-4 text-gray-900">Checkout</h2>
            {cartEmptyMessage && (
              <div className="bg-red-500 text-white p-3 rounded-lg mb-4">
                {cartEmptyMessage}
              </div>
            )}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Customer Name"
                className="border rounded-lg p-3 w-full text-gray-700"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Customer Phone"
                className="border rounded-lg p-3 w-full text-gray-700"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
              />
              <div className="mt-6 flex justify-between items-center">
                <button
                  onClick={handleSubmitOrder}
                  className="bg-teal-600 text-white px-6 py-2 rounded-lg transition duration-300 hover:bg-teal-700"
                >
                  Submit Order
                </button>
                <button
                  onClick={() => {
                    setIsCheckoutStep(false);
                    setIsCartOpen(true);
                  }}
                  className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg transition duration-300 hover:bg-gray-400"
                >
                  Back to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Item Added Popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-80">
            <h2 className="text-lg font-semibold text-gray-900 text-center">
              Item Added to Cart!
            </h2>
            <div className="mt-4 flex justify-center space-x-4">
              <button
                onClick={() => {
                  setIsPopupVisible(false); // Hide popup after clicking OK
                }}
                className="bg-teal-600 text-white px-6 py-2 rounded-lg transition duration-300 hover:bg-teal-700"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Order Confirmation */}
      {orderStatus && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-80">
            <h2 className="text-lg font-semibold text-gray-900 text-center">
              {orderStatus}
            </h2>
            <div className="mt-4 flex justify-center space-x-4">
              <button
                onClick={() => {
                  setOrderStatus(null); // Clear order status
                  setIsOrderPlaced(false); // Reset order placed flag
                  setIsPopupVisible(false); // Close "Item added to cart" popup
                  setIsCartOpen(false); // Close the cart modal
                  setIsCheckoutStep(false); // Close the checkout modal
                }}
                className="bg-teal-600 text-white px-6 py-2 rounded-lg transition duration-300 hover:bg-teal-700"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderPage;
