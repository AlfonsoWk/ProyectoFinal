

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {updateCupos, clasesUsuarios} from "../helpers/apiClases"
import "../css/Modal.css"


const ModalMensage = ({isOpen, closeModal,paramFuncion,actualizarDatos}) => {




  if (!isOpen) {
    return null
  }

  
  
  const reservar = async () =>{  
    

     const nuevoCupo = paramFuncion.cupos_disponibles - 1

     const fecha = new Date()

     const datos = {
        nombre: "Ricardo",
        cupos:"10"
     }
    
      updateCupos(paramFuncion.id,datos)
     
     /*
       
      
        await  updateCupos(paramFuncion.id,{

           "nombre": paramFuncion.nombre,
           "inicio": paramFuncion.inicio,
           "fin": paramFuncion.fin,
           "profesor":paramFuncion.profesor,
           "cupos_disponibles":nuevoCupo ,
           "cupos":paramFuncion.cupos,
           "disponible": true
           })*/
   
          // actualizarDatos()
          
      /*    await clasesUsuarios({
            "id_clase": paramFuncion.id,
            "nombre": paramFuncion.nombre,
           "inicio": paramFuncion.inicio,
           "fin": paramFuncion.fin,
           "profesor":paramFuncion.profesor,
           "cupos_disponibles":nuevoCupo ,
           "cupos":paramFuncion.cupos,
           "disponible": true,
           "usuario": "fluque"
           })
           closeModal()*/
     
}


  return (
    <div
    
    className="modal show"
    style={{ display: 'flex', position: "centered" }}
    
       
  >
    <Modal.Dialog id='modal'> 
      <Modal.Header >
        <Modal.Title>Reservar clase</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Desea reservar esta clase?</p>
      </Modal.Body>

      <Modal.Footer>
        
        <Button variant="primary" onClick={()=>{reservar()}}>Aceptar</Button>
        <Button variant="danger" onClick={closeModal}>Cancelar</Button>
      </Modal.Footer>
    </Modal.Dialog>
  </div>
  )
}

export default ModalMensage