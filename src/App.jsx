import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DetallePlan } from "./pages/DetallePlan"; 
import { Contacto } from "./pages/Contacto"; 
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DetallePlan />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
};

export default App;
