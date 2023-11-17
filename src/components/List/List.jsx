import "./list.css";
import { FaTrashCan } from "react-icons/fa6"; // Lo que va entre llaves es el nombre del icono
// página de los iconos: https://react-icons.github.io/react-icons/icons/fa6/
function List() {
  return (
    <>
      <section className="input-container">
        <input type="text" placeholder="¿Qué desea hacer hoy?"></input>
        <br />
        <button>Agregar</button>
      </section>
      <section className="task-section">
      <h2>Lista</h2>
      <article className="task-container">
        <ul className="info">
          <li>Tarea</li>
          <li>Estado</li>
          <li>Acción</li>
        </ul>
        <ul>
          <li>
            <ul className="task-details">
              <li>Gimnasio</li>
              <li className="task-status">Pendiente</li>
              <li className="icon"><FaTrashCan/></li>
            </ul>
          </li>
          <li>
            <ul className="task-details">
              <li>Gimnasio</li>
              <li className="task-status">Listo</li>
              <li className="icon"><FaTrashCan/></li>
            </ul>
          </li>
          <li>
            <ul className="task-details">
              <li>Gimnasio</li>
              <li className="task-status">Pendiente</li>
              <li className="icon"><FaTrashCan/></li>
            </ul>
          </li>
        </ul>
      </article>
      </section>
    </>
  );
}

export default List;
