import React, { useState } from "react";
import { createUser } from "../helpers/apiUsers";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import "../css/Registration.css";
import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";
import fondogym5 from "../images/fondogym5.webp";

const Registration = () => {
  const [formData, setFormData] = useState({
    fname_lname: "",
    email: "",
    telefono: "",
    planContratado: "",
    password: "",
    cpassword: "",
    role: "USER",
    status: "true",
  });
  const navigate = useNavigate();
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
      setErrorMessage("Por favor, ingresa tu correo electrónico");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      setErrorMessage("Por favor, ingresa un correo electrónico válido");
    } else if (formData.telefono.trim() === "") {
      isValid = false;
      setErrorMessage("Por favor, ingresa tu número de telefono");
    } else if (formData.planContratado.trim() === "") {
      isValid = false;
      setErrorMessage("Por favor, selecciona el plan que deseas contratar");
    } else if (formData.password.trim() === "") {
      isValid = false;
      setErrorMessage("Por favor, ingresa tu contraseña");
    } else if (formData.password.length < 6) {
      isValid = false;
      setErrorMessage("La contraseña debe tener al menos 6 caracteres");
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
      console.log("formData before submit:", formData);
      await createUser(formData);
      alert("Registro exitoso");
      setFormData({
        fname_lname: "",
        email: "",
        telefono: "",
        planContratado: "",
        password: "",
        cpassword: "",
        role: "USER",
        status: "true",
      });
      navigate("/login");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${fondogym5})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <NavBar />
      <div className="registration-container d-flex align-items-center justify-content-center">
        <MDBContainer>
          <div
            className="mask gradient-custom-3"
            style={{ marginTop: "1em" }}
          ></div>
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
                      label={
                        <span className="required">Correo Electronico</span>
                      }
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          email: event.target.value,
                        })
                      }
                      value={formData.email}
                      size="sm"
                      id="email"
                      type="email"
                    />
                  </div>

                  <div className="mb-4">
                    <MDBInput
                      label={<span className="required">Teléfono</span>}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          telefono: event.target.value,
                        })
                      }
                      value={formData.telefono}
                      size="sm"
                      id="telefono"
                      type="number"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="required" htmlFor="planContratado">
                      Plan Contratado
                    </label>
                    <select
                      className="form-select"
                      id="planContratado"
                      value={formData.planContratado}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          planContratado: event.target.value,
                        })
                      }
                    >
                      <option value="">Selecciona un plan</option>
                      <option value="Plan Solo Musculación">Plan Solo Musculación</option>
                      <option value="Plan Solo Clases">Plan Solo Clases</option>
                      <option value="Plan Full">Plan Full</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <MDBInput
                      label={<span className="required">Contraseña</span>}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          password: event.target.value,
                        })
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
      <Footer />
    </div>
  );
};

export default Registration;
