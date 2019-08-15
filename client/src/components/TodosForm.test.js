import React from 'react'
import { shallow  } from 'enzyme'
import TodosForm from './TodosForm'

describe('TodosForm component', () => {
  test('renders correct UI', () => {
    const wrapper = shallow(<TodosForm />)

    expect(wrapper).toMatchSnapshot()
  })

  test('afforts the input changing', () => {
    const wrapper = shallow(<TodosForm />)
    const event = { target: { value: 'do homework' } }

    wrapper.find('input').simulate('change', event)
    
    expect(wrapper.find('input').props().value).toEqual(event.target.value)
  })

  test('prevents page from reloading while subbitting', () => {
    const wrapper = shallow(<TodosForm createTodo={jest.fn()}/>)
    const preventDefault = jest.fn()
    
    wrapper.find('form').simulate('submit', {preventDefault})

    expect(preventDefault).toBeCalled()
  })

  test('cleans input after subbitting', () => {
    const wrapper = shallow(<TodosForm createTodo={jest.fn()}/>)
    const preventDefault = jest.fn()

    wrapper.find('input').simulate('change', {target: {value: 'do homework'}})
    wrapper.find('form').simulate('submit', {preventDefault})

    expect(wrapper.find('input').props().value).toEqual('')
  })

  test('calls the callback responsible for creating a todo while subbitting ', () => {
    const createTodo = jest.fn(), value = 'do homework'
    const wrapper = shallow(<TodosForm createTodo={createTodo} />)

    wrapper.find('input').simulate('change', {target: { value }})
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() })

    expect(createTodo).toHaveBeenCalledWith(value)
  })
})

