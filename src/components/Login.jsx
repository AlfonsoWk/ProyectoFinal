import React, { useState } from "react";
import { MDBCard, MDBCardBody, MDBInput, MDBContainer } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Login.css";
import SpinnerImage from "../images/logob.png";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:8000/users");
      const user = response.data.find((user) => user.email === formData.email);

      if (formData.email.trim() === "" || formData.password.trim() === "") {
        setError("Por favor, ingresa tu email y contraseña");
      } else if (!user || user.password !== formData.password) {
        setError("Contraseña o nombre de usuario incorrecto");
      } else {
        setError(""); 
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          localStorage.setItem("loggedInUser", JSON.stringify(user));
          navigate("/dashboarduser");
        }, 5000); 
        
        setTimeout(() => setLoading(true), 5000); 
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Error al iniciar sesión. Por favor, intenta de nuevo más tarde");
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: "url(src/images/rollingGimAsset.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      {!loading && (
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
      )}
      {loading && (
        <div className="spinner-container">
          <img
            src={SpinnerImage}
            alt="Spinner"
            className="spinner"
            style={{
              animation: "spin 1s linear infinite",
              width: "200px",
              height: "200px",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Login;
