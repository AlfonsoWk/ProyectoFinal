import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import { UserTable } from "../components/UserTable";
import { CreateUserModal } from "../components/CreateUserModal";

export const UserPage = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <div className="container">
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
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Agregar Usuario
            </Button>
          </div>
          <div className="col-2">
            <Link to="/administrador">
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
    </div>
  );
};
