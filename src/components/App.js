import React, { Component } from 'react'
import { compose } from 'redux'
import { TodosFormContainer, TodosListContainer } from '../containers'
import withTodos from '../hocs/withTodos'

export default function (props) {
  return (
    <div>
      <TodosFormContainer />
      <TodosListContainer />
    </div>
  )
}
