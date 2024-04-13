import React from "react";
import { FaInstagram,FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

import "../css/footer.css";
import logob from "../images/logob.png";

export const Footer = () => {
  return (
    <footer className="footer footer-negro">
      <div className="container">
        <div className="row">
          {/* Logo */}
          <div className="col-sm-12 col-md-6 logo-container">
            <img
              src={logob}
              alt="Logo Empresa"
              style={{ width: "auto", marginLeft: "-3em", marginTop: "1em" }}
            />
          </div>
          {/* Redes Sociales */}
          <div
            className="col-sm-12 col-md-6 redes-container"
            style={{ marginLeft: "-45em", marginTop: "12em" }}
          >
            <ul
              className="redes-sociales d-flex"
              style={{ marginTop: "-7em", marginLeft: "4em" }}
            >
              <li style={{ marginRight: "1em" }}>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li style={{ marginRight: "1em" }}>
                <a href="#">
                  <FaXTwitter />
                </a>
              </li>
              <li style={{ marginRight: "1em" }}>
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <FiYoutube />
                </a>
              </li>
            </ul>
          </div>
          {/* Información de cursos y empresa */}
          <div className="col-sm-12 col-md-6" style={{ marginTop: "1em"}}>
            <div
              className="container_informacion d-flex"
              style={{ position: "relative" }}
            >
              {/* Información de cursos */}
              <div
                className="informacion_cursos"
                style={{ width: "50%", textAlign: "center" }}
              >
                <ul>
                  <li>
                    <a href="#">Sucursales</a>
                  </li>
                  <li>
                    <a href="#">Elegí tu plan</a>
                  </li>
                  <li>
                    <a href="#">Pase de Prueba</a>
                  </li>
                  <li>
                    <a href="#">Productos</a>
                  </li>
                </ul>
              </div>
              {/* Información de empresa */}
              <div
                className="informacion_empresa"
                style={{
                  width: "50%",
                  textAlign: "center",
                  position: "absolute",
                }}
              >
                <ul>
                  <li>
                    <a href="#">Acerca de nosotros</a>
                  </li>
                  <li>
                    <a href="#">Contacto</a>
                  </li>
                  <li>
                    <a href="#">Política de privacidad</a>
                  </li>
                  <li>
                    <a href="#">Club de Beneficios</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="copyright" style={{ textAlign: "center" }}>
        &copy; {new Date().getFullYear()} Rolling Gym - Todos los derechos
        reservados. Gral. Paz 576, San Miguel de Tucumán Tucumán, Argentina,
        Tel: 0381 578-3030
      </p>
    </footer>
  );
};
