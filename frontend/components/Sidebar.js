// import React from "react";
// import { Home, List, Plus } from "lucide-react";
// import styles from "./styles/Dashboard.module.css";

// const Sidebar = () => {
//   return (
//     <aside className={styles.sidebar}>
//       <Home size={24} className={styles.icon} />
//       <Plus size={24} className={styles.icon} />
//       <List size={24} className={styles.icon} />
//     </aside>
//   );
// };

// export default Sidebar;





// import React from "react";
// import { NavLink } from "react-router-dom";
// import { Home, List, Plus } from "lucide-react";
// import styles from "../styles/Dashboard.module.css"; // Fixed import path

// const Sidebar = () => {
//   return (
//     <aside className={styles.sidebar}>
//       <NavLink to="/dashboard" activeClassName={styles.active} aria-label="Dashboard">
//         <Home size={24} className={styles.icon} />
//       </NavLink>
//       <NavLink to="/create-order" activeClassName={styles.active} aria-label="Create Order">
//         <Plus size={24} className={styles.icon} />
//       </NavLink>
//       <NavLink to="/orders" activeClassName={styles.active} aria-label="Order List">
//         <List size={24} className={styles.icon} />
//       </NavLink>
//     </aside>
//   );
// };

// export default Sidebar;







import React from "react";
import { NavLink } from "react-router-dom";
import { Home, List, Plus } from "lucide-react";
import styles from "../styles/Dashboard.module.css"; // Ensure this file exists

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <NavLink 
        to="/dashboard" 
        className={({ isActive }) => (isActive ? styles.active : "")} 
        aria-label="Dashboard"
      >
        <Home size={24} className={styles.icon} />
      </NavLink>

      <NavLink 
        to="/create-order" 
        className={({ isActive }) => (isActive ? styles.active : "")} 
        aria-label="Create Order"
      >
        <Plus size={24} className={styles.icon} />
      </NavLink>

      <NavLink 
        to="/orders" 
        className={({ isActive }) => (isActive ? styles.active : "")} 
        aria-label="Order List"
      >
        <List size={24} className={styles.icon} />
      </NavLink>
    </aside>
  );
};

export default Sidebar;
