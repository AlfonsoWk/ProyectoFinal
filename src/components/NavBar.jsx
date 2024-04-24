import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logonav from "../images/logob1.png";
import "../css/NavBar.css";

const NavBar = () => {
  const location = useLocation();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  let cadena = "/";
  const navigate = useNavigate();

  // Determinar la ruta de redireccionamiento dependiendo del tipo de usuario
  if (loggedInUser) {
    if (loggedInUser.role === "ADMIN" || loggedInUser.role === "SUPERADMIN") {
      cadena = "/AdminPage";
    } else if (loggedInUser.role === "USER") {
      cadena = "/Reservar";
    }
  }

  const cerrarSesion = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login"); // Redireccionar a la página de inicio de sesión
  };

  // Determinar si se debe mostrar el botón de inicio de sesión
  const showLoginButton = () => {
    return (
      !loggedInUser ||
      (loggedInUser &&
        location.pathname !== "/login" &&
        location.pathname !== "/registration" &&
        location.pathname !== "/Reservar" &&
        location.pathname !== "/userpage" &&
        location.pathname !== "/Cancelar" &&
        location.pathname !== "/" &&
        location.pathname !== "/DetallePlan" &&
        location.pathname !== "/Contacto" &&
        location.pathname !== "/Error404" &&
        location.pathname !== "/Nosotros" &&
        location.pathname !== "/Productos" &&
        location.pathname !== "/AdminPage" &&
        location.pathname !== "/UserPage"
        &&
        location.pathname !== "/Clases")
    );
  };

  return (
    <div className="d-flex justify-content-center">
      <Navbar expand="lg" className="navbar navbar-dark bg-dark" id="Navbar">
        <Container id="container-nav">
          <Navbar.Brand href="/" id="logo">
            {" "}
            <img
              src={logonav}
              alt=""
              style={{ width: "50px", marginLeft: "10px" }}
            />{" "}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className="d-flex flex-column flex-lg-row gap-2 gap-lg-0 nav-container">
                <Link
                  to="/Clases"
                  className="ItemNav clases-nav class-1"
                  style={{ textDecoration: "none", marginRight: "10px", textAlign: "center" }}
                >
                  | Clases |
                </Link>
                <Link
                  to="/Productos"
                  className="ItemNav class-2"
                  style={{ textDecoration: "none", marginRight: "10px", textAlign: "center" }}
                >
                  | Nuestros Productos |
                </Link>
                <Link
                  to="/Nosotros"
                  className="ItemNav class-3"
                  style={{ textDecoration: "none", marginRight: "10px", textAlign: "center" }}
                >
                  | Acerca de nosotros |
                </Link>
                <Link
                  to="/Contacto"
                  className="ItemNav class-4"
                  style={{ textDecoration: "none", marginRight: "10px", textAlign: "center" }}
                >
                  | Contáctanos |
                </Link>
              </div>
            </Nav>
            <div className="d-flex justify-content-center align-items-center">
              {showLoginButton() && (
                <Link
                  to="/login"
                  className="ItemNav"
                  style={{
                    textDecoration: "none",
                    marginRight: "10px",
                    marginBottom: "20px",
                    marginTop: "20px",
                  }}
                >
                  <button class="pulse">Iniciar Sesion</button>
                </Link>
              )}
            </div>
            {loggedInUser && (
              <button class="raise" onClick={cerrarSesion}>
                Cerrar Sesion
              </button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
