import React from "react";
import Container from "react-bootstrap/Container";
import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom"; // Importar Link
import gym3 from "../images/gym3.jpg";
import "../css/Nosotros.css"; // Importa tu archivo de estilos CSS

function Nosotros() {
  return (
    <div
      style={{
        backgroundImage: `url(${gym3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <NavBar />
      <h1 className="nosotros-container">Nosotros</h1>
      <Container style={{ display: "flex" }}>
        <div className="card1 badge">
          <div className="text">
            Alfonso Wenk
            <Link
              to="https://www.linkedin.com/in/alfonso-wenk/"
              className="linkedin-link"
              target="_blank"
            >
              <AiFillLinkedin className="icon" />
            </Link>
            <Link to="https://www.facebook.com/" className="facebook-link"  target="_blank">
              <FaFacebook className="icon" />
            </Link>
            <Link to="https://github.com/AlfonsoWk/" className="github-link"  target="_blank">
              <FaGithub className="icon" />
            </Link>
          </div>
        </div>
        <div className="card2 badge">
          <div className="text">
            Facundo Luque
            <Link
              to="https://www.linkedin.com/in/facundo-luque-820a05245/"
              className="linkedin-link"
              target="_blank"
            >
              <AiFillLinkedin className="icon" />
            </Link>
            <Link to="https://www.facebook.com/" className="facebook-link" target="_blank">
              <FaFacebook className="icon" />
            </Link>
            <Link to="https://github.com/facundo-luque" className="github-link" target="_blank">
              <FaGithub className="icon" />
            </Link>
          </div>
        </div>
        <div className="card3 badge">
          <div className="text">
            German Valoy
            <Link
              to="https://www.linkedin.com/in/augusto-germ%C3%A1n-valoy-a8b7183a/"
              className="linkedin-link"
              target="_blank"
            >
              <AiFillLinkedin className="icon" />
            </Link>
            <Link to="https://www.facebook.com/" className="facebook-link" target="_blank">
              <FaFacebook className="icon" />
            </Link>
            <Link to="https://github.com/GermanValoy" className="github-link" target="_blank">
              <FaGithub className="icon" />
            </Link>
          </div>
        </div>
        <div className="card4 badge">
          <div className="text">
            Esteban Frias
            <Link to="https://www.linkedin.com/" className="linkedin-link" target="_blank">
              <AiFillLinkedin className="icon" />
            </Link>
            <Link to="https://www.facebook.com/" className="facebook-link" target="_blank">
              <FaFacebook className="icon" />
            </Link>
            <Link to="hhttps://github.com/Estebanfrias15" className="github-link" target="_blank">
              <FaGithub className="icon" />
            </Link>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Nosotros;
