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
    <div>
      <NavBar/>
      <div className="container" style={{minHeight:"34rem"}}>
        <div className="row">
          <div className="col">
            <h2 className="text-center">
              Bienvenido a la página de administrador
            </h2>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="text-center">Administrador de Usuarios</h3>
          </div>
          <div className="col-2">
            <Link to="/Principal">
              <Button variant="success" onClick={() => setModalShow(true)}>
                Ir al inicio
              </Button>
            </Link>
          </div>
          <div className="col-2">
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Agregar Usuario
            </Button>
          </div>
          <div className="col-2">
            <Link to="/AdminPage">
              <Button variant="warning">Ir a Clases</Button>
            </Link>
          </div>
        </div>
        <hr />
        <div className="row">
          <UserTable />
        </div>
      </div>
      <CreateUserModal show={modalShow} onHide={() => setModalShow(false)} />
      <Footer/>
    </div>
  );
};
