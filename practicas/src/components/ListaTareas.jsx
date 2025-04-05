import React from 'react'

export default function ListaTareas({task}) {
  return (
    <div><ul>
    {task.map((item) =>
      <li key={item.id}>
        {item.id}
        <br />
        {item.name}
        <br />
        {item.description}
        <br />
        {item.state !=false ? "Realizada" : "Pendiente"}
      </li>
    )}
  </ul></div>
  )
}
