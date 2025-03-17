import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apiEndPoint = "https://api-o0p6.onrender.com/api/user";

export default function AanpassenPage() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetch all users when the component mounts
  useEffect(() => {
    axios
      .get(apiEndPoint)
      .then(({ data }) => setUsers(data.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // Select a user for editing
  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  // Handle input changes for the selected user
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Submit the update for the selected user
  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedUser) {
      console.log("Updating user with ID:", selectedUser.user_id);

      // Log the full URL to make sure it's correct
      const updateUrl = `${apiEndPoint}/${selectedUser.user_id}`;
      console.log("Request URL:", updateUrl);

      axios
        .put(updateUrl, selectedUser)
        .then(() => {
          alert("Gebruiker succesvol aangepast!");
          setSelectedUser(null); // Reset the selected user
        })
        .catch((error) => {
          console.error("Error updating user:", error);
          alert(
            "Er is een fout opgetreden bij het aanpassen van de gebruiker."
          );
        });
    }
  };

  return (
    <div>
      <h2>Pas Gebruiker Aan</h2>

      {/* Display the list of users */}
      <ul>
        {users.map((user) => (
          <li key={user.user_id}>
            {user.first_name} {user.last_name}{" "}
            <button onClick={() => handleUserSelect(user)}>Aanpassen</button>
          </li>
        ))}
      </ul>

      {/* Show the form if a user is selected */}
      {selectedUser && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Voornaam:</label>
            <input
              type="text"
              name="first_name"
              value={selectedUser.first_name}
              onChange={handleInputChange}
              placeholder="Voornaam"
            />
          </div>
          <div>
            <label>Achternaam:</label>
            <input
              type="text"
              name="last_name"
              value={selectedUser.last_name}
              onChange={handleInputChange}
              placeholder="Achternaam"
            />
          </div>
          <div>
            <label>Login:</label>
            <input
              type="text"
              name="login"
              value={selectedUser.login}
              onChange={handleInputChange}
              placeholder="Login"
            />
          </div>
          <div>
            <label>Wachtwoord:</label>
            <input
              type="password"
              name="password"
              value={selectedUser.password}
              onChange={handleInputChange}
              placeholder="Wachtwoord"
            />
          </div>
          <button type="submit">Opslaan</button>
        </form>
      )}

      {/* Knop om terug naar de homepagina (App) te gaan */}
      <Link to="/">Terug naar Home</Link>
    </div>
  );
}
