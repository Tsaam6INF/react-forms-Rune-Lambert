// src/components/Form.js
import React, { useState, useEffect } from "react";

export default function Form({ user, onSubmit }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    login: "",
    password: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        first_name: user.first_name,
        last_name: user.last_name,
        login: user.login,
        password: "", // Wachtwoord wordt niet vooraf ingevuld
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Roep de onSubmit functie aan die door de pagina wordt meegegeven
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="first_name"
        placeholder="Voornaam"
        value={formData.first_name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="last_name"
        placeholder="Achternaam"
        value={formData.last_name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="login"
        placeholder="Login"
        value={formData.login}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Wachtwoord"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">
        {user ? "Bewerk Gebruiker" : "Voeg Gebruiker Toe"}
      </button>
    </form>
  );
}
