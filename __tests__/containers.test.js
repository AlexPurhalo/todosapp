import React from 'react'
import { mount, shallow  } from 'enzyme'
import { Provider } from 'react-redux'
import { TodosFormContainer, TodosListContainer } from '../src/containers'

jest.mock('../src/components/TodosForm')
jest.mock('../src/components/TodosList')

describe('TodosForm', () => {
  let wrapper = null
  const store = {
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

  // it('dispatches action to get todos', () => {
  //   const store = {
  //     dispatch: jest.fn(),
  //     subscribe: jest.fn(),
  //     getState: jest.fn(() => ({ 
  //       todos: []
  //     }))
  //   }
  //   const wrapper = mount(
  //     <Provider store={store}>
  //       <TodosFormContainer />
  //     </Provider>
  //   )
  //   console.log(wrapper.find('TodosFormMock').props())
  //   
  // })
})

