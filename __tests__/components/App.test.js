import React from 'react'
import { shallow, mount  } from 'enzyme'
import App from '../../src/components/App'

describe('App container', () => {
  test('renders correct content', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })
})
