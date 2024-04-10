<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import { Error404 } from "./pages/Error404";
import "bootstrap/dist/css/bootstrap.min.css";


import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React, { useState } from 'react';
import { Footer } from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./


function App() {
  

  return (
    <>

    <Error404/>

    <Footer/>
     <NavBar/>

    </>
  )
}
>>>>>>> 45a29441710cd1f56913aa4598403f52309b956a

export default App;
