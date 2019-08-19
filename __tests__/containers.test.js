import React from 'react'
import { mount, shallow  } from 'enzyme'
import { Provider } from 'react-redux'
import { TodosFormContainer, TodosListContainer } from '../src/containers'

jest.mock('../src/components/TodosForm')
jest.mock('../src/api/todos', () => ({
  fetchTodos: () => Promise.resolve([
    {id: 1, title: "workout",     done: false},
    {id: 2, title: "watch porn",  done: true },
    {id: 3, title: "read a book", done: false}
  ])
}))
jest.mock('../src/components/TodosList')

describe('TodosList container', () => {
  let wrapper, store = {
    dispatch: jest.fn(),
    subscribe: jest.fn(),
    getState: jest.fn(() => ({ 
      todos: [{id: 1, title: 'text', done: false}]
    }))
  }

  beforeAll(() => wrapper = mount(
    <Provider store={store}>
      <TodosListContainer />
    </Provider>
  ))

  afterEach(() => jest.resetAllMocks())
  
  it('pipes props to children', () => {
    expect(wrapper.find('TodosListMock').props().todos).toHaveLength(1)
  })

  it('dispatches the action updating todos', () => {
    wrapper.find('TodosListMock').props().toggleTodo(1)
    expect(store.dispatch.mock.calls[0][0])
      .toEqual({ id: 1, type: 'UPDATE_TODO' })
  }) 

  it('dispatches the action fetching todos', () => {
    wrapper.find('TodosListMock').props().getTodos()
    expect(store.dispatch.mock.calls[0][0])
      .toEqual({ type: 'GET_TODOS' })
  })
})

describe('TodosForm container', () => {
  let wrapper, store = {
    dispatch: jest.fn(),
    subscribe: jest.fn(),
    getState: jest.fn(() => ({ 
      todos: [{id: 1, title: 'text', done: false}]
    }))
  }
  beforeAll(() => wrapper = mount(
    <Provider store={store}>
      <TodosFormContainer />
    </Provider>
  ))
  it('dispatches action to create a todo', () => {
    wrapper.find('TodosFormMock').props().createTodo('do something')
    expect(store.dispatch.mock.calls[0][0])
      .toEqual({ title: 'do something', type: 'ADD_TODO' })
  })
})

