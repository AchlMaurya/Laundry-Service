import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Dashboard.module.css";
//import OrderDetails from "./styles/OrderDatails"


export default function LaundryDashboard() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch("/api/v1/orders") // Adjust this URL based on your backend
  //     .then((res) => res.json())
  //     .then((data) => setOrders(data)) 
  //     .catch((error) => console.error("Error fetching orders:", error));
  // }, []);


  useEffect(() => {
    fetch("/Data/data.json")
      .then(response => response.json())
      .then(data => console.log(data.store))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  // const goToOrder = () => {
  //   navigate("/OrderDatails");
  // };

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.ordersSection}>
          <h2>Orders | {orders.length}</h2>
          {orders.length === 0 ? (
            <div className={styles.noOrders}>
              <p>No Orders available</p>
              <button className={styles.createButton} onClick={() => navigate("/orderDetails")}>
                Create
              </button>
            </div>
          ) : (
            <div className={styles.ordersList}>
              {orders.map((order, index) => (
                <div key={index} className={styles.orderItem}>
                  <p>Order ID: {order.order_id}</p>
                  <p>Status: {order.status}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
