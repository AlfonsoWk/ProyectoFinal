import "../css/ReservarTurno.css";

import { useState, useEffect } from "react";

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

  const actualizarDatos = async () => {
    const datos = await getClases();
    setclases(datos);

    const datos1 = await getClasesUsuarios();

    setclasesUsuarios(datos1);

    datos1.map((dato) => {
      const boton = document.getElementById(`${dato.id_clase}`);
      boton.disabled = true;
    });
  };

  useEffect(() => {
    actualizarDatos();
  }, []);

  return (
    <div className="col">
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
