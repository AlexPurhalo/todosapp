import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: { completedTodosAreHidden: false },
  reducers: {
    toggleTodosDisplay: (state, action) => ({...state,
      completedTodosAreHidden: action.payload.hidden
    })
  }
})

export const { toggleTodosDisplay } = filterSlice.actions

export default filterSlice.reducer

