import { connect } from 'react-redux'
import { compose } from 'redux'
import { createSelector } from '@reduxjs/toolkit'
import TodosForm from './components/TodosForm'
import TodosList from './components/TodosList'
import Filter from './components/Filter'
import withTodos from './hocs/withTodos'
import { getTodos, addTodo, updateTodo } from './todosReducer'
import { toggleTodosDisplay, toggleInputDisplay } from './filterReducer'

const selectTodos = state => state.todos
const selectFilter = state => state.filter

const getFilteredTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => (
    filter.completedTodosAreHidden 
      ? todos.filter(todo => !todo.done)
      : todos
  )
)

export const TodosFormContainer = connect(
  state => ({ inputIsHidden: state.filter.inputIsHidden }),
  { addTodo, toggleInputDisplay }
)(TodosForm)

export const TodosListContainer = compose(
  connect(
    state => ({ todos: getFilteredTodos(state) }), 
    { getTodos, updateTodo }
  ),
  withTodos
)(TodosList)

export const FilterContainer = connect(
  state => ({ 
    completedTodosAreHidden: state.filter.completedTodosAreHidden,
    inputIsHidden: state.filter.inputIsHidden
  }),
  { toggleTodosDisplay, toggleInputDisplay }   
)(Filter)

