import { connect } from 'react-redux'
import { compose } from 'redux'
import TodosForm from './components/TodosForm'
import TodosList from './components/TodosList'
import withTodos from './hocs/withTodos'
import { getTodos, addTodo, updateTodo } from './todosReducer'

export const TodosFormContainer = connect(
  null,
  { addTodo }
)(TodosForm)

export const TodosListContainer = compose(
  connect(
    state => ({ todos: state.todos }), 
    { getTodos, updateTodo }
  ),
  withTodos
)(TodosList)
