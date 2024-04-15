import React, { useState, useEffect } from "react";
import SpinnerImage from "../images/logob.png"; // Asegúrate de que la ruta a tu imagen de spinner sea correcta
import Carrusel from "../components/Carrusel";
import Clima from "../components/Clima";
import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";
import proteinas from "../images/proteinas.jpg";
import indumentaria from "../images/Indumentaria.webp";
import musculacion from "../images/PlasMusculacion.jpg";
import clases from "../images/soloclases.jpg";
import full from "../images/planfull.jpg";
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
            backgroundImage: `url(src/images/Principal.jpg)`, // Utiliza la imagen de spinner como fondo
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
        <>
        <div className="main-container">
          <NavBar />
          
            <Carrusel />

            <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="planes">
              <h5>PLAN: MUSCULACION</h5>
              <img src={musculacion} alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="planes">
              <h4>PLAN: SOLO CLASES</h4>
              <img src={clases} alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="planes">
              <h4>PLAN: FULL</h4>
              <img src={full} alt="" />
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="ventas">
              <div id="suplementos">
                <h3>SUPLEMENTOS</h3>
                <img src={proteinas} alt="" className="imagenes" />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="ventas">
              <div id="indumentaria">
                <h3>ROPA DEPORTIVA</h3>
                <img src={indumentaria} alt="" className="imagenes" />
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
          
        </>
      )}
    </>
  );
};

export default PaginaPrincipal;
