import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { crearClases } from "../helpers/apiClases";

export const CreateCourseModal = (props) => {
  const [formValues, setFormValues] = useState({
    nombre: "",
    inicio: "",
    fin: "",
    profesor: "",
    cupos_disponibles: 0,
    cupos: "",
    disponible: true,
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleOnChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async () => {
    const isEmptyField = Object.values(formValues).some(
      (value) => value === ""
    );
    if (isEmptyField) {
      setErrorMessage("Todos los campos son requeridos.");
      return;
    }

    if (parseInt(formValues.inicio) >= parseInt(formValues.fin)) {
      setErrorMessage("La hora de inicio debe ser menor que la hora de fin.");
      return;
    }

    const inicioHora = parseInt(formValues.inicio);
    if (inicioHora < 7) {
      setErrorMessage("La hora de inicio debe ser posterior a las 7hs.");
      return;
    }

    const finHora = parseInt(formValues.fin);
    if (finHora > 23) {
      setErrorMessage("La hora de fin debe ser anterior a las 23hs.");
      return;
    }

    await crearClases(formValues);
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Administrador de contenido
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="nombre">
            <Form.Label>Nombre de la Clase</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={formValues.nombre}
              onChange={handleOnChange}
              autoFocus
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="inicio">
            <Form.Label>Hora Inicio</Form.Label>
            <Form.Control
              type="number"
              name="inicio"
              value={formValues.inicio}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="fin">
            <Form.Label>Hora Fin</Form.Label>
            <Form.Control
              type="number"
              name="fin"
              value={formValues.fin}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="profesor">
            <Form.Label>Profesor</Form.Label>
            <Form.Control
              type="text"
              name="profesor"
              value={formValues.profesor}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="cupos_disponibles">
            <Form.Label>Cupos Disponibles</Form.Label>
            <Form.Control
              type="number"
              name="cupos_disponibles"
              value={formValues.cupos_disponibles}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="cupos">
            <Form.Label>Cupos</Form.Label>
            <Form.Control
              type="number"
              name="cupos"
              value={formValues.cupos}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
        </Form>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleOnSubmit}>
          Agregar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
