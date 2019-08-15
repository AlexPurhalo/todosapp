export function fetchTodos() {
  return Promise.resolve({
    response: {
      results: [
        { id: 1, title: "workout",     done: false },
        { id: 2, title: "watch porn",  done: true  },
        { id: 3, title: "read a book", done: false }
      ]
    }
  })
}

export function addTodo(title) {
  return Promise.resolve({
    response: {
      results: [
        { id: 1, title: "workout",     done: false },
        { id: 2, title: "watch porn",  done: true  },
        { id: 3, title: "read a book", done: false },
        { id: 4, title: title,         done: false }
      ]
    }
  })
}
