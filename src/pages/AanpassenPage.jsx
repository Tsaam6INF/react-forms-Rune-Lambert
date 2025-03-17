// src/pages/AanpassenPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const apiEndPoint = "https://api-o0p6.onrender.com/api/user";

export default function AanpassenPage() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

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

  const handleEdit = (user) => {
    setSelectedUser(user);
    setFirstName(user.first_name);
    setLastName(user.last_name);
    setLogin(user.login);
    setPassword(user.password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      first_name: firstName,
      last_name: lastName,
      login,
      password,
    };

    axios
      .put(`${apiEndPoint}/${selectedUser.user_id}`, updatedUser)
      .then((response) => {
        alert("Gebruiker aangepast!");
        setSelectedUser(null);
      })
      .catch((error) => {
        console.error("Fout bij aanpassen gebruiker:", error);
      });
  };

  return (
    <div>
      <h1>Aanpassen Gebruiker</h1>
      <ul>
        {users.map((user) => (
          <li key={user.user_id}>
            {user.first_name} {user.last_name}
            <button onClick={() => handleEdit(user)}>Aanpassen</button>
          </li>
        ))}
      </ul>

      {selectedUser && (
        <div>
          <h2>
            Aanpassen voor {selectedUser.first_name} {selectedUser.last_name}
          </h2>
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
            <button type="submit">Opslaan</button>
          </form>
        </div>
      )}
    </div>
  );
}
