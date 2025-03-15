// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Data from "../Data/data.json";
// import "./SummaryPage.css";

// const SummaryPage = ({ closeOverlay }) => {
//   const location = useLocation();
//   const navigate = useNavigate();


//   const { orderDetails = [] } = location.state || {};

 
//   const stores = Data.store || [];
//   const [selectedStore, setSelectedStore] = useState(
//     stores.length > 0 ? stores[0] : null
//   );


//   useEffect(() => {
//     const savedStore = JSON.parse(localStorage.getItem("selectedStore"));
//     if (savedStore) {
//       setSelectedStore(savedStore);
//     }
//   }, []);

  
//   const handleStoreChange = (e) => {
//     const newStore = stores.find(
//       (store) => store.storeLocation === e.target.value
//     );

//     if (newStore) {
//       setSelectedStore(newStore);
//       localStorage.setItem("selectedStore", JSON.stringify(newStore));
//     }
//   };

 
//   console.log("Selected Store:", selectedStore);

//   const subtotal = orderDetails.reduce((acc, item) => acc + item.price, 0);
//   const pickupCharge = 90;
//   const total = subtotal + pickupCharge;

//   const goToSuccess = () => {
//     navigate("/successful");
//   };

//   return (
//     <div className="summary-container">
//       <div className="summary-header">
//         <h2>Summary</h2>
//         <button className="close-btn" onClick={closeOverlay}>
//           X
//         </button>
//       </div>

//       <div className="store-info">
       
//         <select onChange={handleStoreChange} value={selectedStore?.storeLocation || ""}>
//           {stores.map((store) => (
//             <option key={store.storeLocation} value={store.storeLocation}>
//               {store.storeLocation}
//             </option>
//           ))}
//         </select>

//         {selectedStore && (
//   <div className="store-details">
//     <p><strong>Store Address:</strong> {selectedStore.storeAddress} <strong>Phone:</strong> {selectedStore.storePhone ? selectedStore.storePhone : "Not Available"}</p>
//     {/* <p><strong>Phone:</strong> {selectedStore.storePhone ? selectedStore.storePhone : "Not Available"}</p> */}
//   </div>
// )}

//       </div>

    
//       <div className="order-details">
//         <h5>Order Details</h5>
//         {orderDetails.length > 0 ? (
//           orderDetails.map((item, index) => (
//             <div key={index} className="order-item">
//               <span>{item.name}</span>
//               <em>{item.services.join(", ")}</em>
//               <span>{`${item.quantity} X ${item.unitPrice} = `}</span>
//               <span className="price">Rs {item.price}</span>
//             </div>
//           ))
//         ) : (
//           <p>No items selected.</p>
//         )}
//       </div>

//       <div className="price-summary">
//         <p>Sub total: <strong>Rs {subtotal}</strong></p>
//         <p>Pickup Charges: <strong>Rs {pickupCharge}</strong></p>
//         <p className="total">Total: <strong>Rs {total}</strong></p>
//       </div>

//       <button className="confirm-btn" onClick={goToSuccess}>Confirm</button>
//     </div>
//   );
// };

// export default SummaryPage;






// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Data from "../Data/data.json";
// //import "./SummaryPage.css";
// import "../styles/SummaryPage.css";

// const SummaryPage = ({ closeOverlay }) => {
//   const location = useLocation();
//   const navigate = useNavigate();
  
//   const { orderDetails = [] } = location.state || {};
//   const stores = Data.store || [];

//   // Load selected store from localStorage or default to the first store
//   const [selectedStore, setSelectedStore] = useState(() => {
//     return JSON.parse(localStorage.getItem("selectedStore")) || stores[0] || null;
//   });

//   // Update selected store if localStorage has data
//   useEffect(() => {
//     const savedStore = JSON.parse(localStorage.getItem("selectedStore"));
//     if (savedStore) setSelectedStore(savedStore);
//   }, [stores]); // Runs again if `stores` change

//   // Store selection handler
//   const handleStoreChange = (e) => {
//     const newStore = stores.find((store) => store.storeLocation === e.target.value);
//     if (newStore) {
//       setSelectedStore(newStore);
//       localStorage.setItem("selectedStore", JSON.stringify(newStore));
//     }
//   };

//   const subtotal = orderDetails.reduce((acc, item) => acc + item.price, 0).toFixed(2);
//   const pickupCharge = 90;
//   const total = (parseFloat(subtotal) + pickupCharge).toFixed(2);

//   return (
//     <div className="summary-container">
//       <div className="summary-header">
//         <h2>Summary</h2>
//         <button className="close-btn" onClick={closeOverlay}>X</button>
//       </div>

//       <div className="store-info">
//         <select onChange={handleStoreChange} value={selectedStore?.storeLocation || ""}>
//           {stores.map((store) => (
//             <option key={store.storeLocation} value={store.storeLocation}>
//               {store.storeLocation}
//             </option>
//           ))}
//         </select>

//         {selectedStore && (
//           <div className="store-details">
//             <p><strong>Store Address:</strong> {selectedStore.storeAddress || "Not Available"}</p>
//             <p><strong>Phone:</strong> {selectedStore?.storePhone || "Not Available"}</p>
//           </div>
//         )}
//       </div>

//       <div className="order-details">
//         <h5>Order Details</h5>
//         {orderDetails.length > 0 ? (
//           orderDetails.map((item, index) => (
//             <div key={index} className="order-item">
//               <span>{item.name}</span>
//               <em>{item.services.join(", ")}</em>
//               <span>{`${item.quantity} X ${item.unitPrice} = `}</span>
//               <span className="price">Rs {item.price.toFixed(2)}</span>
//             </div>
//           ))
//         ) : (
//           <p>No items selected.</p>
//         )}
//       </div>

//       <div className="price-summary">
//         <p>Sub total: <strong>Rs {subtotal}</strong></p>
//         <p>Pickup Charges: <strong>Rs {pickupCharge}</strong></p>
//         <p className="total">Total: <strong>Rs {total}</strong></p>
//       </div>

//       {/* <button className="confirm-btn" onClick={() => navigate("/successful")}>
//         Confirm
//       </button> */}

// {showOverlay && (
//   <div className="overlay">
//     <SummaryPage closeOverlay={() => setShowOverlay(false)} />
//     <button onClick={goToSummary}>Confirm Order</button>
//   </div>
// )}

//     </div>
//   );
// };

// export default SummaryPage;






import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Data from "../Data/data.json";
import "../styles/SummaryPage.css";

const SummaryPage = ({ closeOverlay }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { orderDetails = [] } = location.state || {};
  const stores = Data.store || [];

  // Load selected store from localStorage or default to the first store
  const [selectedStore, setSelectedStore] = useState(() => {
    return JSON.parse(localStorage.getItem("selectedStore")) || stores[0] || null;
  });

  // Update selected store if localStorage has data
  useEffect(() => {
    const savedStore = JSON.parse(localStorage.getItem("selectedStore"));
    if (savedStore) setSelectedStore(savedStore);
  }, [stores]); // Runs again if `stores` change

  // Store selection handler
  const handleStoreChange = (e) => {
    const newStore = stores.find((store) => store.storeLocation === e.target.value);
    if (newStore) {
      setSelectedStore(newStore);
      localStorage.setItem("selectedStore", JSON.stringify(newStore));
    }
  };

  const subtotal = orderDetails.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  const pickupCharge = 90;
  const total = (parseFloat(subtotal) + pickupCharge).toFixed(2);

  return (
    <div className="summary-container">
      <div className="summary-header">
        <h2>Summary</h2>
        <button className="close-btn" onClick={closeOverlay}>X</button>
      </div>

      <div className="store-info">
        <select onChange={handleStoreChange} value={selectedStore?.storeLocation || ""}>
          {stores.map((store) => (
            <option key={store.storeLocation} value={store.storeLocation}>
              {store.storeLocation}
            </option>
          ))}
        </select>

        {selectedStore && (
          <div className="store-details">
            <p><strong>Store Address:</strong> {selectedStore.storeAddress || "Not Available"}</p>
            <p><strong>Phone:</strong> {selectedStore?.storePhone || "Not Available"}</p>
          </div>
        )}
      </div>

      <div className="order-details">
        <h5>Order Details</h5>
        {orderDetails.length > 0 ? (
          orderDetails.map((item, index) => (
            <div key={index} className="order-item">
              <span>{item.name}</span>
              <em>{item.services.join(", ")}</em>
              <span>{`${item.quantity} X ${item.unitPrice} = `}</span>
              <span className="price">Rs {item.price.toFixed(2)}</span>
            </div>
          ))
        ) : (
          <p>No items selected.</p>
        )}
      </div>

      <div className="price-summary">
        <p>Sub total: <strong>Rs {subtotal}</strong></p>
        <p>Pickup Charges: <strong>Rs {pickupCharge}</strong></p>
        <p className="total">Total: <strong>Rs {total}</strong></p>
      </div>

      <button className="confirm-btn" onClick={() => navigate("/successful")}>
        Confirm Order
      </button>
    </div>
  );
};

export default SummaryPage;
