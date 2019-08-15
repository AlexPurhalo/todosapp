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
    this.setState({ 
      todos: [
        ...this.state.todos, { 
          id: Math.max(...this.state.todos.map(todo => todo.id)) + 1,
          title: title, 
          done: false
        }
      ] 
    })
  }
  updateTodo = (id, todos) => {
    this.setState({ 
      todos: todos.map(
        todo => todo.id === id 
          ? {...todo, done: !todo.done} : todo
      ) 
    }) 
  }
  render() {
    return (
      <div>
        <TodosForm createTodo={this.addTodo} />
        <TodosList toggleTodo={this.updateTodo} todos={this.state.todos} />
      </div>
    )
  }
} 
