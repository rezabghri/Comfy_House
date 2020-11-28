import React, { useState, useEffect } from "react";

export default function List() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/categories", {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": process.env.REACT_APP_AUTH_TOKEN,
      },
      method: "GET",
    })
      .then((data) => data.json())
      .then((res) => setCategory(res));
  }, []);

  return (
    <div>
      <div className="category">
        <ul>
          {category.map((item) => {
            return (
              <li key={item.id}>
                <a>{item.name}</a>
                
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
