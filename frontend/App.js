import React from "react";
import { Route, Routes } from "react-router-dom";
import LaundryDashboard from "./components/laundryDash";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar.js";
import OrderTable from "./components/OrderTable";
import SummaryPage from "./Summary/SummaryPage.js";
import Successful from "./Summary/Successful.js";
import Footer from "./components/Footer.js";
import OrderPage from "./Summary/OrderPage";
import ConfirmOrder from "./Summary/ConfirmOrder";
import OrderDetails from "./Summary/OrderDetails.js"
import Lists from "./Summary/Lists";

import "./App.css"; 

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Sidebar/>
      {/* Sidebar only on dashboard & order pages */}
      <div className="content">
        <Routes>
          <Route path="/" element={<LaundryDashboard />} />
          <Route path="/order" element={<OrderTable />} />
          <Route path="/summaryPage" element={<SummaryPage />} />
          <Route path="/successful" element={<Successful />} />
          <Route path="/orderPage" element={<OrderPage />} />
         <Route path="/OrderTable" element={<OrderTable/>}></Route>
          <Route path="/confirmOrder" element={<ConfirmOrder />} />
          <Route path="/orderDetails" element={<OrderDetails />}></Route>
          <Route path="/lists" element={<Lists />} /> {/* Fixed route path */}
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
