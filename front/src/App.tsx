// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App


import React, { useEffect, useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/items")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch items");
        }
        return res.json();
      })
      .then((data) => {
        setItems(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Food Items 🍔🍕</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;