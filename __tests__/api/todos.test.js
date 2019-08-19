import { fetchTodos } from '../../src/api/todos'

describe('fetchTodos', () => {
  it('returns promise resolving to parsed response', () => {
    global.fetch = jest.fn(() => Promise.resolve({ json: () => ''}))
    expect(fetchTodos()).resolves.toBe('');
  })
  it('returns promise handling the error', async () => {
    global.fetch = jest.fn(() => Promise.reject(''))
    expect(fetchTodos()).rejects.toBe('')
  })
})
