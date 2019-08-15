import React, { Component } from 'react'
import TodosForm from './TodosForm'
import TodosList from './TodosList'
import { fetchTodos } from '../api/todos'

export default class extends Component { 
  state = { todos: [] }
  componentDidMount() {
    fetchTodos().then(todos => this.setState({ todos }))
  }
  addTodo = (title) => {
    
  }
  updateTodo = (id, todos) => {
     
  }
  render() {
    return (
      <div>
        <TodosForm addTodo={this.addTodo} />
        <TodosList updateTodo={this.updateTodo} todos={this.state.todos} />
      </div>
    )
  }
} 
