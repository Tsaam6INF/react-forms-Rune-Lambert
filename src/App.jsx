import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import GebruikersPage from "./pages/GebruikersPage";
import ToevoegenPage from "./pages/ToevoegenPage";
import AanpassenPage from "./pages/AanpassenPage";

function App() {
  return (
    <Router>
      <div>
        {/* Navigatie knoppen bovenaan */}
        <nav>
          <ul>
            <li>
              <Link to="/gebruikers">Gebruikers</Link>
            </li>
            <li>
              <Link to="/toevoegen">Toevoegen</Link>
            </li>
            <li>
              <Link to="/aanpassen">Aanpassen</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<h1>Welkom op de Homepagina</h1>} />
          <Route path="/gebruikers" element={<GebruikersPage />} />
          <Route path="/toevoegen" element={<ToevoegenPage />} />
          <Route path="/aanpassen" element={<AanpassenPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
