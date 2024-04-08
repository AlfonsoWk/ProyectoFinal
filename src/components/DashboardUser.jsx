import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DashboardUser = () => {
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          // Obtén el ID del usuario desde la URL
          const userId = window.location.pathname.split("/").pop();
          // Realiza la solicitud para obtener la información del usuario por su ID
          const response = await axios.get(`http://localhost:8000/users/${userId}`);
          setUserData(response.data);
        } catch (error) {
          console.error('Error al obtener la información del usuario:', error);
        }
      };
  
      fetchUserData();
    }, []);
  
  return (
    <MDBContainer className="py-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="8">
          <MDBCard>
            <MDBCardBody>
              <h2 className="text-center mb-4">Dashboard</h2>
              {userData ? (
                <div>
                  <p><strong>Nombre:</strong> {userData.name}</p>
                  <p><strong>Correo Electrónico:</strong> {userData.email}</p>
                  {/* Aquí puedes mostrar más información del usuario */}
                </div>
              ) : (
                <p>Cargando...</p>
              )}
              <div className="text-center mt-4">
                <Link to="/" className="btn btn-primary">Cerrar Sesión</Link>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default DashboardUser;
