import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import { UserTable } from "../components/UserTable";
import { CreateUserModal } from "../components/CreateUserModal";

import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";

export const UserPage = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
<div style={{ backgroundImage: `url('src/images/userpage2.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <NavBar />
      <div className="container mt-4" style={{color:"white", backgroundColor:"black", borderRadius:"50px"}}>
        <div className="row">
          <div className="col">
            <h2 className="text-center">
              Bienvenido a la página de administrador
            </h2>
            <hr />
          </div>
        </div>
        <div className="row align-items-center mb-4">
          <div className="col-md">
            <h3 className="text-center mb-3 mb-md-0">
              Administrador de Usuarios
            </h3>
          </div>
          <div className="col-md-auto mb-3 mb-md-0">
            <Button variant="primary" onClick={() => setModalShow(true)} block>
              Agregar Usuario
            </Button>
          </div>
          <div className="col-md-auto">
            <Link to="/AdminPage">
              <Button variant="warning" block>
                Ir a Clases
              </Button>
            </Link>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <UserTable />
          </div>
        </div>
      </div>
      <CreateUserModal show={modalShow} onHide={() => setModalShow(false)} />
      
      </div>
      <Footer />
    </>
  );
};

