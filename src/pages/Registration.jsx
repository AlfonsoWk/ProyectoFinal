import React, { useState } from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import "../css/Registration.css";
import axios from "axios";
import NavBar from "../components/NavBar";
import {Footer} from "../components/Footer";

const Registration = () => {
  const [formData, setFormData] = useState({
    fname_lname: "",
    email: "",
    password: "",
    cpassword: "",
    role: "user",
    status: "active",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;

    if (formData.fname_lname.trim() === "") {
      isValid = false;
      setErrorMessage("Por favor, ingresa tu nombre y apellido");
    } else if (formData.email.trim() === "") {
      isValid = false;
      setErrorMessage("Por favor, ingresa tu email");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      setErrorMessage("Por favor, ingresa un email válido");
    } else if (formData.password.trim() === "") {
      isValid = false;
      setErrorMessage("Por favor, ingresa tu contraseña");
    } else if (formData.password.length < 8) {
      isValid = false;
      setErrorMessage("La contraseña debe tener al menos 8 caracteres");
    } else if (formData.cpassword.trim() !== formData.password.trim()) {
      isValid = false;
      setErrorMessage("Las contraseñas no coinciden");
    } else if (!termsAccepted) {
      isValid = false;
      setErrorMessage("Debes aceptar los términos y condiciones");
    } else {
      setErrorMessage("");
    }

    if (isValid) {
      try {
        const existingUser = await axios.get(
          `http://localhost:8000/users?email=${formData.email}`
        );

        if (existingUser.data.length > 0) {
          setErrorMessage("Ya existe un usuario con este correo electrónico");
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
          status: "active",
        });
        setErrorMessage("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
    <NavBar/>
    <div
      className="registration-container d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: "url(src/images/registro.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <MDBContainer>
        <div className="mask gradient-custom-3"></div>
        <div className="registration-form-container">
          <MDBCard
            className="m-5"
            style={{ maxWidth: "600px", backgroundColor: "black" }}
          >
            <MDBCardBody className="px-5" style={{ color: "white" }}>
              <h2 className="text-uppercase text-center mb-5">
                Crear cuenta en Rolling Gym
              </h2>
              {errorMessage && (
                <div className="text-danger mb-4">{errorMessage}</div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <MDBInput
                    label={
                      <span className="required">Nombre y Apellido</span>
                    }
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        fname_lname: event.target.value,
                      })
                    }
                    value={formData.fname_lname}
                    size="sm"
                    id="fname_lname"
                    type="text"
                  />
                </div>

                <div className="mb-4">
                  <MDBInput
                    label={<span className="required">Correo Electronico</span>}
                    onChange={(event) =>
                      setFormData({ ...formData, email: event.target.value })
                    }
                    value={formData.email}
                    size="sm"
                    id="email"
                    type="email"
                  />
                </div>

                <div className="mb-4">
                  <MDBInput
                    label={<span className="required">Contraseña</span>}
                    onChange={(event) =>
                      setFormData({ ...formData, password: event.target.value })
                    }
                    value={formData.password}
                    size="sm"
                    id="password"
                    type="password"
                  />
                </div>

                <div className="mb-4">
                  <MDBInput
                    label={
                      <span className="required">Repeti tu Contraseña</span>
                    }
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        cpassword: event.target.value,
                      })
                    }
                    value={formData.cpassword}
                    size="sm"
                    id="cpassword"
                    type="password"
                  />
                </div>

                <div className="d-flex flex-row justify-content-center mb-4">
                  <MDBCheckbox
                    name="termsCheckbox"
                    id="termsCheckbox"
                    label="Acepto los términos y condiciones"
                    checked={termsAccepted}
                    onChange={() => setTermsAccepted(!termsAccepted)}
                  />
                </div>

                <div className="text-center">
                  <button
                    className="btn btn-primary btn-register"
                    type="submit"
                  >
                    Registrarse
                  </button>
                </div>
              </form>
              <p className="text-center mt-3 text-secondary">
                ¿Ya tienes cuenta? <Link to="/login">Iniciar Sesión</Link>
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBContainer>
    </div>
    <Footer/>
    </>
  );
};

export default Registration;
