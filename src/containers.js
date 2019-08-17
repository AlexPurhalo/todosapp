import { connect  } from 'react-redux'
import TodosForm from './components/TodosForm'
import TodosList from './components/TodosList'
import { addTodo, updateTodo, fetchTodos } from './actions' 
import withTodos from './hocs/withTodos'

export const TodosFormContainer = connect(
  null,
  dispatch => ({ createTodo(title) { dispatch(addTodo(title))} })
)(TodosForm)

export const TodosListContainer = connect(
  state => ({ todos: state.todos }), 
  dispatch => ({
    toggleTodo(id)  { dispatch(updateTodo(id))    },
    getTodos(todos) { dispatch(fetchTodos(todos)) }
  })
)(withTodos(TodosList))
