import insertionSort from './insertionSort'

const showLogs = false

describe('insertionSort', () => {
  it('correctly sorts an unsorted array', () => {
    const arrayToSort = [3, 6, 2, 8, 9, 1, 4, 5, 7]
    const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    expect(insertionSort(arrayToSort, showLogs)).toEqual(expectedResult)
  })

  it('correctly sorts a mostly sorted array', () => {
    const arrayToSort = [1, 2, 9, 3, 4, 5, 6, 7, 8]
    const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    expect(insertionSort(arrayToSort, showLogs)).toEqual(expectedResult)
  })

  it('correctly returns an already sorted array', () => {
    const arrayToSort = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    expect(insertionSort(arrayToSort, showLogs)).toEqual(arrayToSort)
  })

  it('can handle an array with duplicates', () => {
    const arrayToSort = [3, 6, 2, 8, 4, 4, 4, 4, 7]
    const expectedResult = [2, 3, 4, 4, 4, 4, 6, 7, 8]
    expect(insertionSort(arrayToSort, showLogs)).toEqual(expectedResult)
  })
})
