//import { useState } from "react";

//import Principal from "./components/Principal"
import Registration from "./components/Registration";
import Login from "./components/Login";
import DashboardUser from "./components/DashboardUser";
import { DetallePlan } from "./pages/DetallePlan";
import { Contacto } from "./pages/Contacto";
import { Error404 } from "./pages/Error404";
import Nosotros from "./pages/Nosotros";
import Productos from "./pages/Productos.jsx";

//import { Footer } from "./components/Footer";
//import NavBar from "../components/NavBar";
import { AdminPage } from "./pages/AdminPage.jsx";
import { UserPage } from "./pages/UserPage.jsx";

//import Principal from "./pages/PaginaPrincipal.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  /* const [count, setCount,] = useState(0) */

  return (
    <Router>
      <Routes>
{/*         <Route path="/" element={<Principal />} />
 */}        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboarduser" element={<DashboardUser />} />
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
