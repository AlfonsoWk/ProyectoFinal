import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DashboardUser = () => {
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
      
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (loggedInUser) {
        setUserData(loggedInUser);
      } else {
        fetchUserData();
      }
    }, []);
  
    const fetchUserData = async () => {
      try {
        
        const userId = window.location.pathname.split("/").pop();
        
        const response = await axios.get(`http://localhost:8000/users/${userId}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error al obtener la información del usuario:', error);
      }
    };
  
  return (
    <div
      style={{
        backgroundImage: `url('src/images/rollingGimAsset.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <MDBContainer className="py-5">
        <MDBRow className="justify-content-center">
          <MDBCol md="8">
            <MDBCard>
              <MDBCardBody>
                {userData && (
                  <>
                    <h2 className="text-center mb-4">Bienvenido/a {userData.fname_lname}</h2>
                    <p><strong>Nombre:</strong> {userData.fname_lname}</p>
                    <p><strong>Correo Electrónico:</strong> {userData.email}</p>
                    <p><strong>Rol:</strong> {userData.role}</p>
                    <p><strong>Estado:</strong> {userData.status}</p>
                    
                  </>
                )}
                {!userData && <p>Cargando...</p>}
                <div className="text-center mt-4">
                  <Link to="/" className="btn btn-primary">Cerrar Sesión</Link>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default DashboardUser;

