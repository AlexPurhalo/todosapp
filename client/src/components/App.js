import React from 'react'
import TodosForm from './TodosForm'
import TodosList from './TodosList'

export default function () { 
  const todos = [
    {id: 1, title: 'Call Mom',       isDone: false},
    {id: 2, title: 'Clean the room', isDone: true }
  ]
  const toggleTodoStatus = (id) => {
    console.log(id)
  }
  return (
    <div>
      <TodosForm />
      <TodosList todos={todos} toggleTodoStatus={toggleTodoStatus}/>
    </div>
  )
} 
