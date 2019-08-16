import createStore from './store'
import { addTodo, updateTodo, fetchTodos } from './actions'

describe('Action Creators', () => {
  describe('addTodo', () => {
    const store = createStore({ 
      todos: [ 
        { id: 1, title: 'watch porn', done: false },
        { id: 2, title: 'do homework', done: true } 
      ]
    }) 

    beforeAll(() => {
      store.dispatch(addTodo('have a breakfast'))
    })

    it('should add a new todo', () => {
      expect(store.getState().todos).toHaveLength(3)
    })
      
    // it('should has a unique id', () => {
    //
    // })
    //
    // it('should has falsy done state by default', () => {
    //
    // })
  })
})
