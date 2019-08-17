import { todos } from '../src/reducers'

describe('todos reducer', () => {
  it('GET_TODOS success', () => {
    const items = [
      { id: 1, title: 'watch porn', done: false },
      { id: 2, title: 'do homework', done: true }
    ] 
    expect(todos([], { type: 'GET_TODOS', todos: items }))
      .toEqual(items)
  })

  it('ADD_TODO success', () => {
    const items = [ 
      { id: 1, title: 'watch porn', done: false },
      { id: 2, title: 'do homework', done: true } 
    ]
    const item = { id: 3, title: 'call mom', done: false  }
    const actual = todos(items, { type: 'ADD_TODO', title: item.title })
    const expctd = [...items, item ]
    expect(actual).toEqual(expctd)
  }) 
  
  it('UPDATE_TODO', () => {
    const firItem = { id: 1, title: 'watch porn', done: false }
    const secItem = { id: 2, title: 'do homework', done: true }
    const thrItem = { id: 1, title: 'watch porn', done: true }
    const actual = todos([firItem, secItem], { type: 'UPDATE_TODO', id: firItem.id })
    const expctd = [thrItem, secItem]
    expect(actual).toEqual(expctd)
  })

  it('DEFAULT', () => {
    const actual = todos([])
    const expctd = []
    expect(actual).toEqual(expctd)
  })
})
