import createStore from '../src/store'
import { addTodo, updateTodo, fetchTodos } from '../src/actions'

describe('Action Creators', () => {
  
  it('addTodo adds a new item', () => {
    const store = createStore({ 
      todos: [ 
        { id: 1, title: 'watch porn', done: false },
        { id: 2, title: 'do homework', done: true } 
      ]
    }) 
    store.dispatch(addTodo('have a breakfast'))
    expect(store.getState().todos).toHaveLength(3)
  })

  it('updateTodo changes completion flag', () => {
    const store = createStore({ 
      todos: [ 
        { id: 1, title: 'watch porn', done: false },
        { id: 2, title: 'do homework', done: true } 
      ]
    }) 
    store.dispatch(updateTodo(1))
    expect(store.getState().todos[0].done).toEqual(true)
  })  

  it('fetchTodos add new todos', () => {
    const todos = [{ id: 1, title: 'watch porn', done: false }]
    const store = createStore({ todos: [] }) 

    store.dispatch(fetchTodos(todos))
    expect(store.getState().todos).toEqual(todos)
  })
})
