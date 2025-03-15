// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const initialItems = [
//   { id: 1, name: "Shirts", pricePerUnit: 20, image: "https://m.media-amazon.com/images/I/71I-cik1CyL._AC_UL1500_.jpg" },
//   { id: 2, name: "T-Shirts", pricePerUnit: 15, image: "https://cdnp.sanmar.com/medias/sys_master/images/images/h01/h5d/8806071894046/4085-Black-5-2000LBlackFlatFront-1200W.jpg" },
//   { id: 3, name: "Trousers", pricePerUnit: 25, image: "https://www.pngmart.com/files/6/Trousers-PNG-Free-Download.png" },
//   { id: 4, name: "Jeans", pricePerUnit: 30, image: "https://www.fullbeauty.com/on/demandware.static/-/Sites-masterCatalog_Roamans/default/dw69d4ca3a/images/hi-res/0549_08475_mc_5350.jpg" },
//   { id: 5, name: "Boxers", pricePerUnit: 10, image: "https://tse3.mm.bing.net/th?id=OIP.FcKfFh47LsIlf4UM2E-Q7QHaHa&pid=Api&P=0&h=180" },
//   { id: 6, name: "Joggers", pricePerUnit: 40, image: "https://thumbs.dreamstime.com/z/runner-running-jogger-jogger-young-man-isolated-white-background-one-caucasian-runner-running-jogger-jogger-young-man-studio-169254870.jpg" },
// ];

// const washTypes = [
//   { id: "wash", label: "🧼", multiplier: 1 },
//   { id: "iron", label: "🪮", multiplier: 1.2 },
//   { id: "fold", label: "🛒", multiplier: 1.5 },
//   { id: "pack", label: "🛍️", multiplier: 2 },
// ];

// const OrderTable = () => {
//   const [items, setItems] = useState(
//     initialItems.map((item) => ({ ...item, quantity: 0, selectedWashes: [] }))
//   );

//   const navigate = useNavigate();

//   // Update quantity
//   const handleQuantityChange = (id, value) => {
//     setItems((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, quantity: Math.max(0, value) } : item
//       )
//     );
//   };

//   // Update wash selection
//   const handleWashSelection = (id, washId) => {
//     setItems((prev) =>
//       prev.map((item) =>
//         item.id === id
//           ? {
//               ...item,
//               selectedWashes: item.selectedWashes.includes(washId)
//                 ? item.selectedWashes.filter((w) => w !== washId)
//                 : [...item.selectedWashes, washId],
//             }
//           : item
//       )
//     );
//   };

//   // Calculate item price
//   const calculatePrice = (item) => {
//     if (item.quantity === 0 || item.selectedWashes.length === 0) return "--";
//     const basePrice = item.quantity * item.pricePerUnit;
//     const multiplier = item.selectedWashes.reduce(
//       (total, washId) =>
//         total * (washTypes.find((w) => w.id === washId)?.multiplier || 1),
//       1
//     );
//     return Math.round(basePrice * multiplier);
//   };

//   // Handle Proceed Button Click
//   const goToSummary = () => {
//     const selectedItems = items
//       .filter((item) => item.quantity > 0 && item.selectedWashes.length > 0)
//       .map((item) => ({
//         name: item.name,
//         quantity: item.quantity,
//         unitPrice: item.pricePerUnit,
//         price: calculatePrice(item),
//         services: item.selectedWashes.map(
//           (id) => washTypes.find((wash) => wash.id === id)?.label
//         ),
//       }));

//     // Ensure at least one item is selected before proceeding
//     if (selectedItems.length > 0) {
//       navigate("/summaryPage", { state: { orderDetails: selectedItems } });
//     } else {
//       alert("Please select at least one item before proceeding.");
//     }
//   };

//   return (
//     <>
//       <div className="order-container">
//         <h2>Create Order</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Product Types</th>
//               <th>Quantity</th>
//               <th>Wash Type</th>
//               <th>Price</th>
//             </tr>
//           </thead>
//           <tbody>
//             {items.map((item) => (
//               <tr key={item.id}>
//                 <td>
//                   <img src={item.image} alt={item.name} className="item-img" />
//                   <span>{item.name}</span>
//                 </td>
//                 <td>
//                   <input
//                     type="number"
//                     min="0"
//                     value={item.quantity}
//                     onChange={(e) =>
//                       handleQuantityChange(item.id, parseInt(e.target.value) || 0)
//                     }
//                   />
//                 </td>
//                 <td>
//                   {washTypes.map((wash) => (
//                     <button
//                       key={wash.id}
//                       className={`wash-btn ${
//                         item.selectedWashes.includes(wash.id) ? "selected" : ""
//                       }`}
//                       onClick={() => handleWashSelection(item.id, wash.id)}
//                     >
//                       {wash.label}
//                     </button>
//                   ))}
//                 </td>
//                 <td className="price">{calculatePrice(item)}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className="actions">
//           <button className="cancel">Cancel</button>
//           <button className="proceed" onClick={goToSummary}>Proceed</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OrderTable;









// import React from "react";
// import Popup from "reactjs-popup";
// import SummaryPage from "../Summary/SummaryPage";
// //import OrderTable from "./Summary/OrderTable.css";

// const OrderTables = ({ orders }) => {
//   return (
//     <div className="order-table">
//       <h2>Orders</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Order ID</th>
//             <th>Items</th>
//             <th>Total Price</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order, index) => (
//             <tr key={index}>
//               <td>{order.id}</td>
//               <td>{order.items.join(", ")}</td>
//               <td>Rs {order.totalPrice}</td>
//               <td>
//                 {/* Popup Trigger for Summary */}
//                 <Popup
//                   trigger={<button className="view-summary-btn">View Summary</button>}
//                   modal
//                   closeOnDocumentClick
//                 >
//                   {(close) => (
//                     <SummaryPage closeOverlay={close} orderDetails={order.details} />
//                   )}
//                 </Popup>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default OrderTables;







 






// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import SummaryPage from "../Summary/SummaryPage";
// import Popup from "reactjs-popup";

// const initialItems = [
//   { id: 1, name: "Shirts", pricePerUnit: 20, image: "https://m.media-amazon.com/images/I/71I-cik1CyL._AC_UL1500_.jpg" },
//   { id: 2, name: "T-Shirts", pricePerUnit: 15, image: "https://cdnp.sanmar.com/medias/sys_master/images/images/h01/h5d/8806071894046/4085-Black-5-2000LBlackFlatFront-1200W.jpg" },
//   { id: 3, name: "Trousers", pricePerUnit: 25, image: "https://www.pngmart.com/files/6/Trousers-PNG-Free-Download.png" },
//   { id: 4, name: "Jeans", pricePerUnit: 30, image: "https://www.fullbeauty.com/on/demandware.static/-/Sites-masterCatalog_Roamans/default/dw69d4ca3a/images/hi-res/0549_08475_mc_5350.jpg" },
//   { id: 5, name: "Boxers", pricePerUnit: 10, image: "https://tse3.mm.bing.net/th?id=OIP.FcKfFh47LsIlf4UM2E-Q7QHaHa&pid=Api&P=0&h=180" },
//   { id: 6, name: "Joggers", pricePerUnit: 40, image: "https://thumbs.dreamstime.com/z/runner-running-jogger-jogger-young-man-isolated-white-background-one-caucasian-runner-running-jogger-jogger-young-man-studio-169254870.jpg" },
// ];

// const washTypes = [
//   { id: "wash", label: "🧼", multiplier: 1 },
//   { id: "iron", label: "🪮", multiplier: 1.2 },
//   { id: "fold", label: "🛒", multiplier: 1.5 },
//   { id: "pack", label: "🛍️", multiplier: 2 },
// ];

// const OrderTable = (order) => {
//   const [items, setItems] = useState(
//     initialItems.map((item) => ({ ...item, quantity: 0, selectedWashes: [] }))
//   );

//   const navigate = useNavigate();

//   // Update quantity
//   const handleQuantityChange = (id, value) => {
//     setItems((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, quantity: Math.max(0, value) } : item
//       )
//     );
//   };

//   // Update wash selection
//   const handleWashSelection = (id, washId) => {
//     setItems((prev) =>
//       prev.map((item) =>
//         item.id === id
//           ? {
//               ...item,
//               selectedWashes: item.selectedWashes.includes(washId)
//                 ? item.selectedWashes.filter((w) => w !== washId)
//                 : [...item.selectedWashes, washId],
//             }
//           : item
//       )
//     );
//   };

//   // Calculate item price
//   const calculatePrice = (item) => {
//     if (item.quantity === 0 || item.selectedWashes.length === 0) return "--";
//     const basePrice = item.quantity * item.pricePerUnit;
//     const multiplier = item.selectedWashes.reduce(
//       (total, washId) =>
//         total * (washTypes.find((w) => w.id === washId)?.multiplier || 1),
//       1
//     );
//     return Math.round(basePrice * multiplier);
//   };

//   // Handle Proceed Button Click
//   const goToSummary = () => {
//     const selectedItems = items
//       .filter((item) => item.quantity > 0 && item.selectedWashes.length > 0)
//       .map((item) => ({
//         name: item.name,
//         quantity: item.quantity,
//         unitPrice: item.pricePerUnit,
//         price: calculatePrice(item),
//         services: item.selectedWashes.map(
//           (id) => washTypes.find((wash) => wash.id === id)?.label
//         ),
//       }));

   
//     if (selectedItems.length > 0) {
//       navigate("/summaryPage", { state: { orderDetails: selectedItems } });
//     } else {
//       alert("Please select at least one item before proceeding.");
//     }
//   };

//   return (
//     <>
//       <div className="order-container">
//         <h2>Create Order</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Product Types</th>
//               <th>Quantity</th>
//               <th>Wash Type</th>
//               <th>Price</th>
//             </tr>
//           </thead>
//           <tbody>
//             {items.map((item) => (
//               <tr key={item.id}>
//                 <td>
//                   <img src={item.image} alt={item.name} className="item-img" />
//                   <span>{item.name}</span>
//                 </td>
//                 <td>
//                   <input
//                     type="number"
//                     min="0"
//                     value={item.quantity}
//                     onChange={(e) =>
//                       handleQuantityChange(item.id, parseInt(e.target.value) || 0)
//                     }
//                   />
//                 </td>
//                 <td>
//                   {washTypes.map((wash) => (
//                     <button
//                       key={wash.id}
//                       className={`wash-btn ${
//                         item.selectedWashes.includes(wash.id) ? "selected" : ""
//                       }`}
//                       onClick={() => handleWashSelection(item.id, wash.id)}
//                     >
//                       {wash.label}
//                     </button>
//                   ))}
//                 </td>
//                 <td className="price">{calculatePrice(item)}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className="actions">
//           <button className="cancel">Cancel</button>
//           <button className="proceed" onClick={goToSummary}>Proceed</button>
//           <Popup trigger={<button className="view-summary-btn"> View Summary</button>} position="right center">
//           {(close) => (
//                     <SummaryPage closeOverlay={close} orderDetails={order.details} />
//                   )}
//     {/* <div>Popup content here !!</div> */}
//   <div>  <SummaryPage/></div>
//   </Popup>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OrderTable;









// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import SummaryPage from "../Summary/SummaryPage";
// import Popup from "reactjs-popup";

// const washTypes = [
//   { id: "wash", label: "🧼", multiplier: 1 },
//   { id: "iron", label: "🪮", multiplier: 1.2 },
//   { id: "fold", label: "🛒", multiplier: 1.5 },
//   { id: "pack", label: "🛍️", multiplier: 2 },
// ];

// const OrderTable = () => {
//   const navigate = useNavigate();
//   const [items, setItems] = useState([]);
//   const [orders, setOrders] = useState([]);

//   // Fetch past orders from the backend
//   useEffect(() => {
//     fetch("http://localhost:5000/api/orders") // Update with your backend API
//       .then((res) => res.json())
//       .then((data) => setOrders(data))
//       .catch((err) => console.error("Error fetching orders:", err));
//   }, []);

//   // Fetch available products from the backend
//   useEffect(() => {
//     fetch("http://localhost:5000/api/products") // API to get products
//       .then((res) => res.json())
//       .then((data) =>
//         setItems(data.map((item) => ({ ...item, quantity: 0, selectedWashes: [] })))
//       )
//       .catch((err) => console.error("Error fetching products:", err));
//   }, []);

//   // Update quantity
//   const handleQuantityChange = (id, value) => {
//     setItems((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, quantity: Math.max(0, value) } : item
//       )
//     );
//   };

//   // Update wash selection
//   const handleWashSelection = (id, washId) => {
//     setItems((prev) =>
//       prev.map((item) =>
//         item.id === id
//           ? {
//               ...item,
//               selectedWashes: item.selectedWashes.includes(washId)
//                 ? item.selectedWashes.filter((w) => w !== washId)
//                 : [...item.selectedWashes, washId],
//             }
//           : item
//       )
//     );
//   };

//   // Calculate item price
//   const calculatePrice = (item) => {
//     if (item.quantity === 0 || item.selectedWashes.length === 0) return "--";
//     const basePrice = item.quantity * item.pricePerUnit;
//     const multiplier = item.selectedWashes.reduce(
//       (total, washId) =>
//         total * (washTypes.find((w) => w.id === washId)?.multiplier || 1),
//       1
//     );
//     return Math.round(basePrice * multiplier);
//   };

//   // Handle Proceed Button Click
//   const goToSummary = () => {
//     const selectedItems = items
//       .filter((item) => item.quantity > 0 && item.selectedWashes.length > 0)
//       .map((item) => ({
//         name: item.name,
//         quantity: item.quantity,
//         unitPrice: item.pricePerUnit,
//         price: calculatePrice(item),
//         services: item.selectedWashes.map(
//           (id) => washTypes.find((wash) => wash.id === id)?.label
//         ),
//       }));

//     if (selectedItems.length > 0) {
//       navigate("/summaryPage", { state: { orderDetails: selectedItems } });
//     } else {
//       alert("Please select at least one item before proceeding.");
//     }
//   };

//   return (
//     <div className="order-container">
//       <h2>Create Order</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Product Types</th>
//             <th>Quantity</th>
//             <th>Wash Type</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((item) => (
//             <tr key={item.id}>
//               <td>
//                 <img src={item.image} alt={item.name} className="item-img" />
//                 <span>{item.name}</span>
//               </td>
//               <td>
//                 <input
//                   type="number"
//                   min="0"
//                   value={item.quantity}
//                   onChange={(e) =>
//                     handleQuantityChange(item.id, parseInt(e.target.value) || 0)
//                   }
//                 />
//               </td>
//               <td>
//                 {washTypes.map((wash) => (
//                   <button
//                     key={wash.id}
//                     className={`wash-btn ${
//                       item.selectedWashes.includes(wash.id) ? "selected" : ""
//                     }`}
//                     onClick={() => handleWashSelection(item.id, wash.id)}
//                   >
//                     {wash.label}
//                   </button>
//                 ))}
//               </td>
//               <td className="price">{calculatePrice(item)}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="actions">
//         <button className="cancel">Cancel</button>
//         <button className="proceed" onClick={goToSummary}>Proceed</button>
//         <Popup trigger={<button className="view-summary-btn"> View Summary</button>} position="right center">
//           {(close) => (
//             <SummaryPage closeOverlay={close} orderDetails={items} />
//           )}
//         </Popup>
//       </div>

//       {/* Display past orders */}
//       <div className="past-orders">
//         <h2>Past Orders</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Order Id</th>
//               <th>Order Date</th>
//               <th>Store Location</th>
//               <th>City</th>
//               <th>Total Items</th>
//               <th>Price</th>
//               <th>Status</th>
//               <th>View</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order.id}>
//                 <td>{order.id}</td>
//                 <td>{order.date}</td>
//                 <td>{order.storeLocation}</td>
//                 <td>{order.city}</td>
//                 <td>{order.totalItems}</td>
//                 <td>{order.price} Rs</td>
//                 <td>{order.status}</td>
//                 <td>
//                   <button onClick={() => alert(`Viewing details for Order ${order.id}`)}>👁️</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default OrderTable;





import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SummaryPage from "../Summary/SummaryPage";
import Popup from "reactjs-popup";

const washTypes = [
  { id: "wash", label: "🧼", multiplier: 1 },
  { id: "iron", label: "🪮", multiplier: 1.2 },
  { id: "fold", label: "🛒", multiplier: 1.5 },
  { id: "pack", label: "🛍️", multiplier: 2 },
];

const OrderTable = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);

  // Fetch past orders
  useEffect(() => {
    fetch("http://localhost:5000/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error("Error fetching orders:", err));
  }, []);

  // Fetch products
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) =>
        setItems(data.map((item) => ({ ...item, quantity: 0, selectedWashes: [] })))
      )
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // Update quantity
  const handleQuantityChange = (id, value) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, value) } : item
      )
    );
  };

  // Update wash selection
  const handleWashSelection = (id, washId) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              selectedWashes: item.selectedWashes.includes(washId)
                ? item.selectedWashes.filter((w) => w !== washId)
                : [...item.selectedWashes, washId],
            }
          : item
      )
    );
  };

  // Calculate price
  const calculatePrice = (item) => {
    if (item.quantity === 0 || item.selectedWashes.length === 0) return "--";
    const basePrice = item.quantity * item.pricePerUnit;
    const multiplier = item.selectedWashes.reduce(
      (total, washId) =>
        total * (washTypes.find((w) => w.id === washId)?.multiplier || 1),
      1
    );
    return Math.round(basePrice * multiplier);
  };

  // Proceed to Summary
  const goToSummary = () => {
    const selectedItems = items
      .filter((item) => item.quantity > 0 && item.selectedWashes.length > 0)
      .map((item) => ({
        name: item.name,
        quantity: item.quantity,
        unitPrice: item.pricePerUnit,
        price: calculatePrice(item),
        services: item.selectedWashes.map(
          (id) => washTypes.find((wash) => wash.id === id)?.label
        ),
      }));

    if (selectedItems.length > 0) {
      navigate("/summaryPage", { state: { orderDetails: selectedItems } });
    } else {
      alert("Please select at least one item before proceeding.");
    }
  };

  return (
    <div className="order-container">
      <h2>Create Order</h2>
      <table>
        <thead>
          <tr>
            <th>Product Types</th>
            <th>Quantity</th>
            <th>Wash Type</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={`Image of ${item.name}`} className="item-img" />
                <span>{item.name}</span>
              </td>
              <td>
                <input
                  type="number"
                  min="0"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value) || 0)
                  }
                />
              </td>
              <td>
                {washTypes.map((wash) => (
                  <button
                    key={wash.id}
                    className={`wash-btn ${item.selectedWashes.includes(wash.id) ? "selected" : ""}`}
                    onClick={() => handleWashSelection(item.id, wash.id)}
                  >
                    {wash.label}
                  </button>
                ))}
              </td>
              <td className="price">{calculatePrice(item)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="actions">
        <button className="cancel">Cancel</button>
        <button className="proceed" onClick={goToSummary}>Proceed</button>
        {/* <Popup trigger={<button className="view-summary-btn"> View Summary</button>} position="right center">
          {(close) => (
            <SummaryPage closeOverlay={close} orderDetails={items} />
          )}
        </Popup> */}
      </div>

      {/* Display past orders */}
      <div className="past-orders">
        <h2>Past Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Order Date</th>
              <th>Store Location</th>
              <th>City</th>
              <th>Total Items</th>
              <th>Price</th>
              <th>Status</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>{order.storeLocation}</td>
                <td>{order.city}</td>
                <td>{order.totalItems}</td>
                <td>{order.price} Rs</td>
                <td>{order.status}</td>
                <td>
                  <button onClick={() => alert(`Viewing details for Order ${order.id}`)}>👁️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
