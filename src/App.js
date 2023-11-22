import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const apiUrl = "/api/restaurants";
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setRestaurants(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const groupRestaurantsByState = () => {
    const groupedRestaurants = {};

    restaurants.forEach((restaurant) => {
      const state = restaurant.state;
      if (!groupedRestaurants[state]) {
        groupedRestaurants[state] = [];
      }
      groupedRestaurants[state].push(restaurant);
    });
    console.log(groupedRestaurants);
    return groupedRestaurants;
  };

  const groupedRestaurants = groupRestaurantsByState();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Restaurants by state</h1>
      {Object.keys(groupedRestaurants).map((state) => (
        <div key={state}>
          <h2>{state}:</h2>
          <ul>
            {groupedRestaurants[state].map((restaurant) => (
              <li key={restaurant.restaurant_name}>
                {restaurant.restaurant_name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
