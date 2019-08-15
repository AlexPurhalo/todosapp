import React from 'react'
import { shallow, mount  } from 'enzyme'
import App from './App'
import TodosForm from './TodosForm'
import TodosList from './TodosList'

jest.mock('../api/todos')

describe('App container', () => {
  test('renders correct content', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })

  test('fetches todos after mounting', async () => {
    const wrapper = shallow(<App />)
    await Promise.resolve()
    expect(wrapper.state().todos.length).toBeGreaterThan(1)
  })

  test('performs adding todos', async () => {
    const wrapper = mount(<App />)
    await Promise.resolve()
    wrapper.find(TodosForm).props().createTodo('workout')
    expect(wrapper.state().todos).toContainEqual(
      expect.objectContaining({title: 'workout', done: false})
    )
  })

  test('performs updating todos', async () => {
    const wrapper = mount(<App />)
    await Promise.resolve()
    const todos = wrapper.state().todos
    const { id, done } = todos[0]
    wrapper.find(TodosList).props().toggleTodo(id, todos)
    expect(wrapper.state().todos[0].done).not.toEqual(done)
    
  })
})
