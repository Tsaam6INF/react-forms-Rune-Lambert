import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apiEndPoint = "https://api-o0p6.onrender.com/api/user";

export default function ToevoegenPage() {
  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    login: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(apiEndPoint, newUser).then(() => {
      alert("Gebruiker toegevoegd!");
      setNewUser({ first_name: "", last_name: "", login: "", password: "" });
    });
  };

  return (
    <div>
      <h2>Voeg Gebruiker Toe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="first_name"
          value={newUser.first_name}
          onChange={handleInputChange}
          placeholder="Voornaam"
        />
        <input
          type="text"
          name="last_name"
          value={newUser.last_name}
          onChange={handleInputChange}
          placeholder="Achternaam"
        />
        <input
          type="text"
          name="login"
          value={newUser.login}
          onChange={handleInputChange}
          placeholder="Login"
        />
        <input
          type="password"
          name="password"
          value={newUser.password}
          onChange={handleInputChange}
          placeholder="Wachtwoord"
        />
        <button type="submit">Toevoegen</button>
      </form>

      {/* Knop om terug naar de homepagina (App) te gaan */}
      <Link to="/">Terug naar Home</Link>
    </div>
  );
}
