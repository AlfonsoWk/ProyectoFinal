import React, { useState } from "react";

import { authLogin } from "../helpers/apiLogin";

import { MDBCard, MDBCardBody, MDBInput, MDBContainer } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";

import "../css/Login.css";
import SpinnerImage from "../images/logob.png";
import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";
import rollingGin from "../images/rollingGimAsset.jpg";

const Login = ({ setuser }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  let cadena = "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const datosEmail = {
      email: formData.email,
      password: formData.password,
    };

    if (formData.email.trim() === "" || formData.password.trim() === "") {
      return setError("Por favor, ingresa tu email y contraseña");
    }

    const userLogin = await authLogin(datosEmail);

    if (!userLogin) {
      return setError("Credenciales incorrectas");
    }

    if (!userLogin.status){
      return setError("El usuario no tiene un estado valido.");
    }

    if (userLogin.role === "USER") {
      cadena = "/Reservar";
    } else {
      cadena = "/AdminPage";
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      localStorage.setItem("loggedInUser", JSON.stringify(userLogin));
      navigate(cadena);
    }, 5000);

    setTimeout(() => setLoading(true), 5000);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${rollingGin})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      {!loading && <NavBar />}

      {!loading ? (
        <MDBContainer style={{ color: "white" }}>
          <MDBCard
            className="m-5"
            style={{ maxWidth: "600px", backgroundColor: "black" }}
          >
            {" "}
            <MDBCardBody className="px-5" style={{ color: "white" }}>
              {" "}
              <h2 className="text-uppercase text-center mb-5">
                Iniciar Sesión en Rolling Gym
              </h2>
              <form onSubmit={handleSubmit}>
                {error && <span className="text-danger mb-2">{error}</span>}
                <MDBInput
                  wrapperClass="mb-2"
                  label={<span className="required">Correo Electrónico</span>}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  value={formData.email}
                  size="lg"
                  id="email"
                  type="email"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label={<span className="required">Contraseña</span>}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  value={formData.password}
                  size="lg"
                  id="password"
                  type="password"
                />
                <div className="text-center">
                  <button className="btn btn-primary btn-login " type="submit">
                    Iniciar Sesión
                  </button>
                </div>
              </form>
              <p className="text-center mt-3 text-secondary">
                ¿No tienes una cuenta?{" "}
                <Link to="/registration">Regístrate aquí</Link>
              </p>
              <p className="text-center mt-3 text-secondary">
                ¿Olvidaste tu contraseña?{" "}
                <Link to="/contacto">Recuperar contraseña</Link>
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      ) : (
        <div
          className="spinner-container"
          style={{ textAlign: "center", paddingTop: "20vh" }}
        >
          <img
            src={SpinnerImage}
            alt="Spinner"
            className="spinner-rotate" // Aplica la clase "rotate" para la animación de rotación
            style={{
              width: "200px",
              height: "200px",
            }}
          />
        </div>
      )}
      {!loading && <Footer />}
    </div>
  );
};

export default Login;
