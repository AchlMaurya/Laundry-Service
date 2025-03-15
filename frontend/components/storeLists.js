// import React, { useEffect, useState } from "react";

// const StoreList = () => {
//   const [stores, setStores] = useState([]);

//   useEffect(() => {
//     fetch("/Data/data.json")  // Adjust path if needed
//       .then((response) => response.json())
//       .then((data) => setStores(data.store))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   return (
//     <div>
//       <h2>Store Locations</h2>
//       <ul>
//         {stores.map((store, index) => (
//           <li key={index}>
//             <strong>{store.storeLocation}</strong> - {store.storeAddress}, {store.storeCity} (📞 {store.storePhone})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StoreList;





import React, { useEffect, useState } from "react";
import "../styles/storeLists.css";

const StoreList = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data.json") // Adjust path if needed
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch data");
        return response.json();
      })
      .then((data) => {
        setStores(data.store);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading store locations...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <section className="store-list">
      <h2>Store Locations</h2>
      <ul>
        {stores.map((store, index) => (
          <li key={index}>
            <strong>{store.storeLocation}</strong> - {store.storeAddress}, {store.storeCity} (📞 {store.storePhone})
          </li>
        ))}
      </ul>
    </section>
  );
};

export default StoreList;
