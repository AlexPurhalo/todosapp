export function fetchTodos() {
  return fetch('localhost:3000/todos/').then(resp => resp.json())
}

export function addTodo(title) { 
  return fetch('localhost:3000/todos/', { 
    method: 'POST', 
    headers: { 'Content-Type: application/josn' },
    body: JSON.stringify({title})
  }).then(resp => resp.json())
}
