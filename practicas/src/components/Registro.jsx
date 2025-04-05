import React, { useState } from 'react'
import './Registro.css'
import ListaTareas from './ListaTareas';

export default function Registro() {

  const [task, setTask] = useState([]);
  const [name, setName] = useState("");
  const [descrip, setDescrip] = useState("");
  const [numId, setNumId] = useState(0);
  const [estado, setEstado] = useState(false);

  const handleClick = () => {
    console.log(task.length);
    if (name !== "" && descrip !== "") {
      setNumId(task.length + 1)
      setTask([...task, { id: numId, name: name, description: descrip, state: estado }]);
    }
  }

  return (
    <div className='contenedor'>
      <div className='contenedor-registro'>
        <p>Nombre de la tarea:</p>
        <input value={name} onChange={(e) => setName(e.target.value)} name='nameTask' type="text" />
        <p id='desT'>Descripcion de la tarea:</p>
        <textarea value={descrip} onChange={(e) => setDescrip(e.target.value)} name="desTask" id=""></textarea>
        <br />
        <label htmlFor='checkEstado'>Estado</label>
        <input id='checkEstado' type="checkbox" checked={estado} onChange={(e) => setEstado(e.target.checked)} />
        <br />
        <button onClick={handleClick} id='btnGuardar'>Guardar</button>
      </div>

      <div>
        <ListaTareas task={task}/>
      </div>
    </div>
  )
}
