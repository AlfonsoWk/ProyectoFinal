import { useState, useEffect } from "react";

import NavBar from "./NavBar";
import { Footer } from "./Footer";

import { Link } from "react-router-dom";
import {
  getClasesUsuarios,
  cancelaReserva,
  /* updateCupos, */
} from "../helpers/apiClases";
import ModalCancelar from "./ModalCancelar";
import clases from "../images/clases.jpg";

import "../css/CancelaTurno.css";

const PanelClases = () => {
  const [clasesUsuarios, setclasesUsuarios] = useState([]);
  const [paramFuncion, setparamFuncion] = useState({});
  const [openModal, setopenModal] = useState(false);

  const actualizarDatos = async () => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    const usuario = user.fname_lname + user.email;

    const datos = await getClasesUsuarios(usuario);
    setclasesUsuarios(datos);

    /* Si la clase ya finalizo la reserva se elimina */
    const fecha = new Date();
    const hora = fecha.getHours();
    datos.map((dato) => {
      if (dato.fin <= hora) {
        cancelaReserva(dato._id);
      }
    });
  };

  useEffect(() => {
    actualizarDatos();
  }, []);

  /*   const indexOfLastClase = currentPage * clasesPerPage;
  const indexOfFirstClase = indexOfLastClase - clasesPerPage;
  const currentClases = clasesUsuarios.slice(
    indexOfFirstClase,
    indexOfLastClase
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber); */
  return (
    <div
      style={{
        backgroundImage: `url('${clases}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <NavBar />

      <div className="container" style={{ minHeight: "34rem", color: "white" }}>
        <div className="row">
          <div className="col">
            <h2 className="text-center" style={{ backgroundColor: "black" }}>
              Bienvenido a Rolling Gym
            </h2>
            <hr style={{ color: "black" }} />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="clasesReservadas">
              <h2 id="reservadas" style={{ backgroundColor: "black" }}>
                Clases reservadas
              </h2>
            </div>

            <div className="clasesReservadas">
              <Link to={"/Reservar"}>
                <button className="btn btn-primary mr-2 mb-2 mt-3">
                  Clases disponibles
                </button>
              </Link>
            </div>

            <hr />
          </div>
        </div>

        <div className="table-responsive">
          <div className="col">
            <table className="table">
              <thead>
                <tr className="table-dark">
                  <th scope="col">Clase</th>

                  <th scope="col">Inicio</th>
                  <th scope="col">Fin</th>
                  <th scope="col">Alumno</th>

                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {clasesUsuarios.map((claseUsuario) => {
                  return (
                    <tr key={claseUsuario._id}>
                      <th>{claseUsuario.nombre}</th>
                      <td>{claseUsuario.inicio+"hs"}</td>
                      <td>{claseUsuario.fin+"hs"}</td>
                      <td>{claseUsuario.usuario}</td>

                      <td>
                        <button
                          id="buttonCancelar"
                          className="btn btn-danger mr-2 mb-2"
                          // onClick={()=> handleDelete(claseUsuario.id)}
                          onClick={() => {
                            setopenModal(true),
                              setparamFuncion({
                                id: claseUsuario._id,
                                nombre: claseUsuario.nombre,
                                inicio: claseUsuario.inicio,
                                fin: claseUsuario.fin,
                                profesor: claseUsuario.profesor,
                                cupos_disponibles:
                                  claseUsuario.cupos_disponibles,
                                cupos: claseUsuario.cupos,
                                disponible: true,
                                id_clase: claseUsuario.id_clase,
                              });
                          }}
                        >
                          Cancelar
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <ModalCancelar
        isOpen={openModal}
        closeModal={() => setopenModal(false)}
        paramFuncion={paramFuncion}
        actualizarDatos={() => actualizarDatos()}
      />

      {/*         <nav>
          <ul className="pagination justify-content-center">

          {
          Array.from({ length: Math.ceil(clasesUsuarios.length / clasesPerPage) })
          .map((_, index) => (
                <li key={index} className={ index + 1 === currentPage ? 'active' : ''}>
                  <button onClick={() => paginate(index + 1)} className="page-link">
                    {index + 1}
                  </button>
                </li>
              ))}
          </ul>
        </nav> */}

      <Footer />
    </div>
  );
};

export default PanelClases;
