import { connect } from 'react-redux'
import { compose } from 'redux'
import TodosForm from './components/TodosForm'
import TodosList from './components/TodosList'
import Filter from './components/Filter'
import withTodos from './hocs/withTodos'
import { getTodos, addTodo, updateTodo } from './todosReducer'
import { toggleTodosDisplay } from './filterReducer'

export const TodosFormContainer = connect(
  null,
  { addTodo }
)(TodosForm)

export const TodosListContainer = compose(
  connect(
    state => ({ 
      todos: state.filter.completedTodosAreHidden 
        ? state.todos.filter(todo => !todo.done) 
        : state.todos 
    }), 
    { getTodos, updateTodo }
  ),
  withTodos
)(TodosList)

export const FilterContainer = connect(
  state => ({ completedTodosAreHidden: state.filter.completedTodosAreHidden }),
  { toggleTodosDisplay }   
)(Filter)

