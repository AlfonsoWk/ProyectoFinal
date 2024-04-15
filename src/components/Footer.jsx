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
              style={{ width: "11%", marginInline: "-4em",  marginTop: "8px" }}
            />
          </div>
          {/* Redes Sociales */}
          <div
            className="col-sm-12 col-md-6 redes-container"
            /* style={{ marginLeft: "-45em" }} */
          >
            <ul
              className="redes-sociales d-flex"
              /* style={{ marginTop: "-7em", marginLeft: "4em" }} */
            >
              <li style={{ marginRight: "1em" }}>
                <a href="404">
                  <FaFacebookF />
                </a>
              </li>
              <li style={{ marginRight: "1em" }}>
                <a href="404">
                  <FaXTwitter />
                </a>
              </li>
              <li style={{ marginRight: "1em" }}>
                <a href="404">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="404">
                  <FiYoutube />
                </a>
              </li>
            </ul>
          </div>
          {/* Información de cursos y empresa */}
          <div className="col-sm-12 col-md-6">
            <div
              className="container_informacion d-flex"
              style={{ position: "relative" }}
            >
              {/* Información de cursos */}
              <div
                className="informacion_cursos"
                style={{ width: "50%", textAlign: "" }}
              >
                <ul>
                  <li>
                    <a href="404">Sucursales</a>
                  </li>
                  <li>
                    <a href="DetallePlan">Elegí tu plan</a>
                  </li>
                  <li>
                    <a href="404">Pase de Prueba</a>
                  </li>
                  <li>
                    <a href="Productos">Productos</a>
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
                    <a href="Nosotros">Acerca de nosotros</a>
                  </li>
                  <li>
                    <a href="Contacto">Contacto</a>
                  </li>
                  <li>
                    <a href="404">Política de privacidad</a>
                  </li>
                  <li>
                    <a href="404">Club de Beneficios</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <p className="copyright" style={{ textAlign: "center" }}>
          <hr /> {/* Línea horizontal */}
  &copy; {new Date().getFullYear()} Rolling Gym - Todos los derechos reservados. Gral. Paz 576, San Miguel de Tucumán Tucumán, Argentina, Tel: 0381 578-3030
  
</p>

        </div>
      </div>
    </footer>
  );
};