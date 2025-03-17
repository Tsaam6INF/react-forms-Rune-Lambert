import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apiEndPoint = "https://api-o0p6.onrender.com/api/user";

export default function GebruikersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(apiEndPoint).then(({ data }) => setUsers(data.data));
  }, []);

  return (
    <div>
      <h2>Gebruikers</h2>
      <ul>
        {users.map((user) => (
          <li key={user.user_id}>
            {user.first_name} {user.last_name}
          </li>
        ))}
      </ul>

      {/* Knop om terug naar de homepagina (App) te gaan */}
      <Link to="/">Terug naar Home</Link>
    </div>
  );
}
