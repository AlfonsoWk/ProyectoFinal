import React, { useEffect, useState } from "react";
import {
  getClases,
  deleteClases,
  updateCupos
} from "../helpers/apiClases";
import Modal from "react-bootstrap/Modal";

import Pagination from "react-bootstrap/Pagination";

export const CourseTable = () => {

  let item = []
  
  const [itemPaginacion, setitemPaginacion] = useState([])
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

  const getClasesPaginacion = async (pagina) =>{
   
    const clasesPaginacion = await getClases(pagina)
    setCourses(clasesPaginacion)
}


  const actualizarDatos = async () => {
    let pagina = 1
    if (localStorage.paginacion){
      const paginacion = JSON.parse(localStorage.getItem("paginacion"))
       pagina = paginacion.page
    
    }
    const datos = await getClases(pagina);
    

    datos.map((dato)=>{
        if(dato.cupos_disponibles ===0){
          updateCupos(dato._id,{disponible:false})
        }
    })

    setCourses(datos);

     /* inicio *** paginacion**** */
     const datosPaginacion = JSON.parse(localStorage.getItem("paginacion"))
     const longitud = datosPaginacion.totalPages


   
   for (let index = 1; index <= longitud ; index++) {
    
     item.push(
      <Pagination.Item   key={index}  onClick={()=>{
         getClasesPaginacion(index)} 
      } >
           {index}
       </Pagination.Item>
       
     ) 

     setitemPaginacion(item)
   }

   /* fin *** paginacion**** */


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

    const inicioHora = parseInt(newCourseData.inicio);
    if (inicioHora < 7 ) {
      setErrorMessage("La hora de inicio debe ser posterior a las 7hs.");
      return;
    }

    const finHora = parseInt(newCourseData.fin);
    if (finHora > 23) {
      setErrorMessage("La hora de fin debe ser anterior a las 23hs.");
      return;
    }

    
    if (parseInt(newCourseData.inicio) >= parseInt(newCourseData.fin)) {
      setErrorMessage("La hora de inicio debe ser menor que la hora de fin.");
      return;
    }

    if (newCourseData.cupos_disponibles > newCourseData.cupos){
      setErrorMessage("La cantidad de cupos disponibles no puede ser mayor a la cantidad de cupos de la clase.");
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

  const resetCupos = async (paramFuncion) => {/*
    setparamFuncion((prevParamFuncion) => ({
      ...prevParamFuncion,
      cupos_disponibles: prevParamFuncion.cupos,
    }));*/

    
   /* console.log("reset cupos antes: ",paramFuncion)*/
    const resetCupo = paramFuncion.cupos
    const resetDisponible = true
    paramFuncion.cupos_disponibles = resetCupo
    paramFuncion.disponible = resetDisponible  
    console.log("reset cupos despues : ",paramFuncion)

    await updateCupos(paramFuncion._id, paramFuncion);

    await actualizarDatos();
  };

  return (
    <>
      <div className="col">
        <table className="table">
          <thead className="thead-dark">
            <tr className="table-dark">
              <th scope="col" style={{backgroundColor: "black"}}>Nombre de la Clase</th>
              <th scope="col" style={{backgroundColor: "black"}}>Inicio</th>
              <th scope="col" style={{backgroundColor: "black"}}>Fin</th>
              <th scope="col" style={{backgroundColor: "black"}}>Profesor</th>
              <th scope="col" style={{backgroundColor: "black"}}>Cupos Disponibles</th>
              <th scope="col" style={{backgroundColor: "black"}}>Cupos</th>
              <th scope="col" style={{backgroundColor: "black"}}>Disponible</th>
              <th scope="col" style={{backgroundColor: "black"}}></th>
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
                       /* setparamFuncion((prevParamFuncion) => ({
                          ...prevParamFuncion,
                          id: course.id,
                          nombre: course.nombre,
                          cupos_disponibles: course.cupos,
                          cupos: course.cupos,
                          profesor: course.profesor,
                          inicio: course.inicio,
                          fin: course.fin,
                        }));*/

                       /* setparamFuncion(
                          {
                          id: course._id,
                          nombre: course.nombre,
                          cupos_disponibles: course.cupos,
                          cupos: course.cupos,
                          profesor: course.profesor,
                          inicio: course.inicio,
                          fin: course.fin,
                          disponible:true
                          }
                        )*/
                       // console.log("on click clases ", course)
                        resetCupos(course);
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

      <div  style={{display:"flex", justifyContent:"center"}} >
          <Pagination >
            
            
            < Pagination.Prev onClick={()=>{
                const datosPaginacion = JSON.parse(localStorage.getItem("paginacion"))
                let paginaAnte= datosPaginacion.prevPage

                if(!paginaAnte){
                  paginaAnte= datosPaginacion.page
                }
                
                getClasesPaginacion(paginaAnte)
            } } 
             />  
            
              {itemPaginacion.map((item)=>{return item  })}
            

            <Pagination.Next
               onClick={()=>{
                const datosPaginacion = JSON.parse(localStorage.getItem("paginacion"))
                let paginaSig=datosPaginacion.nextPage  
                
                if(!paginaSig){
                  paginaSig = datosPaginacion.page
                }
                
                getClasesPaginacion(paginaSig)
            } }
            />
           
          </Pagination>

          </div>

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
              <label>Hora Inicio:</label>
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
              <label>Hora Fin:</label>
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
