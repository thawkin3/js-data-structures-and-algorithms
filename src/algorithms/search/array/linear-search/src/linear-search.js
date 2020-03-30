/**
 * Linear Search
 *
 * Starts at the beginning and iterates through the whole array
 *
 * Best case performance: Ω(1) (the element you're looking for is the first in the array)
 * Average case performance: 0(n)
 * Worst case performance: O(n) (the element you're looking for is the last in the array or not in the array at all)
 */

export const linearSearch = (haystack, needle, showLogs) => {
  if (
    !(haystack instanceof Array) ||
    typeof needle === 'undefined' ||
    needle === null
  ) {
    return -1
  }

  for (let i = 0; i < haystack.length; i++) {
    /* istanbul ignore next */
    showLogs &&
      console.log(
        `iteration ${i + 1}: ${needle} === ${haystack[i]} ? ... ${
          needle === haystack[i]
        }!`
      )
    if (needle === haystack[i]) {
      return i
    }
  }
  return -1
}
