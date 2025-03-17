// src/pages/GebruikersPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const apiEndPoint = "https://api-o0p6.onrender.com/api/user";

export default function GebruikersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(apiEndPoint)
      .then(({ data }) => {
        console.log("Gebruikers data geladen:", data); // Voeg deze regel toe
        setUsers(data.data); // Zorg ervoor dat je 'data.data' gebruikt omdat het antwoord object is
      })
      .catch((error) => {
        console.error(
          "Er is een fout bij het ophalen van de gebruikers:",
          error
        );
      });
  }, []);

  return (
    <div>
      <h1>Gebruikers</h1>
      <ul>
        {users.map((user) => (
          <li key={user.user_id}>
            {user.first_name} {user.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
}
