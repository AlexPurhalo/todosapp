import React from 'react'
import withTodos from '../../src/hocs/withTodos'
import { mount } from 'enzyme'

jest.mock('../../src/api/todos', () => ({
  fetchTodos: () => Promise.resolve([
    {id: 1, title: "workout",     done: false},
    {id: 2, title: "watch porn",  done: true },
    {id: 3, title: "read a book", done: false}
  ])
}))

describe('With Todos HOC', () => {
  const todos = [
    {id: 1, title: "workout",     done: false},
    {id: 2, title: "watch porn",  done: true },
    {id: 3, title: "read a book", done: false}
  ]
  it('calls the callback to get todos while mounting', async () => {
    const MockComponent = (props) => (<div />)
    const ComposedComponent = withTodos(MockComponent)
    const getTodos = jest.fn()
    const wrapper = mount(<ComposedComponent getTodos={getTodos} />)
    await Promise.resolve 
    expect(getTodos).toHaveBeenCalledWith(todos)
  })
  it('pipes props to the composed component', () => {
    const MockComponent = (props) => (<div />)
    const ComposedComponent = withTodos(MockComponent)
    const wrapper = mount(<ComposedComponent todos={todos} />)
    expect(wrapper.props().todos).toEqual(todos)
  })
})

