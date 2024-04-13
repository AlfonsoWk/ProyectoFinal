import React from "react";
import error404 from "../images/error404.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const Error404 = () => {
  const handleVolver = () => {
    window.location.href = "/";
  };

  return (
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
          style={{ maxWidth: "40%", maxHeight: "40%", marginTop: 10 }}
        />
      </div>
      <Link to="/" style={{ position: "absolute", top: 10, left: 10 }}>
        <Button variant="primary" onClick={handleVolver}>
          Volver
        </Button>
      </Link>
    </div>
  );
};
