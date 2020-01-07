/**
 * Selection Sort
 *
 * Finds the lowest value in the remaining unsorted items in the array
 * and swaps it into the earliest unsorted position
 * Loops through the array for every element
 *
 * The bubble sort iterates through the entire array for each pass,
 * but the selection sort only has to iterate through the remaining unsorted
 * items for each pass, making it a little more efficient
 * Not appropriate for large unsorted data sets
 *
 * Best case performance: Ω(n^2) (always loops through the entire array)
 * Average case performance: 0(n^2) (always loops through the entire array)
 * Worst case performance: O(n^2) (always loops through the entire array)
 *
 * Space required: O(n) (because it operates directly on the input array)
 */

export const selectionSort = (arr, showLogs) => {
  const sortedArr = [...arr]

  /* istanbul ignore next */
  showLogs && console.log(`starting array: ${sortedArr.join(' ')}`)

  for (let i = 0; i < sortedArr.length - 1; i++) {
    let minValueIndex = i

    for (let j = i; j < sortedArr.length; j++) {
      if (sortedArr[j] < sortedArr[minValueIndex]) {
        minValueIndex = j
      }
    }

    const originalStartingValue = sortedArr[i]
    sortedArr[i] = sortedArr[minValueIndex]
    sortedArr[minValueIndex] = originalStartingValue

    /* istanbul ignore next */
    showLogs && console.log(`iteration ${i + 1}: array: ${sortedArr.join(' ')}`)
  }

  return sortedArr
}
