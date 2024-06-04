import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import emailjs from "@emailjs/browser";
import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import fotogym2 from "../images/fotogym2.jpg";
import '../css/App.css'; 

export const Contacto = () => {
  const [formValues, setFormValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (
      formValues.user_name === "" ||
      formValues.user_email === "" ||
      formValues.message === ""
    ) {
      alert("Por favor, complete todos los campos");
      return;
    }

    const templateParams = {
      from_name: formValues.user_name,
      to_email: formValues.user_email,
      message: formValues.message,
    };

    emailjs
      .send("service_v2ejebu", "template_nyxv7yt", templateParams, {
        publicKey: "d_jN8aMQHAitz_XK4",
      })
      .then(
        (result) => {
          alert("Email enviado con éxito", result.text);

          setFormValues({
            user_name: "",
            user_email: "",
            message: "",
          });

          // Agregar un retraso de 2 segundos antes de redirigir
          setTimeout(() => {
            navigate("/");
          }, 2000);
        },
        (error) => {
          console.error("Error al enviar el email", error.text);
        }
      );
  };

  return (
    <div
      style={{
        backgroundImage: `url(${fotogym2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <NavBar />

      <Container fluid>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 rounded border-dark bg-light"></div>
            <Card className="shadow no-hover">
              <Card.Body>
                <div className="mb-3 mt-1">
                  <h1 className="fw-bold mb-4 text-uppercase">Contacto</h1>
                  <Form onSubmit={handleOnSubmit} className="mb-3">
                    <Form.Group className="mb-3" controlId="formFullName">
                      <Form.Label className="text-center">
                        Nombre y Apellido
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Marcos Perez"
                        name="user_name"
                        value={formValues.user_name}
                        onChange={handleOnChange}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                        Correo Electronico
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="hola123@gmail.com"
                        name="user_email"
                        value={formValues.user_email}
                        onChange={handleOnChange}
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Ingrese su consulta</Form.Label>
                      <Form.Control
                        rows={3}
                        as="textarea"
                        type="text"
                        name="message"
                        placeholder="Escriba su consulta"
                        value={formValues.message}
                        onChange={handleOnChange}
                      />
                    </Form.Group>

                    <div className="d-grid">
                      <Button variant="dark bg-dark" type="submit">
                        Enviar
                      </Button>
                    </div>
                  </Form>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};
