import React, { useState } from 'react'
import './Registro.css'
import ListaTareas from './ListaTareas';
import { v4 as uuidv4 } from 'uuid';

export default function Registro() {

  const [task, setTask] = useState([]);
  const [name, setName] = useState("");
  const [descrip, setDescrip] = useState("");
  const [estado, setEstado] = useState(false);

  const handleClick = () => {
    if (name !== "" && descrip !== "") {
      const newId = uuidv4();
      setTask([...task, { id: newId, name: name, description: descrip, state: estado }]);
      setName("");
      setDescrip("");
      setEstado(false);
    }
  }

  return (
    <div className='contenedor'>
      <div className='contenedor-registro'>
        <p>Nombre de la tarea:</p>
        <input aria-label='Nombre de la tarea' value={name} onChange={(e) => setName(e.target.value)} name='nameTask' type="text" />
        <p id='desT'>Descripcion de la tarea:</p>
        <textarea className='txtDescrp' maxLength={100} aria-label='Descripcion de la tarea' value={descrip} onChange={(e) => setDescrip(e.target.value)} name="desTask" id=""></textarea>
        <br />
        <div className='cont-estado'>
          <label htmlFor='checkEstado'>Estado</label>
          <input aria-label='Estado de la tarea' id='checkEstado' type="checkbox" checked={estado} onChange={(e) => setEstado(e.target.checked)} />
        </div>
        <br />
        <button onClick={handleClick} id='btnGuardar'>Guardar</button>
      </div>

      <div>
        <ListaTareas task={task} />
      </div>
    </div>
  )
}
