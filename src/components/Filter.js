import React from 'react'

const Filter = ({ completedTodosAreHidden, toggleTodosDisplay }) => (
  <div>
    <button onClick={() => toggleTodosDisplay({ hidden: !completedTodosAreHidden })}>
      {completedTodosAreHidden 
        ? 'Show completed todos' 
        : 'Hide completed todos'}  
    </button>
  </div>
)

export default Filter

