import React, { useEffect, useState } from "react";
import {
  getClases,
  deleteClases,
  updateCupos
} from "../helpers/apiClases";
import Modal from "react-bootstrap/Modal";

export const CourseTable = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [paramFuncion, setparamFuncion] = useState({});
  const [courses, setCourses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [newCourseData, setNewCourseData] = useState({
    nombre: "",
    inicio: "",
    fin: "",
    profesor: "",
    cupos_disponibles: "",
    cupos: "",
    disponible: "",
  });

  const handleDelete = async (id) => {
    let course = courses.find((curso) => curso._id === id);

   console.log("el curso es: ", course)
  

    let validator = window.confirm(
      `Estas seguro que quieres eliminar la clase ${course.nombre}`
    );

    if (validator) {
      console.log(`Eliminando la clase con id ${course._id}`);
      await deleteClases(id);
      await actualizarDatos();
    }
  };

  const actualizarDatos = async () => {
    const datos = await getClases();
    setCourses(datos);
  };

  useEffect(() => {
    actualizarDatos();
  }, []);

  const handleModify = (id) => {
    const course = courses.find((curso) => curso._id === id);
    console.log("Datos del curso:", course);
    setSelectedCourseId(id);
    setShowModal(true);
    setNewCourseData(course);
    setErrorMessage("");
  };

  const handleSaveChanges = async () => {
    const isEmptyField = Object.values(newCourseData).some(
      (value) => value === ""
    );
    if (isEmptyField) {
      setErrorMessage("Por favor completa todos los campos.");
      return;
    }

    if (!newCourseData.disponible) {
      setErrorMessage("Por favor marca el campo 'Disponible'.");
      return;
    }

    
    if (parseInt(newCourseData.inicio) >= parseInt(newCourseData.fin)) {
      setErrorMessage("La hora de inicio debe ser menor que la hora de fin.");
      return;
    }

    await updateCupos(selectedCourseId, newCourseData);
    await actualizarDatos();
    setShowModal(false);
    setNewCourseData({
      nombre: "",
      inicio: "",
      fin: "",
      profesor: "",
      cupos_disponibles: "",
      cupos: "",
      disponible: false,
    });
    setErrorMessage("");
  };

  const resetCupos = async () => {
    setparamFuncion((prevParamFuncion) => ({
      ...prevParamFuncion,
      cupos_disponibles: prevParamFuncion.cupos,
    }));

    await updateCupos(paramFuncion.id, paramFuncion);

    await actualizarDatos();
  };

  return (
    <>
      <div className="col">
        <table className="table">
          <thead className="thead-dark">
            <tr className="table-dark">
              <th scope="col">Nombre de la Clase</th>
              <th scope="col">Inicio</th>
              <th scope="col">Fin</th>
              <th scope="col">Profesor</th>
              <th scope="col">Cupos Disponibles</th>
              <th scope="col">Cupos</th>
              <th scope="col">Disponible</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => {
              return (
                <tr key={course._id}>
                  <th>{course.nombre}</th>
                  <td style={{ textAlign: "center" }}>{course.inicio+" hs"}</td>
                  <td>{course.fin+" hs"}</td>
                  <td>{course.profesor}</td>
                  <td style={{ textAlign: "center" }}>
                    {course.cupos_disponibles}
                  </td>
                  <td style={{ textAlign: "center" }}>{course.cupos}</td>
                  <td style={{ textAlign: "center" }}>
                    {course.disponible ? "Si" : "No"}
                  </td>
                  <td>
                    <button
                      className="btn btn-danger mr-2 mb-2"
                      onClick={() => {
                        handleDelete(course._id);
                      }}
                    >
                      Borrar
                    </button>
                    <button
                      className="btn btn-success mr-2 mb-2 "
                      onClick={() => {
                        handleModify(course._id);
                      }}
                      style={{ marginLeft: "10px" }}
                    >
                      Modificar
                    </button>
                    <button
                      className="btn btn-secondary mr-2 mb-2"
                      onClick={() => {
                        setparamFuncion((prevParamFuncion) => ({
                          ...prevParamFuncion,
                          id: course.id,
                          nombre: course.nombre,
                          cupos_disponibles: course.cupos,
                          cupos: course.cupos,
                          profesor: course.profesor,
                          inicio: course.inicio,
                          fin: course.fin,
                        }));
                        resetCupos();
                      }}
                      style={{ marginLeft: "10px" }}
                    >
                      Resetear Cupos
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modificar Curso</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errorMessage && (
            <div className="alert alert-danger">{errorMessage}</div>
          )}
          <form>
            <div className="form-group">
              <label>Nombre:</label>
              <input
                type="text"
                className="form-control"
                value={newCourseData.nombre}
                onChange={(e) =>
                  setNewCourseData({ ...newCourseData, nombre: e.target.value })
                }
                required
              />
            </div>
            <div className="form-group">
              <label>Inicio:</label>
              <input
                type="number"
                className="form-control"
                value={newCourseData.inicio}
                onChange={(e) =>
                  setNewCourseData({
                    ...newCourseData,
                    inicio: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="form-group">
              <label>Fin:</label>
              <input
                type="number"
                className="form-control"
                value={newCourseData.fin}
                onChange={(e) =>
                  setNewCourseData({ ...newCourseData, fin: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Profesor:</label>
              <input
                type="text"
                className="form-control"
                value={newCourseData.profesor}
                onChange={(e) =>
                  setNewCourseData({
                    ...newCourseData,
                    profesor: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <label>Cupos Disponibles:</label>
              <input
                type="number"
                className="form-control"
                value={newCourseData.cupos_disponibles}
                onChange={(e) =>
                  setNewCourseData({
                    ...newCourseData,
                    cupos_disponibles: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <label>Cupos:</label>
              <input
                type="number"
                className="form-control"
                value={newCourseData.cupos}
                onChange={(e) =>
                  setNewCourseData({ ...newCourseData, cupos: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Disponible:</label>
              <input
                type="checkbox"
                checked={newCourseData.disponible}
                onChange={(e) =>
                  setNewCourseData({
                    ...newCourseData,
                    disponible: e.target.checked,
                  })
                }
                style={{ transform: "scale(1.5)", marginLeft: "1em" }}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary"
            onClick={() => setShowModal(false)}
          >
            Cancelar
          </button>
          <button className="btn btn-primary" onClick={handleSaveChanges}>
            Guardar Cambios
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
