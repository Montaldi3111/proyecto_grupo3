import './list.css'
import Tasks from './Tasks'
function List () {
    return(
        <div className="task-container">
            <span className='title'><h1>List</h1></span>
            <div className='input-container'>
            <input type='text' placeholder='¿Qué desea hacer hoy?'></input>
            <br />
            <button>Agregar</button>
            </div>
            <Tasks/>
        </div>
    )
}

export default List
