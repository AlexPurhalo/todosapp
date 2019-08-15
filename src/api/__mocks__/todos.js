export function fetchTodos() {
  return Promise.resolve([
    {id: 1, title: "workout",     done: false},
    {id: 2, title: "watch porn",  done: true },
    {id: 3, title: "read a book", done: false}
  ])
}

