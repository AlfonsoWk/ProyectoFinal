import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import logonav from "../images/logob1.png";
import "../css/NavBar.css";

//className="bg-body-tertiary" navbar navbar-dark bg-dark

const NavBar = () => {
  return (
    <Navbar expand="lg" className="navbar navbar-dark bg-dark" id="Navbar">
      <Container id="container-nav">
        
        <Navbar.Brand href="#home" id="logo">
          {" "}
          <img src={logonav} alt="" style={{ width: "50px", marginLeft: "10px" }} />{" "}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="ItemNav" style={{marginLeft: "-1em"}}>
              Clases
            </Nav.Link>
            
            <Link to="/login" className="ItemNav" style={{ textDecoration: "none", marginTop: "8px" }}> 
              Inicia Sesion
            </Link>

            {
              /*
                <Nav.Link href="login" className="ItemNav">
              Inicia Sesion
            </Nav.Link>
              */
            }
            <Nav.Link href="Nosotros" className="ItemNav">
              Acerca de nosotros
            </Nav.Link>
            <Nav.Link href="Productos" className="ItemNav">
              Nuestros Productos
            </Nav.Link>
            <Nav.Link href="Contacto" className="ItemNav">
              Contactanos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
