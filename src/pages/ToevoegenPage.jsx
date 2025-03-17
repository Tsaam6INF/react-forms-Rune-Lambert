// src/pages/ToevoegenPage.jsx
import React, { useState } from "react";
import axios from "axios";

const apiEndPoint = "https://api-o0p6.onrender.com/api/user";

export default function ToevoegenPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      first_name: firstName,
      last_name: lastName,
      login,
      password,
    };

    axios
      .post(apiEndPoint, newUser)
      .then((response) => {
        alert("Gebruiker toegevoegd!");
        setFirstName("");
        setLastName("");
        setLogin("");
        setPassword("");
      })
      .catch((error) => {
        console.error("Fout bij toevoegen gebruiker:", error);
      });
  };

  return (
    <div>
      <h1>Voeg Gebruiker Toe</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Voornaam:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Achternaam:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Login:</label>
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div>
          <label>Wachtwoord:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Toevoegen</button>
      </form>
    </div>
  );
}
