import React, { useState, useEffect } from "react";
import api from "../api";

const ReservationsPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [tables, setTables] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await api.get("/graphql", {
        query: `
          query {
            restaurants {
              id
              name
              address
              phone
            }
          }
        `,
      });
      setRestaurants(response.data.data.restaurants);
    };
    fetchRestaurants();
  }, []);

  const handleRestaurantSelect = async (restaurantId) => {
    setSelectedRestaurant(restaurantId);
    const response = await api.post("/graphql", {
      query: `
        query {
          tables(restaurantId: ${restaurantId}) {
            id
            capacity
            isAvailable
          }
        }
      `,
    });
    setTables(response.data.data.tables);
  };

  return (
    <div>
      <h1>Reservas</h1>
      <select onChange={(e) => handleRestaurantSelect(e.target.value)}>
        <option value="">Selecciona un restaurante</option>
        {restaurants.map((restaurant) => (
          <option key={restaurant.id} value={restaurant.id}>
            {restaurant.name}
          </option>
        ))}
      </select>

      {tables.length > 0 && (
        <div>
          <h2>Mesas disponibles</h2>
          <ul>
            {tables.map((table) => (
              <li key={table.id}>
                Mesa para {table.capacity} personas -{" "}
                {table.isAvailable ? "Disponible" : "Ocupada"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ReservationsPage;