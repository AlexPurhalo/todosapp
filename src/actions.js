export function addTodo(title) {
  return ({
    type: 'ADD_TODO',
    title: title
  })
}

export function updateTodo(id) {
  return ({
    type: 'UPDATE_TODO',
    id: id
  })
}

export function fetchTodos(todos) {
  return ({
    type: 'GET_TODOS',
    todos: todos
  })
}
