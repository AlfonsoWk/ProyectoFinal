import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

import planes from "../images/planes.jpg";
import musculacion from "../images/musculacion.webp";
import clases_gimnasia from "../images/clases_gimnasia.webp";
import "../css/detallePlan.css";

export const DetallePlan = () => {
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-center">
        <div className="mx-2 mb-3">
          <Card style={{ width: "18rem" }} className="h-100">
            <Card.Img variant="top" src={musculacion} />
            <Card.Body className="text-center">
              <Card.Title className="bg-primary text-white">
                Plan solo musculación
              </Card.Title>
              <Card.Text className="bg-light text-dark">
                La musculación se centra en desarrollar y fortalecer los
                músculos del cuerpo. Esto mejora la fuerza y la forma física.
              </Card.Text>
              <Link to="/contacto" className="btn btn-primary">
                Asociate
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="mx-2 mb-3">
          <Card style={{ width: "18rem" }} className="h-100">
            <Card.Img variant="top" src={clases_gimnasia} />
            <Card.Body className="text-center">
              <Card.Title className="bg-success text-white">
                Plan solo clases
              </Card.Title>
              <Card.Text className="bg-light text-dark">
                El fitness es muy completo, pues a través de los diferentes
                ejercicios que lo conforman se trabajan todas las capacidades
                físicas: resistencia, velocidad, fuerza y flexibilidad.
              </Card.Text>
              <Link to="/contacto" className=" btn btn-success">
                Asociate
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="mx-2 mb-3">
          <Card style={{ width: "18rem" }} className="h-100">
            <Card.Img variant="top" src={planes} />
            <Card.Body className="text-center">
              <Card.Title className="bg-warning text-white">
                Plan Full
              </Card.Title>
              <Card.Text className="bg-light text-dark">
                Este es un plan que te brinda todos los beneficios del fitness y
                musculación.
              </Card.Text>
              <Link to="/contacto" className="btn btn-warning">
                Asociate
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
