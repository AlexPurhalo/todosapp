import React, { Component } from 'react'

export default class extends Component {
  state = {
    value: ''
  }
  handleInputeChange = (e) => {
    this.setState({ value: e.target.value })
  }
  handleFormSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo({ title: this.state.value })
    this.setState({ value: '' })
  }
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input value={this.state.value} onChange={this.handleInputeChange}/>
        <button>Submit</button>
      </form>
    )
  }
}

