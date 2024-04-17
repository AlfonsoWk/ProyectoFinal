import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { updateCupos, getClases, clasesUsuarios } from "../helpers/apiClases";
import "../css/Modal.css";

const ModalMensage = ({
  isOpen,
  closeModal,
  paramFuncion,
  actualizarDatos,
}) => {
  let reserva = true;
  const user = JSON.parse(localStorage.getItem("loggedInUser"))
  const usuario = user.fname_lname + user.email

  if (!isOpen) {
    return null;
  }

  const reservar = async () => {
    const nuevoCupo = paramFuncion.cupos_disponibles - 1;

    const fecha = new Date();
    const hora = Number(fecha.getHours());
    const obtenerClases = await getClases();

    obtenerClases.map((obtener) => {
      if (obtener._id !== paramFuncion.id) {
        return;
      }

      if (hora >= obtener.inicio) {
        reserva = false;
        console.log("estado ", reserva);
      }
    });

    if (!reserva) {
      return (
        alert(
          `la clase ${paramFuncion.nombre} no puede ser reservada en en este horario`
        ),
        closeModal()
      );
    }
   

    await updateCupos(paramFuncion.id, { cupos_disponibles: nuevoCupo });

   

    actualizarDatos();

    await clasesUsuarios({
      id_clase: paramFuncion.id,
      nombre: paramFuncion.nombre,
      inicio: paramFuncion.inicio,
      fin: paramFuncion.fin,
      profesor: paramFuncion.profesor,
      cupos_disponibles: nuevoCupo,
      cupos: paramFuncion.cupos,
      disponible: true,
      usuario: usuario,
    });
    closeModal();
  };

  return (
    <div
      className="modal show"
      style={{ display: "flex", position: "centered" }}
    >
      <Modal.Dialog id="modal">
        <Modal.Header>
          <Modal.Title>Reservar clase</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Desea reservar esta clase?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              reservar();
            }}
          >
            Aceptar
          </Button>
          <Button variant="danger" onClick={closeModal}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default ModalMensage;
