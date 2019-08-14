import React from 'react'
import { shallow } from 'enzyme'
import TodosList from './TodosList'

describe('TodosList component', () => {
  test('renders', () => {
    const wrapper = shallow(
      <TodosList todos={[
        { id: 1, title: 'Have braekfast', isDone: true  },
        { id: 2, title: 'Clean teeth',    isDone: false },
        { id: 3, title: 'Call Mom',       isDone: false }
      ]}/>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
