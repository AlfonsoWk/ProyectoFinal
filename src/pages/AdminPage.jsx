import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import { CourseTable } from "../components/CourseTable";
import { CreateCourseModal } from "../components/CreateCourseModal";

import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";
import adminpage from "../images/adminpage.jpg"

export const AdminPage = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div style={{ backgroundImage: `url('${adminpage}')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <NavBar/>
      <div className="container" style={{minHeight:"34rem", color:"black", backgroundColor:"white", borderRadius:"50px"}}>
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
            <h3 className="text-center">Administrador de Clases</h3>
          </div>
           {
            /*
                   <div className="col-2">
            <Link to="/Principal">
              <Button variant="success" onClick={() => setModalShow(true)}>
                Ir al inicio
              </Button>
            </Link>
          </div>
             */
           }
     

          <div className="col-2">
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Agregar Clase
            </Button>
          </div>
          <div className="col-2">
            <Link to="/UserPage">
              <Button variant="warning">Ir a Usuarios</Button>
            </Link>
          </div>
        </div>
        <hr />
        <div className="row">
          <CourseTable />
        </div>
      </div>
      <CreateCourseModal show={modalShow} onHide={() => setModalShow(false)} />
      <Footer/>
    </div>
  );
};
