// TODO: Write more tests after the implementation is complete

import { naiveSearch } from './naive-search'

const showLogs = process.env.SHOW_LOGS === '1'

describe('naiveSearch', () => {
  it('handles a non-string needle argument', () => {
    expect(naiveSearch('search me', undefined, showLogs)).toBe(-1)
    expect(naiveSearch('search me', null, showLogs)).toBe(-1)
    expect(naiveSearch('search me', 42, showLogs)).toBe(-1)
    expect(naiveSearch('search me', true, showLogs)).toBe(-1)
    expect(naiveSearch('search me', { someKey: 'someVal' }, showLogs)).toBe(-1)
  })

  it('handles a non-string haystack argument', () => {
    expect(naiveSearch(undefined, 'find me', showLogs)).toBe(-1)
    expect(naiveSearch(null, 'find me', showLogs)).toBe(-1)
    expect(naiveSearch(42, 'find me', showLogs)).toBe(-1)
    expect(naiveSearch(true, 'find me', showLogs)).toBe(-1)
    expect(naiveSearch({ someKey: 'someVal' }, 'find me', showLogs)).toBe(-1)
  })

  it('returns -1 if the string is not found', () => {
    expect(naiveSearch('blah', 'hey', showLogs)).toBe(-1)
  })
})
