
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

import React, { useState } from 'react';
import { Error404 } from "./pages/Error404";
import "bootstrap/dist/css/bootstrap.min.css";


import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React, { useState } from 'react';
import { Footer } from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar";
import { useState } from "react";
import { AdminPage } from "./pages/AdminPage.jsx";
import { UserPage } from "./pages/UserPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    </>
  )
}


export default App;
