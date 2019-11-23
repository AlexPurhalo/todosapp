import React from 'react'

const Filter = ({ completedTodosAreHidden, toggleTodosDisplay, toggleInputDisplay, inputIsHidden }) => (
  <div>
    <button onClick={() => toggleTodosDisplay({ hidden: !completedTodosAreHidden })}>
      {completedTodosAreHidden 
        ? 'Show completed todos' 
        : 'Hide completed todos'}  
    </button>
    <button onClick={() => toggleInputDisplay({ hidden: !inputIsHidden })}>
      {inputIsHidden 
        ? 'Show input'
        : 'Hide input'}
    </button>
  </div>
)

export default Filter

