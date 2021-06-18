/**
 * Counting Sort
 *
 * Counts the occurrence of each element in the input array and uses that to create a sorted output array
 *
 * Best case performance: Ω(n + k) (always loops through the input array, count array, and output array)
 * Average case performance: θ(n + k) (always loops through the input array, count array, and output array)
 * Worst case performance: O(n + k) (always loops through the input array, count array, and output array)
 *
 * Space required: O(n + k)
 */

export const countingSort = (arr, minValue, maxValue, showLogs) => {
  const sortedArr = []
  const countArr = []
  let min = minValue
  let max = maxValue

  /* istanbul ignore next */
  showLogs && console.log(`starting array: ${arr.join(' ')}`)

  if (typeof min === 'undefined' || typeof max === 'undefined') {
    /* istanbul ignore next */
    showLogs && console.log('getting min and max values of the input array')

    for (let i = 0; i < arr.length; i++) {
      const currentElement = arr[i]

      if (i === 0) {
        min = currentElement
        max = currentElement
      }

      if (currentElement < min) {
        min = currentElement
      }

      if (currentElement > max) {
        max = currentElement
      }
    }
  }

  /* istanbul ignore next */
  showLogs && console.log(`min value: ${min}; max value: ${max}`)

  const countRange = max - min + 1
  for (let i = 0; i < countRange; i++) {
    countArr.push(0)
  }

  /* istanbul ignore next */
  showLogs && console.log(`initialized count array: ${countArr.join(' ')}`)

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i]
    countArr[currentElement - min]++
  }

  /* istanbul ignore next */
  showLogs && console.log(`populated count array: ${countArr.join(' ')}`)

  for (let i = 0; i < countArr.length; i++) {
    while (countArr[i] > 0) {
      sortedArr.push(i + min)
      countArr[i]--
    }
  }

  /* istanbul ignore next */
  showLogs && console.log(`sorted output array: ${sortedArr.join(' ')}`)

  return sortedArr
}
