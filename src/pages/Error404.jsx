import React from "react";
import error404 from "../images/error404.png";
import Button from "react-bootstrap/Button";

export const Error404 = () => {
  const handleVolver = () => {
    // Redirige al usuario a la página principal
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
      <div style={{ position: "absolute", top: 10, left: 10 }}>
        {/* Llama a la función handleVolver cuando se hace clic en el botón */}
        <Button variant="primary" onClick={handleVolver}>Volver</Button>
      </div>
    </div>
  );
};
