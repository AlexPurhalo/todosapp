import React, { Component } from 'react'
import { fetchTodos } from '../api/todos'

export default class extends Component {
  componentDidMount() {
    fetchTodos().then(todos => this.props.getTodos(todos))
  }
  render() {
    return (
      <ul>
          {this.props.todos.map(todo => (
            <li onClick={() => this.props.toggleTodo(todo.id)} 
              key={todo.id} 
              style={{textDecoration: todo.done ? 'line-through' : ''}}
              children={todo.title} 
            />
          ))}
      </ul>
    )
  }
}

