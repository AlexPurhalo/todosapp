export function todos (state=[], action) {
  switch(action.type) {
    case 'GET_TODOS': 
      return action.todos
    case 'ADD_TODO':
      return [
        ...state, { 
          id: state.length 
            ? Math.max(...state.map(todo => todo.id)) + 1
            : 0, 
          title: action.title,
          done: false
        }]
    case 'UPDATE_TODO':
      return (
        state.map(
          todo => todo.id === action.id 
          ? {...todo, done: !todo.done} 
          : todo
        )
      )    
    default:
      return state
  }
}
