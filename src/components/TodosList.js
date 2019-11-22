import React from 'react'

export default function ({ todos, updateTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <li onClick={() => updateTodo({ id: todo.id })} 
            key={todo.id} 
            style={{textDecoration: todo.done ? 'line-through' : ''}}
            children={todo.title} />
      ))}
    </ul>
  )
}

