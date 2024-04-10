import { useState } from "react";
import { AdminPage } from "./pages/AdminPage.jsx";
import { UserPage } from "./pages/UserPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/administrador" element={<AdminPage />} />
        <Route path="/usuarios" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
