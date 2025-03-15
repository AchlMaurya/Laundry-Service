// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const OrderPage = () => {
//   const navigate = useNavigate();


//   const [orderData, setOrderData] = useState({
//     id: "OR00002",
//     dateTime: new Date().toLocaleString(), 
//     storeLocation: "",
//     city: "",
//     storePhone: "",
//     totalItems: "",
//     price: "",
//     status: "Order Placed",
//   });


//   const handleChange = (e) => {
//     setOrderData({ ...orderData, [e.target.name]: e.target.value });
//   };

 
//   const orderPlaced = () => {
//     navigate("/confirmOrder", { state: { order: orderData } });
//   };

//   return (
//     <div>
//       <h2>Place Your Order</h2>
//       <form>
//         <label>Store Location:</label>
//         <input
//           type="text"
//           name="storeLocation"
//           value={orderData.storeLocation}
//           onChange={handleChange}
//           required
//         />

//         <label>City:</label>
//         <input
//           type="text"
//           name="city"
//           value={orderData.city}
//           onChange={handleChange}
//           required
//         />

//         <label>Store Phone:</label>
//         <input
//           type="text"
//           name="storePhone"
//           value={orderData.storePhone}
//           onChange={handleChange}
//           required
//         />

//         <label>Total Items:</label>
//         <input
//           type="number"
//           name="totalItems"
//           value={orderData.totalItems}
//           onChange={handleChange}
//           required
//         />

//         <label>Price (Rs):</label>
//         <input
//           type="number"
//           name="price"
//           value={orderData.price}
//           onChange={handleChange}
//           required
//         />

//         <button type="button" onClick={orderPlaced}>Place Order</button>
//       </form>
//     </div>
//   );
// };

// export default OrderPage;







import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const navigate = useNavigate();

  const [orderData, setOrderData] = useState({
    id: "OR00002",
    dateTime: new Date().toLocaleString(),
    storeLocation: "",
    city: "",
    storePhone: "",
    totalItems: "",
    price: "",
    status: "Order Placed",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prevData) => ({
      ...prevData,
      [name]: name === "totalItems" || name === "price" ? parseInt(value) || "" : value,
    }));
  };

  const orderPlaced = () => {
    if (!orderData.storeLocation || !orderData.city || !orderData.storePhone || !orderData.totalItems || !orderData.price) {
      alert("Please fill in all fields before placing the order.");
      return;
    }

    navigate("/confirmOrder", { state: { order: orderData } });
  };

  return (
    <section className="order-page">
      <h2>Place Your Order</h2>
      <form>
        <label>Store Location:</label>
        <input
          type="text"
          name="storeLocation"
          value={orderData.storeLocation}
          onChange={handleChange}
          required
        />

        <label>City:</label>
        <input
          type="text"
          name="city"
          value={orderData.city}
          onChange={handleChange}
          required
        />

        <label>Store Phone:</label>
        <input
          type="tel"
          name="storePhone"
          value={orderData.storePhone}
          onChange={handleChange}
          required
        />

        <label>Total Items:</label>
        <input
          type="number"
          name="totalItems"
          value={orderData.totalItems}
          onChange={handleChange}
          min="1"
          required
        />

        <label>Price (Rs):</label>
        <input
          type="number"
          name="price"
          value={orderData.price}
          onChange={handleChange}
          min="1"
          required
        />

        <button type="button" onClick={orderPlaced}>Place Order</button>
      </form>
    </section>
  );
};

export default OrderPage;
