// Selection Sort
// Finds the lowest value in the remaining unsorted items in the array
// and swaps it into the earliest unsorted position
// Loops through the array for every element
// Best case: 0(n^2) (always loops through the entire array)
// Worst case: 0(n^2) (always loops through the entire array)

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
