import { insertionSort } from './insertion-sort'

const showLogs = process.env.SHOW_LOGS === '1'

describe('insertionSort', () => {
  describe('odd number of elements', () => {
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

    it('correctly sorts an inversely sorted array', () => {
      const arrayToSort = [9, 8, 7, 6, 5, 4, 3, 2, 1]
      const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      expect(insertionSort(arrayToSort, showLogs)).toEqual(expectedResult)
    })

    it('correctly returns an already sorted array', () => {
      const arrayToSort = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      expect(insertionSort(arrayToSort, showLogs)).toEqual(expectedResult)
    })

    it('can handle an array with duplicates', () => {
      const arrayToSort = [3, 6, 2, 8, 4, 4, 4, 4, 7]
      const expectedResult = [2, 3, 4, 4, 4, 4, 6, 7, 8]
      expect(insertionSort(arrayToSort, showLogs)).toEqual(expectedResult)
    })

    it('can handle an array with only one item', () => {
      const arrayToSort = [1]
      const expectedResult = [1]
      expect(insertionSort(arrayToSort, showLogs)).toEqual(expectedResult)
    })
  })

  describe('even number of elements', () => {
    it('correctly sorts an unsorted array', () => {
      const arrayToSort = [3, 6, 2, 8, 9, 1, 4, 5, 10, 7]
      const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      expect(insertionSort(arrayToSort, showLogs)).toEqual(expectedResult)
    })

    it('correctly sorts a mostly sorted array', () => {
      const arrayToSort = [1, 2, 9, 3, 4, 5, 6, 7, 8, 10]
      const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      expect(insertionSort(arrayToSort, showLogs)).toEqual(expectedResult)
    })

    it('correctly sorts an inversely sorted array', () => {
      const arrayToSort = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
      const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      expect(insertionSort(arrayToSort, showLogs)).toEqual(expectedResult)
    })

    it('correctly returns an already sorted array', () => {
      const arrayToSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      expect(insertionSort(arrayToSort, showLogs)).toEqual(expectedResult)
    })

    it('can handle an array with duplicates', () => {
      const arrayToSort = [3, 6, 2, 8, 4, 4, 10, 4, 4, 7]
      const expectedResult = [2, 3, 4, 4, 4, 4, 6, 7, 8, 10]
      expect(insertionSort(arrayToSort, showLogs)).toEqual(expectedResult)
    })

    it('can handle an empty array', () => {
      const arrayToSort = []
      const expectedResult = []
      expect(insertionSort(arrayToSort, showLogs)).toEqual(expectedResult)
    })
  })
})
