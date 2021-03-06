import React, { Component } from 'react'
import { compose } from 'redux'
import { TodosFormContainer, TodosListContainer, FilterContainer } from '../containers'
import withTodos from '../hocs/withTodos'

export default function (props) {
  return (
    <div>
      <TodosFormContainer />
      <TodosListContainer />
      <FilterContainer />
    </div>
  )
}
