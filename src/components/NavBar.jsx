import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import logonav from "../images/logob1.png";
import "../css/NavBar.css";

const NavBar = () => {
  let cadena = ""
  
  const user =  JSON.parse(localStorage.getItem("loggedInUser"))
  if (user.role === "ADMIN" ||
      user.role ==="SUPERADMIN"){
    cadena = "/AdminPage"
  }

  if(user.role ==="USER"){
    cadena = "/Reservar"
  }

 console.log("la cadena que se arma es ",cadena)

  return (
    <div className="d-flex justify-content-center">
      <Navbar expand="lg" className="navbar navbar-dark bg-dark" id="Navbar">
        <Container id="container-nav">
          
          <Navbar.Brand href="/" id="logo">
            {" "}
            <img src={logonav} alt="" style={{ width: "50px", marginLeft: "10px" }} />{" "}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className="d-flex flex-column flex-lg-row gap-2 gap-lg-0" style={{display:"Flex", margin:"auto", alignItems:"center", marginBottom:"20px", marginTop:"20px"}}>
                <Link to= {cadena} className="ItemNav" style={{textDecoration: "none", marginRight:"10px"}}>
                  | Clases |
                </Link>
                <Link to="/Productos" className="ItemNav" style={{textDecoration: "none", marginRight:"10px"}}>
                  | Nuestos Productos |
                </Link>
                <Link to="/Nosotros" className="ItemNav" style={{textDecoration: "none", marginRight:"10px"}}>
                  | Acerca de nosotros |
                </Link>
                <Link to="/Contacto" className="ItemNav" style={{textDecoration: "none", marginRight:"10px"}}>
                  | Contactanos |
                </Link>
              </div>
            </Nav>
            <div className="d-flex justify-content-center align-items-center">
              <Link to="/login" className="ItemNav" style={{ textDecoration: "none", marginRight: "10px", marginBottom:"20px", marginTop:"20px" }}> 
                <button className="btn btn-secondary btn-hover">Inicia Sesión</button>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

