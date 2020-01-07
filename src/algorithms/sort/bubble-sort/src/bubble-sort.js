/**
 * Bubble Sort
 *
 * Compares each pair of adjacent items and swaps them if they are in the wrong order
 * Continues looping through the array until no more swaps are needed
 * Not appropriate for large unsorted data sets
 *
 * Best case performance: Ω(n) (only one element is out of place, so only one iteration through the array)
 * Average case performance: θ(n^2) (array is mostly unsorted, have to do a loop nested within a loop)
 * Worst case performance: O(n^2) (array is entirely unsorted, have to do a loop nested within a loop)
 *
 * Space required: O(n) (because it operates directly on the input array)
 */

export const bubbleSort = (arr, showLogs) => {
  const sortedArr = [...arr]
  let didSwapSomething = false
  let iteration = 0

  /* istanbul ignore next */
  showLogs && console.log(`starting array: ${sortedArr.join(' ')}`)

  do {
    didSwapSomething = false
    iteration++
    for (let i = 0; i < sortedArr.length - 1; i++) {
      if (sortedArr[i] > sortedArr[i + 1]) {
        const firstPosition = sortedArr[i]
        sortedArr[i] = sortedArr[i + 1]
        sortedArr[i + 1] = firstPosition
        didSwapSomething = true
      }
    }

    /* istanbul ignore next */
    showLogs &&
      console.log(`iteration ${iteration}: array: ${sortedArr.join(' ')}`)
  } while (didSwapSomething)

  return sortedArr
}
