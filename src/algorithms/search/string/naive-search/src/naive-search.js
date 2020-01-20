/**
 * Naive Search
 *
 * Starts at the beginning and iterates through the whole string
 *
 * Best case performance: Ω(1) (the substring you're looking for is the start of the string)
 * Average case performance: 0(n)
 * Worst case performance: O(nm), where the length of the pattern is m and the length of the search string is n
 *     (the substring you're looking for is the end of the string or not in the string at all)
 */

// TODO: Actually implement this.

export const naiveSearch = (haystack, needle, showLogs) => {
  if (typeof haystack !== 'string' || typeof needle !== 'string') {
    /* istanbul ignore next */
    showLogs && console.log('bad input, exiting early')
    return -1
  }

  // TODO
  return -1
}
