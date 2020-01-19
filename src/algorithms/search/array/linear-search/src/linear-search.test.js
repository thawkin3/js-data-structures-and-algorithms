import { linearSearch } from './linear-search'

const showLogs = process.env.SHOW_LOGS === '1'

describe('linearSearch', () => {
  it('returns the index when it finds an element that exists in the array', () => {
    const testArray = [1, 3, 8, 5, 9, 10, 12]
    expect(linearSearch(testArray, 8, showLogs)).toBe(2)
  })

  it('returns the first index when it finds an element that exists in the array multiple times', () => {
    const testArray = ['c', 'b', 'd', 'c']
    expect(linearSearch(testArray, 'c', showLogs)).toBe(0)
  })

  it('returns -1 when it does not find the element it is looking for', () => {
    const testArray = [1, 3, 8, 5, 9, 10, 12]
    expect(linearSearch(testArray, 999, showLogs)).toBe(-1)
  })

  it('handles a missing needle argument', () => {
    const testArray = [1, 3, 8, 5, 9, 10, 12]
    expect(linearSearch(testArray, undefined, showLogs)).toBe(-1)
    expect(linearSearch(testArray, null, showLogs)).toBe(-1)
  })

  it('handles a non-array haystack argument', () => {
    expect(linearSearch('a string', 42, showLogs)).toBe(-1)
    expect(linearSearch(100, 42, showLogs)).toBe(-1)
    expect(linearSearch(null, 42, showLogs)).toBe(-1)
    expect(linearSearch(undefined, 42, showLogs)).toBe(-1)
    expect(linearSearch({ someKey: 'someValue' }, 42, showLogs)).toBe(-1)
  })

  it('can search for a string in an array of strings', () => {
    const testArray = ['apple', 'banana', 'cat', 'dog', 'egg', 'fan', 'giraffe']
    expect(linearSearch(testArray, 'cat', showLogs)).toBe(2)
  })
})
