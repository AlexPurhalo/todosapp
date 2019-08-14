import React from 'react'

export default function ({ todos, toggleTodoStatus }) {
  return (
    <ul>
      {todos.map(todo => (
        <li onClick={() => toggleTodoStatus(todo.id)} 
            key={todo.id} 
            style={{textDecoration: todo.isDone ? 'line-through' : ''}}
            children={todo.title} />
      ))}
    </ul>
  )
}

