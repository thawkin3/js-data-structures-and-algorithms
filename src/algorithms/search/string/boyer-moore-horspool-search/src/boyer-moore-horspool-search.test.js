// TODO: Write more tests after the implementation is complete

import { boyerMooreHorspoolSearch } from './boyer-moore-horspool-search'

const showLogs = process.env.SHOW_LOGS === '1'

describe('boyerMooreHorspoolSearch', () => {
  it('handles a non-string needle argument', () => {
    expect(boyerMooreHorspoolSearch('search me', undefined, showLogs)).toBe(-1)
    expect(boyerMooreHorspoolSearch('search me', null, showLogs)).toBe(-1)
    expect(boyerMooreHorspoolSearch('search me', 42, showLogs)).toBe(-1)
    expect(boyerMooreHorspoolSearch('search me', true, showLogs)).toBe(-1)
    expect(
      boyerMooreHorspoolSearch('search me', { someKey: 'someVal' }, showLogs)
    ).toBe(-1)
  })

  it('handles a non-string haystack argument', () => {
    expect(boyerMooreHorspoolSearch(undefined, 'find me', showLogs)).toBe(-1)
    expect(boyerMooreHorspoolSearch(null, 'find me', showLogs)).toBe(-1)
    expect(boyerMooreHorspoolSearch(42, 'find me', showLogs)).toBe(-1)
    expect(boyerMooreHorspoolSearch(true, 'find me', showLogs)).toBe(-1)
    expect(
      boyerMooreHorspoolSearch({ someKey: 'someVal' }, 'find me', showLogs)
    ).toBe(-1)
  })

  it('returns -1 if the string is not found', () => {
    expect(boyerMooreHorspoolSearch('blah', 'hey', showLogs)).toBe(-1)
  })
})
