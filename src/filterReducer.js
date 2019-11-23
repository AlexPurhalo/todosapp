import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: { completedTodosAreHidden: false, inputIsHidden: false },
  reducers: {
    toggleTodosDisplay: (state, action) => ({
      ...state, completedTodosAreHidden: action.payload.hidden
    }),
    toggleInputDisplay: (state, action) => ({
      ...state, inputIsHidden: action.payload.hidden
    })
  }
})

export const { toggleTodosDisplay, toggleInputDisplay } = filterSlice.actions

export default filterSlice.reducer

