import React, { useState } from "react";
import error404 from "../images/error404.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import p404 from "../images/404.jpg";
import "../css/error404.css";

export const Error404 = () => {
  const [hovered, setHovered] = useState(false);

  const handleVolver = () => {
    window.location.href = "/";
  };

  return (
    <div
      style={{
        backgroundImage: `url(${p404})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div style={{ position: "relative" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={error404}
            alt="pagina Error"
            className="error404"
            /*          style={{ 
            maxWidth: "40%", 
            maxHeight: "40%", 
            marginTop: 10,
          }} */
          />
        </div>
        <Link to="/" style={{ position: "absolute", top: 10, left: 10}}>
          <Button
            variant="outline-danger"
            style={{ fontWeight: "bold" }}
            onClick={handleVolver}
            className={`rotate vibrate-on-hover ${hovered ? "vibrate" : ""}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Volver
          </Button>
        </Link>
      </div>
    </div>
  );
};
