import { useState, useEffect } from "react"
import {getClasesUsuarios,cancelaReserva,updateCupos} from "../helpers/apiClases"
import ModalCancelar from "./ModalCancelar";

const PanelClases = () => {
    const [clasesUsuarios, setclasesUsuarios] = useState([])
    const [paramFuncion, setparamFuncion] = useState({})
    const [openModal, setopenModal] = useState(false)

    const actualizarDatos = async () => {
        const datos = await getClasesUsuarios();
        setclasesUsuarios(datos);

     
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
                <td>{claseUsuario.inicio}</td>
                <td>{claseUsuario.fin}</td>
                <td>{claseUsuario.usuario}</td>

                <td>
                
                    <button
                      className="btn btn-danger mr-2 mb-2"
                    // onClick={()=> handleDelete(claseUsuario.id)}
                    onClick={()=>{
                      setopenModal(true),
                      setparamFuncion({
                        "id": claseUsuario.id,
                        "nombre": claseUsuario.nombre,
                        "inicio": claseUsuario.inicio,
                        "fin": claseUsuario.fin,
                        "profesor":claseUsuario.profesor,
                        "cupos_disponibles":claseUsuario.cupos_disponibles,
                        "cupos":claseUsuario.cupos,
                        "disponible": true,
                        "id_clase": claseUsuario.id_clase
                        })

                    }}

                    >
                      Cancelar Reserva
                    </button>
                  
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

          <ModalCancelar isOpen={openModal}
          closeModal={()=> setopenModal(false)}
          paramFuncion={paramFuncion}  
          actualizarDatos={()=> actualizarDatos()} 
          
           />
      
    </div>
  );
};

export default PanelClases;
