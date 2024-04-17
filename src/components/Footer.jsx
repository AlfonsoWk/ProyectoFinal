import React from "react";
import { FaInstagram,FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

import "../css/footer.css";
import logob from "../images/logob.png";

// Componente Footer
export const Footer = () => {
  return (
    <footer className="footer footer-negro" style={{borderRadius:"50px"}}>
      <div className="container" >
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
          <div className="col-sm-12 col-md-6 redes-container">
            <ul className="redes-sociales d-flex">
              <li style={{ marginRight: "1em" }}>
                <Link to="/ruta-facebook">
                  <FaFacebookF />
                </Link>
              </li>
              <li style={{ marginRight: "1em" }}>
                <Link to="/ruta-twitter">
                  <FaXTwitter />
                </Link>
              </li>
              <li style={{ marginRight: "1em" }}>
                <Link to="/ruta-instagram">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link to="/ruta-youtube">
                  <FiYoutube />
                </Link>
              </li>
            </ul>
          </div>

          {/* Información de cursos y empresa */}
          <div className="col-sm-12 col-md-6">
            <div className="container_informacion d-flex" style={{ position: "relative"}}>
              {/* Información de cursos */}
              <div className="informacion_cursos" style={{ width: "50%", textAlign: "" }}>
                <ul>
                  <li>
                    <Link to="/sucursales">Sucursales</Link>
                  </li>
                  <li>
                    <Link to="/elegir-plan">Elegí tu plan</Link>
                  </li>
                  <li>
                    <Link to="/pase-de-prueba">Pase de Prueba</Link>
                  </li>
                  <li>
                    <Link to="/productos">Productos</Link>
                  </li>
                </ul>
              </div>

              {/* Información de empresa */}
              <div className="informacion_empresa" style={{ width: "50%", textAlign: "center", position: "absolute"}}>
                <ul>
                  <li>
                    <Link to="/nosotros">Acerca de nosotros</Link>
                  </li>
                  <li>
                    <Link to="/contacto">Contacto</Link>
                  </li>
                  <li>
                    <Link to="/politica-privacidad">Política de privacidad</Link>
                  </li>
                  <li>
                    <Link to="/club-beneficios">Club de Beneficios</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Información de derechos de autor */}
          <p className="copyright" style={{ textAlign: "center" }}>
            <hr /> {/* Línea horizontal */}
            &copy; {new Date().getFullYear()} Rolling Gym - Todos los derechos reservados. Gral. Paz 576, San Miguel de Tucumán Tucumán, Argentina, Tel: 0381 578-3030
          </p>

        </div>
      </div>
    </footer>
  );
};
