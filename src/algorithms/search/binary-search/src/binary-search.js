// Binary Search
// Starts at the midpoint and continues to cut the array into halves
// Only can be used for sorted arrays
// Best case: 0(1) (the element you're looking for is located at the array's midpoint)
// Worst case: 0(log n) (the element is located near the beginning or end of the array)

export const binarySearch = (haystack, needle, showLogs) => {
  let searchableHaystack = [...haystack]
  let i = 1
  let fullHaystackMidpointIndex = 0

  while (searchableHaystack.length > 0) {
    const midpointIndex = Math.floor(searchableHaystack.length / 2)
    fullHaystackMidpointIndex += midpointIndex

    /* istanbul ignore next */
    showLogs &&
      console.log(
        `iteration ${i}: midpoint index: ${fullHaystackMidpointIndex}; array to search: ${searchableHaystack.join(
          ', '
        )}; ${needle} === ${
          searchableHaystack[midpointIndex]
        } ? ... ${needle === searchableHaystack[midpointIndex]}!`
      )

    if (searchableHaystack[midpointIndex] === needle) {
      return fullHaystackMidpointIndex
    } else if (searchableHaystack[midpointIndex] > needle) {
      fullHaystackMidpointIndex -= midpointIndex
      searchableHaystack = searchableHaystack.slice(0, midpointIndex)
    } else {
      fullHaystackMidpointIndex += 1
      searchableHaystack = searchableHaystack.slice(midpointIndex + 1)
    }

    i++
  }
  return -1
}
