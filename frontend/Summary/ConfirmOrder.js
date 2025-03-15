import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import "../styles/confirmOrders.css";

const createOrder = async (orderDetails = [], selectedStore, navigate) => {
  if (!selectedStore) {
    console.error("No store selected");
    alert("Please select a store before proceeding.");
    return;
  }

  if (!orderDetails.length) {
    console.error("No order details provided");
    alert("Please add at least one item to your order.");
    return;
  }

  const user = JSON.parse(localStorage.getItem("user")) || {}; // Fetch user data

  const orderData = {
    orderId: `OR${uuidv4()}`, 
    customerName: user.name || "Guest",
    userId: user.id || "Anonymous",
    orderDate: new Date().toLocaleString(),
    storeLocation: selectedStore?.storeLocation || "Unknown Location",
    city: selectedStore?.storeCity || "Unknown City",
    storePhone: selectedStore?.storePhone || "Not Available",
    totalItems: orderDetails.length,
    price: orderDetails.reduce((total, item) => total + (item.price || 0), 0),
    status: "In Washing",
  };

  try {
    const response = await fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    });

    const result = await response.json();  // Convert response to JSON
    if (response.ok) {
      console.log("Order saved successfully!", result);
      navigate("/Orders");
    } else {
      throw new Error(`Error: ${result.message || response.statusText}`);
    }
  } catch (error) {
    console.error("Error saving order:", error);
    alert("Failed to save order. Please try again.");
  }
};

export default createOrder;
