// import { useEffect, useState } from "react";

// export default function PastOrders() {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/orders");
//         if (response.ok) {
//           const data = await response.json();
//           setOrders(data);
//         }
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//       }
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <div>
//       <h2>Past Orders</h2>
//       {orders.length === 0 ? (
//         <p>No orders found</p>
//       ) : (
//         <ul>
//           {orders.map((order) => (
//             <li key={order.orderId}>
//               <strong>Order ID:</strong> {order.orderId} | 
//               <strong> Date:</strong> {order.orderDate} | 
//               <strong> Store:</strong> {order.storeLocation} | 
//               <strong> Total Items:</strong> {order.totalItems} | 
//               <strong> Price:</strong> Rs {order.price} | 
//               <strong> Status:</strong> {order.status}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }






import { useEffect, useState } from "react";
import "../styles/pastOrders.css";

export default function PastOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/orders");
        if (!response.ok) throw new Error("Failed to fetch orders");

        const data = await response.json();
        console.log("Fetched Orders:", data);
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError("Failed to load orders. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Past Orders</h2>

      {loading ? (
        <p>Loading orders...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <table border="1" cellPadding="8" cellSpacing="0">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Store</th>
              <th>Total Items</th>
              <th>Price (Rs)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.orderId}>
                <td>{order.orderId}</td>
                <td>{order.orderDate}</td>
                <td>{order.storeLocation}</td>
                <td>{order.totalItems}</td>
                <td>{order.price}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
