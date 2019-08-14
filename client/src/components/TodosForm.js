import React, { Component } from 'react'

export default class extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     lol: 'ff'
  //   }
  // }
  state = {
    value: ''
  }
  render() {
    return (
      <form onSubmit={
        (e) => { 
          e.preventDefault()
          console.log('works!')
        }}>
        <input onChange={(e) => console.log(e.target.value)}/>
        <button>Submit</button>
      </form>
    )
  }
}
