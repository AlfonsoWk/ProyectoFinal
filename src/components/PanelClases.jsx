import { useState, useEffect } from "react";

import NavBar from "./NavBar";
import { Footer } from "./Footer";


import { Link } from "react-router-dom";
import { getClasesUsuarios,cancelaReserva,updateCupos,} from "../helpers/apiClases";
import ModalCancelar from "./ModalCancelar";

import "../css/CancelaTurno.css";

const PanelClases = () => {
  const [clasesUsuarios, setclasesUsuarios] = useState([]);
  const [paramFuncion, setparamFuncion] = useState({});
  const [openModal, setopenModal] = useState(false);

  const actualizarDatos = async () => {
    const usuario = "fluque"
    const datos = await getClasesUsuarios(usuario);
    setclasesUsuarios(datos);

    /* Si la clase ya finalizo la reserva se elimina */
    const fecha = new Date()
    const hora = fecha.getHours()
    datos.map((dato)=>{
        console.log("Estoy en .map ",dato)
        console.log("final de clas: ", dato.fin)
        console.log("la hora es ", hora)
        if (dato.fin <= hora){
           cancelaReserva(dato._id)
        }
    })
  };

  useEffect(() => {
    actualizarDatos();
  }, []);

  /* const handleDelete = async (id) =>{

        const clases = clasesUsuarios.find((claseUsuario)=>{
            return claseUsuario.id === id
        })

        const cupo = clases.cupos_disponibles + 1
       

        let confirmar = confirm("Desea cancelar esta reserva?")

        if (confirmar){
            await cancelaReserva(id);
            await  updateCupos(clases.id_clase,{

                "nombre": clases.nombre,
                "inicio": clases.inicio,
                "fin": clases.fin,
                "profesor":clases.profesor,
                "cupos_disponibles":cupo,
                "cupos":clases.cupos,
                "disponible": true
                })
            await actualizarDatos();
        }
     } */

  return (
    <>
    <div style={{ backgroundImage: `url('src/images/clases.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
    <NavBar/>
    
    <div className="container" style={{minHeight: "34rem", color:"white"}}>
      
      <div className="row">
        <div className="col">
          <h2 className="text-center" style={{backgroundColor:"black"}}>Bienvenido a Rolling Gym</h2>
          <hr style={{color:"black"}} />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="clasesReservadas">

          <h2 id="reservadas" style={{backgroundColor:"black"}} >Clases reservadas</h2>
       </div>

       <div className="clasesReservadas">
         <Link to={"/Reservar"}>
            <button className="btn btn-primary mr-2 mb-2 mt-3">
               Clases dispobles 
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
                  <tr key={claseUsuario.id}>
                    <th>{claseUsuario.nombre}</th>
                    <td>{claseUsuario.inicio}</td>
                    <td>{claseUsuario.fin}</td>
                    <td>{claseUsuario.usuario}</td>

                    <td>
                      <button  id="buttonCancelar"
                        className="btn btn-danger mr-2 mb-2"
                        // onClick={()=> handleDelete(claseUsuario.id)}
                        onClick={() => {
                          setopenModal(true),
                            setparamFuncion({
                              id: claseUsuario.id,
                              nombre: claseUsuario.nombre,
                              inicio: claseUsuario.inicio,
                              fin: claseUsuario.fin,
                              profesor: claseUsuario.profesor,
                              cupos_disponibles: claseUsuario.cupos_disponibles,
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

      <ModalCancelar
        isOpen={openModal}
        closeModal={() => setopenModal(false)}
        paramFuncion={paramFuncion}
        actualizarDatos={() => actualizarDatos()}
      />
    </div>

    <Footer/>
    </div>
    </>
  );
};

export default PanelClases;
