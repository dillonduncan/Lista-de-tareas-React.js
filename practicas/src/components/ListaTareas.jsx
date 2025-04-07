import React from 'react'

export default function ListaTareas({ task }) {  
  return (
    <div>   
      <table class="table">
        <caption>Lista de tareas</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Estado</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            task.map((item, index) =>              
              <tr key={item.id}>
                <th scope='row' >{index+1}</th>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.state ? "Realizada" : "Pendiente"}</td>
                <td><button className='btnEditar'>Editar</button> <button className='btnEliminar'>Eliminar</button></td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}
