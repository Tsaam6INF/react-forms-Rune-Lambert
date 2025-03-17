// src/components/GetData.js
import React from "react";
import { Link } from "react-router-dom";

export default function GetData({ users }) {
  return (
    <div>
      <h2>Lijst van Gebruikers:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.user_id}>
            <Link to={`/aanpassen/${user.user_id}`}>
              {user.first_name} {user.last_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
