import './tasks.css'
function Tasks() {
  return (
    <>
    <ul className="task-list">
        <li><h1>Por hacer</h1></li>
    <li><nav className='nav-bar'><p>Nombre</p><p>Estado</p><p>Acción</p></nav></li>
      <li>
        <span><p>Gym</p><p>Listo</p><p>Borrar</p></span>
      </li>
      <li>
        <span><p>Gym</p><p>Listo</p><p>Borrar</p></span>
      </li>
      <li>
        <span><p>Gym</p><p>Listo</p><p>Borrar</p></span>
      </li>
    </ul>
    </>
  );
}

export default Tasks;
