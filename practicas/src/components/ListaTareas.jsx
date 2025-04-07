import React from 'react'

export default function ListaTareas({ task }) {
  return (
    <div>   
      <table class="table">
        <caption>Lista de tareas</caption>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          {
            task.map((item) =>
              <tr>
                <th key={item.id}>{item.id}</th>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.state != false ? "Realizada" : "Pendiente"}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}
