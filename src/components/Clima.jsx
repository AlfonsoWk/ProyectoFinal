import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../css/Clima.css";
import consultarClima from "../helpers/consultarClima";

const Clima = () => {
  const [ubicacion, setUbicacion] = useState(null);

  useEffect(() => {
    obtenerUbicacion();
  }, []);

  const obtenerUbicacion = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUbicacion({ lat: latitude, lon: longitude });
          consultarClima({ lat: latitude, lon: longitude });
        },
        (error) => {
          console.error("Error al obtener la ubicación:", error);
        }
      );
    } else {
      console.error("La geolocalización no está soportada por este navegador.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    consultarClima(ubicacion);
  };

  return (
    <>
      {/*     <Form onSubmit={handleSubmit}>
        <Button variant="outline-light" type="submit">
          Consultar clima
        </Button>
      </Form> */}
      <div id="infoClima"></div>
    </>
  );
};

export default Clima;
