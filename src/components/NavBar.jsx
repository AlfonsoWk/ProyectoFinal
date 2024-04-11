import React from 'react'
import "../css/NavBar.css"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logonav from "../images/logob1.png"



//className="bg-body-tertiary" navbar navbar-dark bg-dark


const NavBar = () => {
  return (
    <Navbar expand="lg" className="navbar navbar-dark bg-dark"  id='Navbar'>
    <Container id='container-nav'>
       
    <Navbar.Brand href="#home" id='logo'>  <img src={logonav} alt="" /> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
         
          <Nav.Link href="#home" className='ItemNav'>Clases</Nav.Link>
          <Nav.Link href="#link" className='ItemNav'>Inicia Sesion</Nav.Link>
          <Nav.Link href="#link" className='ItemNav'>Acerca de nosotros</Nav.Link>
          <Nav.Link href="#link" className='ItemNav'>Nuestros Productos</Nav.Link>
          <Nav.Link href="#link" className='ItemNav'>Contactanos</Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar