export function fetchTodos() {
  return fetch(`${window.location.origin}/todos.json`)
    .then(response => response.json())
    .catch(error => console.log(error))
}

