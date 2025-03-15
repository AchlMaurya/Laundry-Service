// import { useNavigate } from "react-router-dom";
// import createOrder from "./ConfirmOrder";

// const ConfirmOrderPage = ({ orderDetails, selectedStore }) => {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h2>Confirm Your Order</h2>
//       <button onClick={() => createOrder(orderDetails, selectedStore, navigate) }>
//         Place Order
//       </button>
//     </div>
//   );
// };

// export default ConfirmOrderPage;





import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Your order was placed successfully!</h2>
      <p>You can track the delivery in the "Orders" section.</p>
      <button onClick={() => navigate("/order")}>Go to Orders</button>
    </div>
  );
};

export default OrderSuccess;
