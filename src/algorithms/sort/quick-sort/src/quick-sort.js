/**
 * Quick Sort
 *
 * Pick a pivot value and partition the array
 * Put all values smaller than the pivot to the left and all values larger
 * than the pivot to the right
 * Then continue to perform the pivot and partition algorithm on the left
 * and right partitions, and repeat until it’s all sorted
 *
 * Not appropriate for large inverse-sorted data sets
 * You are doing recursion, so be aware that it puts a new function call
 * on the stack the deeper you go
 *
 * Best case performance: Ω(n log n)
 * Average case performance: 0(n log n)
 * Worst case performance: O(n^2)
 *
 * Space required: O(n) (because it operates directly on the input array)
 */

export const quickSort = (arr, left = 0, right = arr.length - 1, showLogs) => {
  /* istanbul ignore next */
  showLogs && console.log(`current array: ${arr.join(' ')}`)

  if (arr.length < 2) {
    /* istanbul ignore next */
    showLogs &&
      console.log('  array only has 0 or 1 items, so nothing to sort!')
    return arr
  }

  const pivotIndex = partition(arr, left, right, showLogs) // index returned from partition

  if (left < pivotIndex - 1) {
    // more elements on the left side of the pivot
    quickSort(arr, left, pivotIndex - 1, showLogs)
  }

  if (pivotIndex < right) {
    // more elements on the right side of the pivot
    quickSort(arr, pivotIndex, right, showLogs)
  }

  return arr
}

// swaps the position of two elements in an array
const swap = (arr, leftIndex, rightIndex, showLogs) => {
  /* istanbul ignore next */
  showLogs &&
    console.log(
      `    swapping elements with values ${arr[leftIndex]} and ${arr[rightIndex]}`
    )

  const temp = arr[leftIndex]
  arr[leftIndex] = arr[rightIndex]
  arr[rightIndex] = temp
}

const partition = (arr, leftIndex, rightIndex, showLogs) => {
  const pivotIndex = Math.floor((rightIndex + leftIndex) / 2)
  const pivotElement = arr[pivotIndex]

  /* istanbul ignore next */
  showLogs && console.log(`  pivot element chosen is ${pivotElement}`)

  let currentLeftIndex = leftIndex
  let currentRightIndex = rightIndex

  /* istanbul ignore next */
  showLogs &&
    console.log(
      `  current left element: ${arr[currentLeftIndex]}, current right element: ${arr[currentRightIndex]}`
    )

  while (currentLeftIndex <= currentRightIndex) {
    while (arr[currentLeftIndex] < pivotElement) {
      /* istanbul ignore next */
      showLogs &&
        console.log(
          `    left element ${
            arr[currentLeftIndex]
          } is less than ${pivotElement}, moving right by one element to ${
            arr[currentLeftIndex + 1]
          }`
        )

      currentLeftIndex++
    }

    /* istanbul ignore next */
    showLogs &&
      console.log(
        `    left element ${arr[currentLeftIndex]} is greater than or equal to ${pivotElement}, so ${arr[currentLeftIndex]} is eligible to be swapped`
      )

    while (arr[currentRightIndex] > pivotElement) {
      /* istanbul ignore next */
      showLogs &&
        console.log(
          `    right element ${
            arr[currentRightIndex]
          } is greater than ${pivotElement}, moving left by one element to ${
            arr[currentRightIndex - 1]
          }`
        )

      currentRightIndex--
    }

    /* istanbul ignore next */
    showLogs &&
      console.log(
        `    right element ${arr[currentRightIndex]} is less than or equal to ${pivotElement}, so ${arr[currentRightIndex]} is eligible to be swapped`
      )

    if (currentLeftIndex <= currentRightIndex) {
      /* istanbul ignore next */
      showLogs &&
        console.log(
          `    left element ${arr[currentLeftIndex]} is less than or equal to right element ${arr[currentRightIndex]}, so we can swap these two elements`
        )

      swap(arr, currentLeftIndex, currentRightIndex, showLogs)
      currentLeftIndex++
      currentRightIndex--

      /* istanbul ignore next */
      showLogs && console.log(`    resulting array: ${arr.join(' ')}`)
    } else {
      /* istanbul ignore next */
      showLogs &&
        console.log(
          `    left element ${arr[currentLeftIndex]} is NOT less than or equal to right element ${arr[currentRightIndex]}, so we will NOT swap these two elements`
        )
    }
  }

  return currentLeftIndex
}
