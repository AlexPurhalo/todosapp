import React, { Component } from 'react'
import { fetchTodos } from '../api/todos'

export default function(ComposedComponent) {
  return class extends Component {
    componentDidMount() {
      fetchTodos().then(todos => this.props.getTodos(todos))
    }
    render() {
      return <ComposedComponent {...this.props}  />  
    }
  }
}
