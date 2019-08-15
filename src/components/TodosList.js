import React from 'react'

export default function ({ todos, toggleTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <li onClick={() => toggleTodo(todo.id, todos)} 
            key={todo.id} 
            style={{textDecoration: todo.done ? 'line-through' : ''}}
            children={todo.title} />
      ))}
    </ul>
  )
}

