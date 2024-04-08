import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import "../css/Registration.css";
import axios from "axios";

const Registration = () => {
  const [formData, setFormData] = useState({
    fname_lname: "",
    email: "",
    password: "",
    cpassword: "",
    role: "user",
    status: "active"
  });

  const [errors, setErrors] = useState({});
  const [validate, setValidate] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;
    let validationErrors = {};

    if (formData.fname_lname.trim() === "") {
      isValid = false;
      validationErrors.fname_lname = "Por favor, ingresa tu nombre y apellido";
    }
    if (formData.email.trim() === "") {
      isValid = false;
      validationErrors.email = "Por favor, ingresa tu email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      validationErrors.email = "Por favor, ingresa un email válido";
    }
    if (formData.password.trim() === "") {
      isValid = false;
      validationErrors.password = "Por favor, ingresa tu contraseña";
    } else if (formData.password.length < 8) {
      isValid = false;
      validationErrors.password =
        "La contraseña debe tener al menos 8 caracteres";
    }
    if (formData.cpassword.trim() !== formData.password.trim()) {
      isValid = false;
      validationErrors.cpassword = "Las contraseñas no coinciden";
    }
    if (!termsAccepted) {
      isValid = false;
      validationErrors.terms = "Debes aceptar los términos y condiciones";
    }

    setErrors(validationErrors);
    setValidate(isValid);

    if (isValid) {
      try {
        const existingUser = await axios.get(
          `http://localhost:8000/users?email=${formData.email}`
        );

        if (existingUser.data.length > 0) {
          setErrors({
            ...errors,
            email: "Ya existe un usuario con este correo electrónico",
          });
          return;
        }

        const result = await axios.post(
          "http://localhost:8000/users",
          formData
        );
        console.log(result);
        alert("Registro exitoso");
        setFormData({
          fname_lname: "",
          email: "",
          password: "",
          cpassword: "",
          role: "user",
          status: "active"
        });
        setErrors({});
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="registration-container">
      <video
        autoPlay
        loop
        muted
        className="registration-video"
        src="./src/assets/videogym.mov"
      />
      <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-center bg-image"
        style={{
          backgroundImage: "url(./src/assets/videogym.mov)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mask gradient-custom-3"></div>
        <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
          <MDBCardBody className="px-5">
            <h2 className="text-uppercase text-center mb-5">
              Crear cuenta en Rolling Gym
            </h2>
            <form onSubmit={handleSubmit}>
              {errors.fname_lname && (
                <span className="text-danger mb-2">{errors.fname_lname}</span>
              )}
              <MDBInput
                wrapperClass="mb-4"
                label={<span className="required">Tu Nombre y Apellido</span>}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    fname_lname: event.target.value,
                  })
                }
                value={formData.fname_lname}
                size="lg"
                id="fname_lname"
                type="text"
              />

              {errors.email && (
                <span className="text-danger mb-2">{errors.email}</span>
              )}
              <MDBInput
                wrapperClass="mb-4"
                label={<span className="required">Correo Electronico</span>}
                onChange={(event) =>
                  setFormData({ ...formData, email: event.target.value })
                }
                value={formData.email}
                size="lg"
                id="email"
                type="email"
              />

              {errors.password && (
                <span className="text-danger mb-2">{errors.password}</span>
              )}
              <MDBInput
                wrapperClass="mb-4"
                label={<span className="required">Contraseña</span>}
                onChange={(event) =>
                  setFormData({ ...formData, password: event.target.value })
                }
                value={formData.password}
                size="lg"
                id="password"
                type="password"
              />

              {errors.cpassword && (
                <span className="text-danger mb-2">{errors.cpassword}</span>
              )}
              <MDBInput
                wrapperClass="mb-4"
                label={<span className="required">Repeti tu Contraseña</span>}
                onChange={(event) =>
                  setFormData({ ...formData, cpassword: event.target.value })
                }
                value={formData.cpassword}
                size="lg"
                id="cpassword"
                type="password"
              />

              <div className="d-flex flex-row justify-content-center mb-4">
                <MDBCheckbox
                  name="termsCheckbox"
                  id="termsCheckbox"
                  label="Acepto los términos y condiciones"
                  checked={termsAccepted}
                  onChange={() => setTermsAccepted(!termsAccepted)}
                />
              </div>
              {errors.terms && (
                <div className="text-danger mb-2">{errors.terms}</div>
              )}

              <div className="text-center">
                <button className="btn btn-primary btn-register" type="submit">
                  Registrarse
                </button>
              </div>
            </form>
            <p className="text-center mt-3 text-secondary">
              ¿Ya tienes cuenta? <Link to="/login">Iniciar Sesión</Link>
            </p>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
};

export default Registration;
