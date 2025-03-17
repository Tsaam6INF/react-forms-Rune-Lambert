// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GebruikersPage from "./pages/GebruikersPage";
import ToevoegenPage from "./pages/ToevoegenPage";
import AanpassenPage from "./pages/AanpassenPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/gebruikers" element={<GebruikersPage />} />
        <Route path="/toevoegen" element={<ToevoegenPage />} />
        <Route path="/aanpassen" element={<AanpassenPage />} />
      </Routes>
    </Router>
  );
}

export default App;
