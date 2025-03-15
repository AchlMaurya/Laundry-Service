// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const storeData = [
//   {
//     storeLocation: "Andheri",
//     storeCity: "Mumbai",
//     storePhone: 9234676887,
//   },
//   {
//     storeLocation: "Navi Mumbai",
//     storeCity: "Mumbai",
//     storePhone: 9234676227,
//   },
//   {
//     storeLocation: "Bhayandar",
//     storeCity: "Arunachal",
//     storePhone: 9234576887,
//   },
//   {
//     storeLocation: "Laxman",
//     storeCity: "Chennai",
//     storePhone: 9234656887,
//   },
//   {
//     storeLocation: "Colaba",
//     storeCity: "Mumbai",
//     storePhone: 9134676887,
//   },
// ];

// const Lists = () => {
//   const navigate = useNavigate();

//   // **States for order details**
//   const [selectedStore, setSelectedStore] = useState(null);
//   const [orderDetails, setOrderDetails] = useState([
//     { item: "Shirt", quantity: 3, price: 50 },
//     { item: "Pants", quantity: 2, price: 100 },
//   ]);
//   const [total, setTotal] = useState(0);

//   // Calculate total price dynamically
//   const calculateTotal = () => {
//     const totalPrice = orderDetails.reduce((acc, item) => acc + item.quantity * item.price, 0);
//     setTotal(totalPrice);
//   };

//   // Function to handle store selection
//   const handleStoreChange = (event) => {
//     const store = storeData.find((s) => s.storeLocation === event.target.value);
//     setSelectedStore(store);
//   };

//   const createOrder = async () => {
//     if (!selectedStore) {
//       alert("Please select a store before placing the order.");
//       return;
//     }

//     const orderData = {
//       orderId: "OR00001",
//       orderDate: new Date().toLocaleString(),
//       storeLocation: selectedStore.storeLocation,
//       city: selectedStore.storeCity,
//       storePhone: selectedStore.storePhone,
//       totalItems: orderDetails.length,
//       price: total,
//       status: "In Washing",
//     };

//     try {
//       const response = await fetch("http://localhost:5000/api/orders", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(orderData),
//       });

//       if (response.ok) {
//         console.log("Order saved successfully!");
//         navigate("/orders"); // Redirect to past orders page
//       }
//     } catch (error) {
//       console.error("Error saving order:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Order Summary</h2>

//       {/* Store Selection Dropdown */}
//       <label>Select Store: </label>
//       <select onChange={handleStoreChange}>
//         <option value="">--Select a Store--</option>
//         {storeData.map((store, index) => (
//           <option key={index} value={store.storeLocation}>
//             {store.storeLocation} ({store.storeCity})
//           </option>
//         ))}
//       </select>

//       {/* Order List Display */}
//       <h3>Items in Order:</h3>
//       <ul>
//         {orderDetails.map((item, index) => (
//           <li key={index}>
//             {item.item} - {item.quantity} x {item.price} Rs
//           </li>
//         ))}
//       </ul>

//       {/* Calculate Total */}
//       <button onClick={calculateTotal}>Calculate Total</button>
//       <h3>Total Price: {total} Rs</h3>

//       {/* Place Order Button */}
//       <button onClick={createOrder}>Place Order</button>
//     </div>
//   );
// };

// export default Lists;








// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const storeData = [
//   { storeLocation: "Andheri", storeCity: "Mumbai", storePhone: 9234676887 },
//   { storeLocation: "Navi Mumbai", storeCity: "Mumbai", storePhone: 9234676227 },
//   { storeLocation: "Bhayandar", storeCity: "Arunachal", storePhone: 9234576887 },
//   { storeLocation: "Laxman", storeCity: "Chennai", storePhone: 9234656887 },
//   { storeLocation: "Colaba", storeCity: "Mumbai", storePhone: 9134676887 },
// ];

// const Lists = () => {
//   const navigate = useNavigate();
//   const [selectedStore, setSelectedStore] = useState(null);
//   const [orderDetails, setOrderDetails] = useState([
//     { item: "Shirt", quantity: 3, price: 50 },
//     { item: "Pants", quantity: 2, price: 100 },
//   ]);
//   const [total, setTotal] = useState(0);

//   // Automatically calculate total when order details change
//   useEffect(() => {
//     const totalPrice = orderDetails.reduce((acc, item) => acc + item.quantity * item.price, 0);
//     setTotal(totalPrice);
//   }, [orderDetails]);

//   // Handle store selection
//   const handleStoreChange = (event) => {
//     const store = storeData.find((s) => s.storeLocation === event.target.value);
//     setSelectedStore(store);
//   };

//   const createOrder = async () => {
//     if (!selectedStore) {
//       alert("Please select a store before placing the order.");
//       return;
//     }

//     const orderData = {
//       orderId: `OR${Date.now()}`, // Unique order ID
//       orderDate: new Date().toLocaleString(),
//       storeLocation: selectedStore.storeLocation,
//       city: selectedStore.storeCity,
//       storePhone: selectedStore.storePhone,
//       totalItems: orderDetails.length,
//       price: orderDetails.reduce((acc, item) => acc + item.quantity * item.price, 0), // Compute total dynamically
//       status: "In Washing",
//     };

//     try {
//       const response = await fetch("http://localhost:5000/api/orders", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(orderData),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to save order");
//       }

//       console.log("Order saved successfully!");
//       navigate("/orders"); // Redirect to past orders page
//     } catch (error) {
//       console.error("Error saving order:", error);
//       alert("Failed to save order. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <h2>Order Summary</h2>

//       {/* Store Selection Dropdown */}
//       <label>Select Store: </label>
//       <select value={selectedStore?.storeLocation || ""} onChange={handleStoreChange}>
//         <option value="">--Select a Store--</option>
//         {storeData.map((store, index) => (
//           <option key={index} value={store.storeLocation}>
//             {store.storeLocation} ({store.storeCity})
//           </option>
//         ))}
//       </select>

//       {/* Order List Display */}
//       <h3>Items in Order:</h3>
//       <ul>
//         {orderDetails.map((item, index) => (
//           <li key={index}>
//             {item.item} - {item.quantity} x {item.price} Rs
//           </li>
//         ))}
//       </ul>

//       {/* Display Total Price */}
//       <h3>Total Price: {total} Rs</h3>

//       {/* Place Order Button */}
//       <button onClick={createOrder}>Place Order</button>
//     </div>
//   );
// };

// export default Lists;
