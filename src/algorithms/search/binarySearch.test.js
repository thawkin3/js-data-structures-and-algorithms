import binarySearch from './binarySearch'

const showLogs = false

describe('binarySearch', () => {
  it('returns the index when it finds an element that exists in the array', () => {
    const testArray = [1, 3, 5, 8, 9, 10, 12]
    const testArray2 = [
      0,
      2,
      4,
      6,
      8,
      10,
      12,
      14,
      16,
      18,
      20,
      22,
      24,
      26,
      28,
      30,
    ]

    expect(binarySearch(testArray, 10, showLogs)).toBe(5)
    expect(binarySearch(testArray, 1, showLogs)).toBe(0)
    expect(binarySearch(testArray2, 14, showLogs)).toBe(7)
    expect(binarySearch(testArray2, 0, showLogs)).toBe(0)
    expect(binarySearch(testArray2, 22, showLogs)).toBe(11)
  })

  it('can handle sorted arrays with duplicate elements', () => {
    const testArray = [1, 1, 3, 3, 3]
    const testArray2 = [1, 1, 3, 3]

    expect(binarySearch(testArray, 3, showLogs)).toBe(2)
    expect(binarySearch(testArray2, 3, showLogs)).toBe(2)
  })

  it('returns -1 when it does not find the element it is looking for', () => {
    const testArray = [1, 3, 5, 8, 9, 10, 12]
    const testArray2 = [
      0,
      2,
      4,
      6,
      8,
      10,
      12,
      14,
      16,
      18,
      20,
      22,
      24,
      26,
      28,
      30,
    ]

    expect(binarySearch(testArray, 999, showLogs)).toBe(-1)
    expect(binarySearch(testArray2, 999, showLogs)).toBe(-1)
  })
})
