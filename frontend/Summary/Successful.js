// import React from "react";
// import "./orderSuccess.css"; 
// import { useNavigate } from "react-router-dom";

// const OrderSuccessModal = () => {
//   const navigate = useNavigate();
  
//   const goToOrderPlaced = ()=>{
//     navigate('/successful')
//   }
//   return (
//     <div className="modal-overlay">
//       <div className="modal-container">
//         <span className="checkmark">✔</span>
        
//         <h2>Your order is successfully.</h2>
//         <p>You can track the delivery in the "Orders" section.</p>
//         <button className="order-button" onClick={ goToOrderPlaced }>Go to orders</button>
//       </div>
//     </div>
//   );
// };

// export default OrderSuccessModal;





// import React from "react";
// import { useNavigate } from "react-router-dom";
// //import "./orderSuccess.css";
// import "../styles/orderSuccess.css";

// const OrderSuccessModal = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="order-success-overlay">
//       <div className="order-success-container">
//         <span className="success-checkmark">✔</span>
        
//         <h2>Your order was placed successfully!</h2>
//         <p>You can track the delivery in the "Orders" section.</p>
        
//         <button className="order-success-button" onClick={() => navigate('/orders')}>
//           Go to Orders
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OrderSuccessModal;




import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/orderSuccess.css'; 

const Successful = () => {
  const navigate = useNavigate();

  return (
    <div className="successful-container">
      <h2>Your order was placed successfully!</h2>
      <p>You can track the delivery in the "Orders" section.</p>
      <button onClick={() => navigate('/laundryDash')} className="order-button">
        Go to Orders
      </button>
      <footer>2025 © Laundry</footer>
    </div>
  );
};

export default Successful;
