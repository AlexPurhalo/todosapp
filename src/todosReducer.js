import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    getTodos: (state, action) => action.payload.todos,
    addTodo: (state, action) => [...state, {
      id: state.length + 1,
      title: action.payload.title,
      done: false
    }], 
    updateTodo: (state, action) => (
      state.map(todo => todo.id === action.payload.id 
        ? {...todo, done: !todo.done} : todo)
    )  
  }
})

export const { getTodos, addTodo, updateTodo } = todosSlice.actions

export default todosSlice.reducer

