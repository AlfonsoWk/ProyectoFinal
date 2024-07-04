import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { createUser } from "../helpers/apiUsers";

export const CreateUserModal = (props) => {
  const [formValues, setFormValues] = useState({
    fname_lname: "",
    email: "",
    telefono: "",
    planContratado: "",
    password: "",
    cpassword: "",
    role: "",
    status: "",
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

    if (formValues.role !== "USER" && formValues.role !== "ADMIN") {
      setErrorMessage("El rol debe ser USER o ADMIN.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formValues.email)) {
      setErrorMessage("El correo electrónico no es válido.");
      return;
    }

    if (formValues.password !== formValues.cpassword) {
      setErrorMessage("Las contraseñas no coinciden.");
      return;
    }

    if (formValues.password.length < 6) {
      setErrorMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    const newUser = { ...formValues };

    console.log("el usuario de admin page es: ", newUser);
    await createUser(newUser);
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
          <Form.Group className="mb-3" controlId="fname_lname">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control
              type="text"
              name="fname_lname"
              value={formValues.fname_lname}
              onChange={handleOnChange}
              autoFocus
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="telefono">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="number"
              name="telefono"
              value={formValues.telefono}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="planContratado">
            <Form.Label>Plan Contratado</Form.Label>
            <Form.Control
              as="select"
              name="planContratado"
              value={formValues.planContratado}
              onChange={handleOnChange}
              required
            >
              <option value={null}>Selecciona un Plan</option>
              <option value="solo Musculacion">Plan solo musculación</option>
              <option value="solo Clases">Plan solo clases</option>
              <option value="full">Plan full</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="cpassword">
            <Form.Label>Repeti tu contraseña</Form.Label>
            <Form.Control
              type="password"
              name="cpassword"
              value={formValues.cpassword}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="role">
            <Form.Label>Rol</Form.Label>
            <Form.Control
              as="select"
              name="role"
              value={formValues.role}
              onChange={handleOnChange}
              required
            >
              <option value="">Selecciona un Rol</option>
              <option value="USER">Usuario</option>
              <option value="ADMIN">Administrador</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Control
              as="select"
              name="status"
              value={formValues.status}
              onChange={handleOnChange}
              required
            >
              <option value="">Selecciona un Status</option>
              <option value="true">Activo</option>
              <option value="false">Inactivo</option>
            </Form.Control>
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
