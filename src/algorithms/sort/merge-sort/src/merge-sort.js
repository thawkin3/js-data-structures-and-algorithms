/**
 * Merge Sort
 *
 * The array is recursively split in half
 * When the array is in groups of 1, it is reconstructed in sort order
 * Each reconstructed array is merged with the other half
 *
 * So if you had an array of 8 items, it’s broken down into two groups of 4,
 * then four groups of 2, then eight groups of 1
 * Then it’s built back up where you combine the eight groups of 1 into four groups of 2,
 * but you sort within each group of 2. Then you combine the four groups of 2 into two
 * groups of 4, and sort those groups of 4. Then you combine the two groups of 4 into
 * one group of 8, and you sort that group.
 *
 * Appropriate for large data sets
 * Data splitting means that the algorithm can be done in parallel
 *
 * Best case performance: Ω(n log n)
 * Average case performance: 0(n log n)
 * Worst case performance: O(n log n)
 *
 * Space required: O(n) (merge sort can be performed in-place, but it’s often not)
 *
 * Merge sort is a predictable algorithm since the time complexity is the same for the worst, average, and best case
 * If you don’t do it in-place, then you take up extra memory allocations for the temporary arrays
 */

export const mergeSort = (arr, showLogs) => {
  /* istanbul ignore next */
  showLogs && console.log(`current array: ${arr.join(' ')}`)

  if (arr.length < 2) {
    /* istanbul ignore next */
    showLogs &&
      console.log('  array only has 0 or 1 items, so nothing to sort!')
    return arr
  }

  // Divide the array into two sub-arrays, right down the middle
  /* istanbul ignore next */
  showLogs && console.log('  splitting the array down the middle!')
  const midpointIndex = Math.floor(arr.length / 2)
  const leftSubArray = mergeSort(arr.slice(0, midpointIndex), showLogs)
  const rightSubArray = mergeSort(arr.slice(midpointIndex), showLogs)

  return merge(leftSubArray, rightSubArray, showLogs)
}

const merge = (arr1, arr2, showLogs) => {
  /* istanbul ignore next */
  showLogs &&
    console.log(`merging arrays [${arr1.join(' ')}] and [${arr2.join(' ')}]`)
  const result = []
  while (arr1.length > 0 && arr2.length > 0) {
    // The two sub-arrays are always sorted, so in order to combine the two sub-arrays,
    // we need to pick off the first value from whichever array currently has
    // a lower value as its first element
    result.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift())
    /* istanbul ignore next */
    showLogs &&
      console.log(
        `  current merge result from the two sub-arrays: ${result.join(' ')}`
      )
  }

  // The while loop stops once one sub-array no longer has any elements,
  // so this combines the result array with whichever sub-array still
  // has elements in it
  const finalResult = result.concat(arr1.length ? arr1 : arr2)
  /* istanbul ignore next */
  showLogs &&
    console.log(
      `  final merge result from the two sub-arrays: ${finalResult.join(' ')}`
    )

  return finalResult
}
