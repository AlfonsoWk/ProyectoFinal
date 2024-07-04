import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logonav from "../images/logob1.png";
import "../css/NavBar.css";

const NavBar = () => {
  const location = useLocation();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  console.log("Logged in user:", loggedInUser);
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
    localStorage.clear();
    navigate("/login"); // Redireccionar a la página de inicio de sesión
  };

  // Determinar si se debe mostrar el botón de inicio de sesión
  const showLoginButton = () => {
    if (!loggedInUser) {
      return true;
    }
    const loggedInPaths = [
      "/login",
      "/registration",
      "/Reservar",
      "/userpage",
      "/Cancelar",
      "/",
      "/DetallePlan",
      "/Contacto",
      "/Error404",
      "/Nosotros",
      "/Productos",
      "/AdminPage",
      "/UserPage",
      "/Clases",
    ];
    return !loggedInPaths.includes(location.pathname);
  };

  // Obtener la URL del avatar del usuario
  const avatarUrl = loggedInUser ? loggedInUser.avatarUrl : null;

  // Obtener el nombre completo del usuario
  const fullName = loggedInUser ? loggedInUser.fname_lname : "Usuario";

  // Obtener la leyenda del menú basado en el rol del usuario
  const menuLegend = loggedInUser
    ? `${fullName} (${
        loggedInUser.role === "USER" ? "Usuario" : "Administrador"
      })`
    : "Usuario";

  // Determinar la página de redireccionamiento del perfil
  const profilePage =
    loggedInUser && loggedInUser.role === "USER" ? "/Reservar" : "/userpage";

  return (
    <div className="d-flex justify-content-center">
      <Navbar expand="lg" className="navbar navbar-dark bg-dark" id="Navbar">
        <Container id="container-nav">
          <Link to={cadena} id="logo">
            <img
              src={logonav}
              alt=""
              style={{ width: "50px", marginLeft: "10px" }}
            />
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className="d-flex flex-column flex-lg-row gap-2 gap-lg-0 nav-container">
                {!loggedInUser && (
                  <Link
                    to="/Clases"
                    className="ItemNav clases-nav class-1"
                    style={{
                      textDecoration: "none",
                      marginRight: "10px",
                      textAlign: "center",
                    }}
                  >
                    | Clases |
                  </Link>
                )}
                <Link
                  to="/Productos"
                  className="ItemNav class-2"
                  style={{
                    textDecoration: "none",
                    marginRight: "10px",
                    textAlign: "center",
                  }}
                >
                  | Nuestros Productos |
                </Link>
                <Link
                  to="/Nosotros"
                  className="ItemNav class-3"
                  style={{
                    textDecoration: "none",
                    marginRight: "10px",
                    textAlign: "center",
                  }}
                >
                  | Acerca de nosotros |
                </Link>
                <Link
                  to="/Contacto"
                  className="ItemNav class-4"
                  style={{
                    textDecoration: "none",
                    marginRight: "10px",
                    textAlign: "center",
                  }}
                >
                  | Contáctanos |
                </Link>
              </div>
            </Nav>
            <div className="d-flex justify-content-center align-items-center">
              {showLoginButton() ? (
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
                  <button className="pulse">Iniciar Sesion</button>
                </Link>
              ) : (
                <DropdownButton
                  align="end"
                  className="custom-dropdown"
                  title={
                    <span className="d-flex align-items-center">
                      {avatarUrl && (
                        <img
                          src={avatarUrl}
                          alt="Avatar"
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            marginRight: "10px",
                          }}
                        />
                      )}
                      <span>{menuLegend}</span>
                    </span>
                  }
                  id="dropdown-menu-align-end"
                >
                  {loggedInUser && (
                    <>
                      {(loggedInUser.role === "ADMIN" ||
                        loggedInUser.role === "SUPERADMIN" ||
                        loggedInUser.role === "USER") && (
                        <>
                          <Dropdown.Item as={Link} to="/Clases">
                            Clases
                          </Dropdown.Item>
                        </>
                      )}
                      {(loggedInUser.role === "ADMIN" ||
                        loggedInUser.role === "SUPERADMIN") && (
                        <>
                          <Dropdown.Item as={Link} to="/AdminPage">
                            Ir a Clases
                          </Dropdown.Item>
                          <Dropdown.Item as={Link} to="/UserPage">
                            Ir a Usuarios
                          </Dropdown.Item>
                        </>
                      )}
                      {loggedInUser.role === "USER" && (
                        <Dropdown.Item as={Link} to={profilePage}>
                          Reservar
                        </Dropdown.Item>
                      )}
                      <Dropdown.Item onClick={cerrarSesion}>
                        Cerrar Sesion
                      </Dropdown.Item>
                    </>
                  )}
                </DropdownButton>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
