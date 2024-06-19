import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Clases.css";
import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";
/* import { Link } from "react-router-dom"; */

const comment = "* Musculación: Todo el día";

const data = [
  {
    Hora: 8,
    Lunes: "Funcional",
    Miercoles: "Funcional",
    Viernes: "Funcional",
    link: "/login",
  },
  {
    Hora: 9,
    Lunes: "Localizada",
    Miercoles: "Localizada",
    Viernes: "Localizada",
    link: "/login",
  },
  { Hora: 10, Martes: "Yoga", Jueves: "Yoga", link: "/login" },
  { Hora: 11, Martes: "Zumba", Jueves: "Zumba", link: "/login" },
  {
    Hora: 12,
    Lunes: "Elongacion",
    Miercoles: "Elongacion",
    Viernes: "Elongacion",
    link: "/login",
  },
  {
    Hora: 13,
    Lunes: "Funcional",
    Miercoles: "Funcional",
    Viernes: "Funcional",
    link: "/login",
  },
  {
    Hora: 14,
    Lunes: "Localizada",
    Miercoles: "Localizada",
    Viernes: "Localizada",
    link: "/login",
  },
  { Hora: 15, Martes: "Yoga", Jueves: "Yoga", link: "/login" },
  {
    Hora: 16,
    Lunes: "Zumba",
    Martes: "Zumba",
    Miercoles: "Zumba",
    Jueves: "Zumba",
    Viernes: "Zumba",
    link: "/login",
  },
  { Hora: 17, Martes: "Elongacion", Jueves: "Elongacion", link: "/login" },
  {
    Hora: 18,
    Lunes: "Aero Local",
    Miercoles: "Aero Local",
    Viernes: "Aero Local",
    link: "/login",
  },
  { Hora: 19, Martes: "GAP", Jueves: "GAP", link: "/login" },
  { Hora: 20, Martes: "Aero Local", Jueves: "Aero Local", link: "/login" },
  { Hora: 21, Lunes: "GAP", Miercoles: "GAP", Viernes: "GAP", link: "/login" },
];

const Clases = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleReserveClick = () => {
    if (user) {
      navigate("/Reservar");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <NavBar />
      <div className="table-container table-responsive">
        <table className="table">
          <thead className="thead-dark">
            <tr className="table-dark">
              <th style={{ textAlign: "center", backgroundColor: "black" }}>
                Hora
              </th>
              <th style={{ textAlign: "center", backgroundColor: "black" }}>
                Lunes
              </th>
              <th style={{ textAlign: "center", backgroundColor: "black" }}>
                Martes
              </th>
              <th style={{ textAlign: "center", backgroundColor: "black" }}>
                Miércoles
              </th>
              <th style={{ textAlign: "center", backgroundColor: "black" }}>
                Jueves
              </th>
              <th style={{ textAlign: "center", backgroundColor: "black" }}>
                Viernes
              </th>
              <th style={{ backgroundColor: "black" }}></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td style={{ textAlign: "center" }}>{item.Hora}</td>
                <td style={{ textAlign: "center" }}>{item.Lunes}</td>
                <td style={{ textAlign: "center" }}>{item.Martes}</td>
                <td style={{ textAlign: "center" }}>{item.Miercoles}</td>
                <td style={{ textAlign: "center" }}>{item.Jueves}</td>
                <td style={{ textAlign: "center" }}>{item.Viernes}</td>
                <td>
                  <button
                    onClick={() => handleReserveClick(item.link)}
                    style={{
                      fontWeight: "bold",
                      border: "none",
                      background: "none",
                      color: "blue",
                      cursor: "pointer",
                    }}
                  >
                    Reservar Clase
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="todo-el-dia">
          <p style={{ fontWeight: "bold" }}>{comment}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Clases;
