import { countingSort } from './counting-sort'

const showLogs = process.env.SHOW_LOGS === '1'

describe('countingSort', () => {
  describe('non-negative integers in the input array', () => {
    it('correctly sorts an unsorted array', () => {
      const arrayToSort = [3, 6, 2, 8, 9, 1, 4, 5, 7]
      const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      expect(countingSort(arrayToSort, undefined, undefined, showLogs)).toEqual(
        expectedResult
      )
    })

    it('correctly sorts a mostly sorted array', () => {
      const arrayToSort = [1, 2, 9, 3, 4, 5, 6, 7, 8]
      const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      expect(countingSort(arrayToSort, undefined, undefined, showLogs)).toEqual(
        expectedResult
      )
    })

    it('correctly sorts an inversely sorted array', () => {
      const arrayToSort = [9, 8, 7, 6, 5, 4, 3, 2, 1]
      const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      expect(countingSort(arrayToSort, undefined, undefined, showLogs)).toEqual(
        expectedResult
      )
    })

    it('correctly returns an already sorted array', () => {
      const arrayToSort = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      expect(countingSort(arrayToSort, undefined, undefined, showLogs)).toEqual(
        expectedResult
      )
    })

    it('can handle an array with duplicates', () => {
      const arrayToSort = [3, 6, 2, 8, 4, 4, 4, 4, 7]
      const expectedResult = [2, 3, 4, 4, 4, 4, 6, 7, 8]
      expect(countingSort(arrayToSort, undefined, undefined, showLogs)).toEqual(
        expectedResult
      )
    })

    it('can handle an array with only one item', () => {
      const arrayToSort = [1]
      const expectedResult = [1]
      expect(countingSort(arrayToSort, undefined, undefined, showLogs)).toEqual(
        expectedResult
      )
    })

    it('can handle an empty array', () => {
      const arrayToSort = []
      const expectedResult = []
      expect(countingSort(arrayToSort, undefined, undefined, showLogs)).toEqual(
        expectedResult
      )
    })
  })

  describe('negative integers in the input array', () => {
    it('correctly sorts an unsorted array', () => {
      const arrayToSort = [3, 6, 2, 8, -2, 9, 1, 4, -1, 5, 10, 0, 7]
      const expectedResult = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      expect(countingSort(arrayToSort, undefined, undefined, showLogs)).toEqual(
        expectedResult
      )
    })

    it('correctly sorts a mostly sorted array', () => {
      const arrayToSort = [-2, -1, 0, 1, 2, 9, 3, 4, 5, 6, 7, 8, 10]
      const expectedResult = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      expect(countingSort(arrayToSort, undefined, undefined, showLogs)).toEqual(
        expectedResult
      )
    })

    it('correctly sorts an inversely sorted array', () => {
      const arrayToSort = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2]
      const expectedResult = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      expect(countingSort(arrayToSort, undefined, undefined, showLogs)).toEqual(
        expectedResult
      )
    })

    it('correctly returns an already sorted array', () => {
      const arrayToSort = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      const expectedResult = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      expect(countingSort(arrayToSort, undefined, undefined, showLogs)).toEqual(
        expectedResult
      )
    })

    it('can handle an array with duplicates', () => {
      const arrayToSort = [3, 6, -1, -1, 2, 8, 4, 4, 10, 4, -1, 4, 7]
      const expectedResult = [-1, -1, -1, 2, 3, 4, 4, 4, 4, 6, 7, 8, 10]
      expect(countingSort(arrayToSort, undefined, undefined, showLogs)).toEqual(
        expectedResult
      )
    })

    it('can handle an array with only one item', () => {
      const arrayToSort = [-1]
      const expectedResult = [-1]
      expect(countingSort(arrayToSort, undefined, undefined, showLogs)).toEqual(
        expectedResult
      )
    })
  })

  describe('min and max value arguments', () => {
    it('uses the provided minValue and maxValue arguments when provided', () => {
      const arrayToSort = [3, 6, 2, 8, 9, 1, 4, 5, 7]
      const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      expect(countingSort(arrayToSort, 1, 9, showLogs)).toEqual(expectedResult)
    })

    it('calculates the min and max if only the minValue argument is provided', () => {
      const arrayToSort = [3, 6, 2, 8, 9, 1, 4, 5, 7]
      const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      expect(countingSort(arrayToSort, 1, undefined, showLogs)).toEqual(
        expectedResult
      )
    })

    it('calculates the min and max if only the maxValue argument is provided', () => {
      const arrayToSort = [3, 6, 2, 8, 9, 1, 4, 5, 7]
      const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      expect(countingSort(arrayToSort, undefined, 9, showLogs)).toEqual(
        expectedResult
      )
    })
  })
})
