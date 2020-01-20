/**
 * Naive Search
 *
 * Starts at the beginning and iterates through the whole string
 *
 * Best case performance: Ω(1) (the substring you're looking for is the start of the string)
 * Average case performance: 0(n+m)
 * Worst case performance: O(n*m), where the length of the pattern is m and the length of the search string is n
 *     (the substring you're looking for is the end of the string or not in the string at all)
 */

export const naiveSearch = (haystack, needle, showLogs) => {
  if (typeof haystack !== 'string' || typeof needle !== 'string') {
    /* istanbul ignore next */
    showLogs && console.log('bad input, exiting early')
    return -1
  }

  if (needle.length > haystack.length) {
    /* istanbul ignore next */
    showLogs && console.log('needle is longer than the haystack, exiting early')
    return -1
  }

  for (let i = 0; i < haystack.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        break
      }

      if (j === needle.length - 1) {
        return i
      }
    }
  }

  return -1
}
