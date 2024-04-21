import "../css/ReservarTurno.css";

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  getClases,
  updateCupos,
  getClasesUsuarios,
} from "../helpers/apiClases";
import ModalMensage from "./ModalMensage";

const ReservaTurno = () => {
  const [clases, setclases] = useState([]);
  const [clasesUsuarios, setclasesUsuarios] = useState([]);
  const [openModal, setopenModal] = useState(false);
  const [paramFuncion, setparamFuncion] = useState({});
  const navigate = useNavigate();

  const fecha = new Date();
  const hora = fecha.getHours();

  const actualizarDatos = async () => {
    const datos = await getClases();
    setclases(datos);

    datos.map((dat) => {
      if (dat.inicio <= hora) {
        updateCupos(dat._id, { disponible: false });
      }
    });

    /* clases reservadas */
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    const usuario = user.fname_lname + user.email;
    const datos1 = await getClasesUsuarios(usuario);

    setclasesUsuarios(datos1);

    datos1.map((dato) => {
      const boton = document.getElementById(`${dato.id_clase}`);
      boton.disabled = true;
    });
  };

  useEffect(() => {
    actualizarDatos();
  }, []);

  const cerrarSesion = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login"); // Redireccionar a la página de inicio de sesión
  };

  return (
    <div className="container" style={{ minHeight: "34rem", color: "black" }}>
      <div className="row">
        <div className="col">
          <h2 className="text-center">Bienvenido a Rolling Gym</h2>
        </div>
        <hr />
      </div>

      <div className="row">
        <div className="col">
          <div className="clasesDisponibles">
            <h2 id="disponibles" className="text-center">
              Clases disponibles
            </h2>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="clasesDisponibles">
          <Link to={"/Cancelar"}>
            <button className="btn btn-primary mr-2 mb-2" id="redireccion">
              Clases reservadas
            </button>
          </Link>
        </div>
        
      </div>

      <hr />

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">Clase</th>
              <th scope="col">Profesor</th>
              <th scope="col">Inicio</th>
              <th scope="col">Fin</th>
              <th scope="col">Cupos Disponibles</th>

              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {clases.map((clase) => {
              return (
                <tr key={clase._id}>
                  <th>{clase.nombre}</th>
                  <td>{clase.profesor}</td>
                  <td>{clase.inicio}</td>
                  <td>{clase.fin}</td>
                  <td>{clase.cupos_disponibles}</td>

                  <td>
                    {clase.cupos_disponibles > 0 ? (
                      <button
                        id={clase._id}
                        className="btn btn-success mr-2 mb-2"
                        onClick={() => {
                          // reservar(clase.id, clase.nombre, clase.cupos_disponibles, clase.cupos,clase.profesor, clase.inicio, clase.fin)

                          setopenModal(true),
                            setparamFuncion({
                              id: clase._id,
                              nombre: clase.nombre,
                              cupos_disponibles: clase.cupos_disponibles,
                              cupos: clase.cupos,
                              profesor: clase.profesor,
                              inicio: clase.inicio,
                              fin: clase.fin,
                            });
                        }}
                      >
                        Reservar
                      </button>
                    ) : (
                      <span id="agotado">CUPOS AGOTADOS</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="position-fixed top-0 end-0 translate-middle-x mt-3">
        <button className="btn btn-danger" onClick={cerrarSesion}>
          Cerrar sesión
        </button>
      </div>

      <div id="modal">
        <ModalMensage
          isOpen={openModal}
          closeModal={() => setopenModal(false)}
          paramFuncion={paramFuncion}
          actualizarDatos={() => actualizarDatos()}
        />
      </div>
    </div>
  );
};

export default ReservaTurno;
