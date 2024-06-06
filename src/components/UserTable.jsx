import React, { useEffect, useState } from "react";
import { deleteUser, getUsers, updateUsers } from "../helpers/apiUsers";

import Modal from "react-bootstrap/Modal";
import iconborrar from "../icons/boton-x.png";

export const UserTable = () => {
  const [paginacion, setpaginacion] = useState(null)
  const [errorMessage, setErrorMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [newUserData, setNewUserData] = useState({
    fname_lname: "",
    email: "",
    telefono: "",
    planContratado: "",
    password: "",
    cpassword: "",
    role: "",
    status: "",
  });

  const handleDelete = async (id) => {
    let user = users.find((usuario) => usuario._id === id);

    let validator = window.confirm(
      `Estas seguro que quieres eliminar al usuario ${user.fname_lname} `
    );

    if (validator) {
      await deleteUser(id);
      await actualizarDatos();
    }
  };

  const actualizarDatos = async () => {
    const datos = await getUsers(setpaginacion);

    console.log("los datos de la paginacion son : ", paginacion);

    setUsers(datos);
  };

  useEffect(() => {
    actualizarDatos();
  }, []);

  const handleModify = (id) => {
    const user = users.find((usuario) => usuario._id === id);

    setSelectedUserId(id);
    setShowModal(true);
    setNewUserData(user);
    setErrorMessage("");
    actualizarDatos();
  };

  const handleSaveChanges = async () => {
    const isEmptyField = Object.values(newUserData).some(
      (value) => value === ""
    );
    if (isEmptyField) {
      setErrorMessage("Por favor completa todos los campos.");
      return;
    }

    if (newUserData.telefono === "") {
      setErrorMessage("Por favor completa el campo 'Teléfono'.");
      return;
    }

    /*
    if (newUserData.password !== newUserData.cpassword) {
      setErrorMessage("Las contraseñas no coinciden.");
      return;
    }
    */

    /*
    if (newUserData.password.length < 6) {
      setErrorMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }*/

    /*
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newUserData.email)) {
      setErrorMessage("El correo electrónico no es válido.");
      return;
    }*/

    await updateUsers(selectedUserId, newUserData);
    await actualizarDatos();
    setShowModal(false);
    setNewUserData({
      fname_lname: "",
      email: "",
      telefono: "",
      planContratado: "",
      password: "",
      cpassword: "",
      role: "",
      status: "",
    });
    setErrorMessage("");
  };

  return (
    <div className="table-responsive">
      <table className="table">
        <thead className="thead-dark">
          <tr className="table-dark">
            <th scope="col" style={{backgroundColor: "black"}}>Nombre y Apellido</th>
            <th scope="col" style={{backgroundColor: "black"}}>Email</th>
            <th scope="col" style={{backgroundColor: "black"}}>Teléfono</th>
            <th scope="col" style={{backgroundColor: "black"}}>Plan Contratado</th>
            <th scope="col" style={{backgroundColor: "black"}}>Rol</th>
            <th scope="col" style={{backgroundColor: "black"}}>Status</th>
            <th scope="col" style={{backgroundColor: "black"}}></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user.fname_lname}</td>
                <td>{user.email}</td>
                <td>{user.telefono}</td>
                <td>{user.planContratado}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
                <td>
                  <button
                    className="btn btn-danger "
                    style={{
                      backgroundImage: `url(${iconborrar})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                    }}
                    onClick={() => {
                      handleDelete(user._id);
                    }}
                  ></button>
                  <button
                    className="btn btn-success mr-2 mb-2"
                    onClick={() => {
                      handleModify(user._id);
                    }}
                    style={{ marginLeft: "10px" }}
                  >
                    Modificar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modificar usuario</Modal.Title>
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
                value={newUserData.fname_lname}
                onChange={(e) =>
                  setNewUserData({
                    ...newUserData,
                    fname_lname: e.target.value,
                  })
                }
                required
              />
            </div>

            {/* quito el email
            
            
                   <div className="form-group">
              <label>Email:</label>
              <input
                type="email address"
                className="form-control"
                value={newUserData.email}
                onChange={(e) =>
                  setNewUserData({
                    ...newUserData,
                    email: e.target.value,
                  })
                }
                required
              />
            </div>
            
            */}

            <div className="form-group">
              <label>Teléfono:</label>
              <input
                type="number phone"
                className="form-control"
                value={newUserData.telefono}
                onChange={(e) =>
                  setNewUserData({
                    ...newUserData,
                    telefono: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="form-group">
              <label>Plan contratado:</label>
              <select
                type="text"
                className="form-control"
                value={newUserData.planContratado}
                onChange={(e) =>
                  setNewUserData({
                    ...newUserData,
                    planContratado: e.target.value,
                  })
                }
                required
              >
                <option value="soloMusculacion">Plan solo musculación</option>
                <option value="soloClases">Plan Clases</option>
                <option value="full">Plan Full</option>
              </select>
            </div>

            {/* quito las passwords

                    <div className="form-group">
              <label>Contraseña :</label>
              <input
                type="password"
                className="form-control"
                value={newUserData.password}
                onChange={(e) =>
                  setNewUserData({ ...newUserData, password: e.target.value })
                }
              />
            </div>

            
            <div className="form-group">
              <label>Contraseña Confirmada:</label>
              <input
                type="password"
                className="form-control"
                value={newUserData.cpassword}
                onChange={(e) =>
                  setNewUserData({
                    ...newUserData,
                    cpassword: e.target.value,
                  })
                }
              />
            </div>
            
            */}

            <div className="form-group">
              <label>Rol:</label>
              <select
                className="form-control"
                value={newUserData.role}
                onChange={(e) =>
                  setNewUserData({
                    ...newUserData,
                    role: e.target.value,
                  })
                }
              >
                <option value="ADMIN">Administrador</option>
                <option value="USER">Usuario</option>
              </select>
            </div>
            <div className="form-group">
              <label>Estado:</label>
              <select
                className="form-control"
                value={newUserData.status}
                onChange={(e) =>
                  setNewUserData({
                    ...newUserData,
                    status: e.target.value,
                  })
                }
              >
                <option value="ACTIVE">Activo</option>
                <option value="INACTIVE">Inactivo</option>
              </select>
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
    </div>
  );
};
