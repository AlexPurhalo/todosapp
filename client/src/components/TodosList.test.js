import React from 'react'
import { shallow } from 'enzyme'
import TodosList from './TodosList'

describe('TodosList component', () => {
  const todos = [
    { id: 1, title: 'Call mom',       isDone: false },
    { id: 2, title: 'Clean the room', isDone: true  },
    { id: 3, title: 'Watch a movie',  isDone: true  }
  ]

  test('renders correct UI', () => {
    const wrapper = shallow(<TodosList todos={todos} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('is rendering when empty todos', () => {
    const wrapper = shallow(<TodosList todos={[]}/>)
    expect(wrapper.exists()).toBeTruthy
  })

  test('contains items when todos are provided', () => {
    const wrapper = shallow(<TodosList todos={todos} />)
    expect(wrapper.find('ul').children()).toHaveLength(todos.length)
  })

  test('calls the callback responsible for completing a todo after click', () => {
    const toggleTodo = jest.fn()
    const wrapper = shallow(<TodosList todos={todos} toggleTodo={toggleTodo} />)
    wrapper.find('ul').childAt(0).simulate('click')
    expect(toggleTodo).toHaveBeenCalledWith(todos[0].id)
  })
})

