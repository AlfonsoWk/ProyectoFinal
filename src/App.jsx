//import { useState } from "react";

import Registration from "./pages/Registration.jsx";
import Login from "./pages/Login.jsx";
import { DetallePlan } from "./pages/DetallePlan";
import { Contacto } from "./pages/Contacto";
import { Error404 } from "./pages/Error404";
import Nosotros from "./pages/Nosotros";
import Productos from "./pages/Productos.jsx";

import { AdminPage } from "./pages/AdminPage.jsx";
import { UserPage } from "./pages/UserPage.jsx";

//import PaginaPrincipal from "./pages/PaginaPrincipal.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  /* const [count, setCount,] = useState(0) */

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<PaginaPrincipal />} /> */}
        <Route path="/Registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/DetallePlan" element={<DetallePlan />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Productos" element={<Productos />} />
      </Routes>
    </Router>
  );
}

export default App;
