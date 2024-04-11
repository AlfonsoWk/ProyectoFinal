import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NaviBar from "./NaviBar";
import SpinnerImage from "../images/logob.png";
import "../css/Login.css";

const Principal = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); 

    
    return () => clearTimeout(timer);
  }, []); 

  return (
    <div
      style={{
        backgroundImage: `url('src/images/Principal.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      {loading ? (
    
        <div className="d-flex align-items-center justify-content-center" style={{ width: '100vw', height: '100vh', backgroundImage: `url('src/images/Principal.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

          <img
            src={SpinnerImage}
            alt="Spinner"
            className="spinner"
            style={{
              animation: "spin 0.8s linear forwards",
              width: "300px",
              height: "300px",
            }}
          />
        </div>
      ) : (
        
        <>
          <NaviBar />
          <div className="container">
            <h1 className="mt-5">ROLLING GYM</h1>
            <ul>
              <li>
                <Link to="/login">Iniciar Sesión</Link>
              </li>
              <li>
                <Link to="/registration">Registro</Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Principal;
