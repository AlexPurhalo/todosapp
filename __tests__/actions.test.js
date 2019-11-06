import createStore from '../src/store'
import { addTodo, updateTodo, fetchTodos } from '../src/actions'
import { todos } from '../src/reducers'

describe('Action Creators', () => {
  
  it('addTodo adds a new item', () => {
    const store = createStore({ 
      todos: [ 
        { id: 1, title: 'watch porn', done: false },
        { id: 2, title: 'do homework', done: true } 
      ]
    }, { todos }) 
    store.dispatch(addTodo('have a breakfast'))
    expect(store.getState().todos).toHaveLength(3)
  })

  it('updateTodo changes completion flag', () => {
    const store = createStore({ 
      todos: [ 
        { id: 1, title: 'watch porn', done: false },
        { id: 2, title: 'do homework', done: true } 
      ]
    }, { todos }) 
    store.dispatch(updateTodo(1))
    expect(store.getState().todos[0].done).toEqual(true)
  })  

  it('fetchTodos add new todos', () => {
    const items = [{ id: 1, title: 'watch porn', done: false }]
    const store = createStore({ todos: [] }, { todos }) 

    store.dispatch(fetchTodos(items))
    expect(store.getState().todos).toEqual(items)
  })
})
