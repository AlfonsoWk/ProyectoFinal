import React, { useState, useEffect } from "react";
import SpinnerImage from "../images/logob.png"; // Asegúrate de que la ruta a tu imagen de spinner sea correcta
import Carrusel from "../components/Carrusel";
import Clima from "../components/Clima";
import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import proteinas from "../images/proteinas.jpg";
import indumentaria from "../images/Indumentaria.webp";
import musculacion from "../images/PlasMusculacion.jpg";
import clases from "../images/soloclases.jpg";
import full from "../images/planfull.jpg";
import principal from "../images/Principal.jpg";
import "../css/PaginaPrincipal.css";

const PaginaPrincipal = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div
          className="main-container d-flex align-items-center justify-content-center"
          style={{
            backgroundImage: `${principal}`, // Utiliza la imagen de spinner como fondo
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100vw",
            height: "100vh",
          }}
        >
          <img
            src={SpinnerImage}
            alt="Spinner"
            className="spinner"
            style={{
              animation: "spin 0.8s linear forwards",
              width: "150px",
              height: "150px",
            }}
          />
        </div>
      ) : (
        <div className="main-container">
            <NavBar />

            <Carrusel />

            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-4 mb-3">
                  <div
                    className="planes"
                    style={{
                      color: "white",
                      backgroundColor: "black",
                      textAlign: "center",
                      borderRadius: "50px",
                    }}
                  >
                    <h3>PLAN: MUSCULACION</h3>
                    <Link to="/detalleplan">
                      <img src={musculacion} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div
                    className="planes"
                    style={{
                      color: "white",
                      backgroundColor: "black",
                      textAlign: "center",
                      borderRadius: "50px",
                    }}
                  >
                    <h3>PLAN: SOLO CLASES</h3>
                    <Link to="/detalleplan">
                      <img src={clases} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div
                    className="planes"
                    style={{
                      color: "white",
                      backgroundColor: "black",
                      textAlign: "center",
                      borderRadius: "50px",
                    }}
                  >
                    <h3>PLAN: FULL</h3>
                    <Link to="/detalleplan">
                      <img src={full} alt="" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-md-6 mb-3">
                  <div
                    className="ventas"
                    style={{
                      color: "white",
                      backgroundColor: "black",
                      textAlign: "center",
                      borderRadius: "50px",
                    }}
                  >
                    <div id="suplementos">
                      <h3>SUPLEMENTOS</h3>
                      <Link to="/productos">
                        <img src={proteinas} alt="" className="imagenes" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <div
                    className="ventas"
                    style={{
                      color: "white",
                      backgroundColor: "black",
                      textAlign: "center",
                      borderRadius: "50px",
                    }}
                  >
                    <div id="indumentaria">
                      <h3>ROPA DEPORTIVA</h3>
                      <Link to="/productos">
                        <img src={indumentaria} alt="" className="imagenes" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col">
                  <div className="clima">
                    <Clima />
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
      )}
    </>
  );
};

export default PaginaPrincipal;
