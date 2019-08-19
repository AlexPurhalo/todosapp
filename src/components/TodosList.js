import React from 'react'

export default function ({ todos, toggleTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <li onClick={() => toggleTodo(todo.id)} 
            key={todo.id} 
            style={{textDecoration: todo.done ? 'line-through' : ''}}
            children={todo.title} />
      ))}
    </ul>
  )
}

