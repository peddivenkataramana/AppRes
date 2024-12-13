import React, { useState, useEffect } from "react";

const AdminPage = () => {
  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState("current");
  const [newOrderAlert, setNewOrderAlert] = useState(false);
  const [prevOrdersCount, setPrevOrdersCount] = useState(0);

  // Fetch orders from the server
  const fetchOrders = async () => {
    const response = await fetch("http://localhost:5000/api/orders");
    const data = await response.json();

    if (data.length > prevOrdersCount) {
      setNewOrderAlert(true);
    }

    setOrders(data);
    setPrevOrdersCount(data.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchOrders();
    }, 5000);

    return () => clearInterval(interval);
  }, [prevOrdersCount]);

  const handleCompleteOrder = async (orderId) => {
    const response = await fetch(
      `http://localhost:5000/api/orders/${orderId}/complete`,
      {
        method: "PATCH",
      }
    );
    if (response.ok) {
      setOrders(
        orders.map((order) =>
          order._id === orderId ? { ...order, status: "completed" } : order
        )
      );
    }
  };

  const handleUnmarkOrder = async (orderId) => {
    const response = await fetch(
      `http://localhost:5000/api/orders/${orderId}/uncomplete`,
      {
        method: "PATCH",
      }
    );
    if (response.ok) {
      setOrders(
        orders.map((order) =>
          order._id === orderId ? { ...order, status: "pending" } : order
        )
      );
    }
  };

  const currentOrders = orders.filter((order) => order.status !== "completed");
  const completedOrders = orders.filter(
    (order) => order.status === "completed"
  );

  const handleNewOrderAlert = () => {
    setNewOrderAlert(false);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin - Orders</h1>

      {/* New Order Alert */}
      {newOrderAlert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleNewOrderAlert}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">New Order Received!</h3>
            <button
              onClick={handleNewOrderAlert}
              className="bg-blue-500 text-white px-6 py-3 rounded-md"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Tabs for Current and Completed Orders */}
      <div className="flex mb-8 flex-wrap justify-center sm:justify-start">
        <button
          onClick={() => setActiveTab("current")}
          className={`px-6 py-3 w-full sm:w-1/2 text-center ${
            activeTab === "current" ? "bg-blue-500 text-white" : "bg-gray-200"
          } rounded-t-lg sm:rounded-l-lg`}
        >
          Current Orders
        </button>
        <button
          onClick={() => setActiveTab("completed")}
          className={`px-6 py-3 w-full sm:w-1/2 text-center ${
            activeTab === "completed" ? "bg-blue-500 text-white" : "bg-gray-200"
          } rounded-t-lg sm:rounded-r-lg`}
        >
          Completed Orders
        </button>
      </div>

      {/* Current Orders Section */}
      {activeTab === "current" && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Current Orders</h2>
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm">Order ID</th>
                  <th className="px-6 py-3 text-left text-sm">Customer Name</th>
                  <th className="px-6 py-3 text-left text-sm">Phone Number</th>
                  <th className="px-6 py-3 text-left text-sm">
                    Order Date & Time
                  </th>
                  <th className="px-6 py-3 text-left text-sm">Order Details</th>
                  <th className="px-6 py-3 text-left text-sm">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentOrders.map((order) => (
                  <tr key={order._id} className="border-b">
                    <td className="px-6 py-4 text-sm">{order._id}</td>
                    <td className="px-6 py-4 text-sm">{order.customerName}</td>
                    <td className="px-6 py-4 text-sm">{order.customerPhone}</td>
                    <td className="px-6 py-4 text-sm">
                      {new Date(order.orderDate).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {order.items.map((item, index) => (
                        <div key={index} className="mb-1">
                          <strong>{item.name}</strong> - Spice Level:{" "}
                          {item.spiceLevel} (Qty: {item.quantity})
                        </div>
                      ))}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <button
                        onClick={() => handleCompleteOrder(order._id)}
                        className="bg-green-500 text-white px-4 py-2 rounded-md"
                      >
                        Mark as Completed
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Completed Orders Section */}
      {activeTab === "completed" && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Completed Orders</h2>
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm">Order ID</th>
                  <th className="px-6 py-3 text-left text-sm">Customer Name</th>
                  <th className="px-6 py-3 text-left text-sm">Phone Number</th>
                  <th className="px-6 py-3 text-left text-sm">
                    Order Date & Time
                  </th>
                  <th className="px-6 py-3 text-left text-sm">Order Details</th>
                  <th className="px-6 py-3 text-left text-sm">Action</th>
                </tr>
              </thead>
              <tbody>
                {completedOrders.map((order) => (
                  <tr key={order._id} className="border-b">
                    <td className="px-6 py-4 text-sm">{order._id}</td>
                    <td className="px-6 py-4 text-sm">{order.customerName}</td>
                    <td className="px-6 py-4 text-sm">{order.customerPhone}</td>
                    <td className="px-6 py-4 text-sm">
                      {new Date(order.orderDate).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {order.items.map((item, index) => (
                        <div key={index} className="mb-1">
                          <strong>{item.name}</strong> - Spice Level:{" "}
                          {item.spiceLevel} (Qty: {item.quantity})
                        </div>
                      ))}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <button
                        onClick={() => handleUnmarkOrder(order._id)}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-md"
                      >
                        Unmark as Completed
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
};

export default AdminPage;
