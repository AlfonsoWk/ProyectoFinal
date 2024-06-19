import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { cancelaReserva, updateCupos } from "../helpers/apiClases";
import "../css/Modal.css";

const ModalCancelar = ({
  isOpen,
  closeModal,
  paramFuncion,
  actualizarDatos,
}) => {
  if (!isOpen) {
    return null;
  }

  const handleDelete = async () => {
    const cupo = paramFuncion.cupos_disponibles + 1;

    await cancelaReserva(paramFuncion.id);
    await updateCupos(paramFuncion.id_clase, { cupos_disponibles: cupo });
    /* await  updateCupos(paramFuncion.id_clase,{

            "nombre": paramFuncion.nombre,
            "inicio": paramFuncion.inicio,
            "fin": paramFuncion.fin,
            "profesor":paramFuncion.profesor,
            "cupos_disponibles":cupo,
            "cupos":paramFuncion.cupos,
            "disponible": true
            })*/
    await actualizarDatos();
    closeModal();
  };

  return (
    <div
      className="modal show"
      style={{ display: "flex", position: "centered" }}
    >
      <Modal.Dialog id="modal">
        <Modal.Header>
          <Modal.Title>Cancelar turno</Modal.Title>
        </Modal.Header>

        <Modal.Body>Desea cancelar este turno?</Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              handleDelete();
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

export default ModalCancelar;
