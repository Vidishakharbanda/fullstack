// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App


import { useEffect, useState } from "react";

interface Item {
  id: number;
  name: string;
  price: number;
}

const App = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://vidisha-ctcfg7e2hrcnfbdz.centralindia-01.azurewebsites.net/items")
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
            {item.name} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;