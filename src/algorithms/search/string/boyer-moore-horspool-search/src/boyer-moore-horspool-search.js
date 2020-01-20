/**
 * Boyer-Moore-Horspool Search
 *
 * Tries to be more efficient by skipping characters when it can.
 *
 * You go through the haystack from left to right, but you start
 * matching from the end of the string to find (the needle).
 *
 * If the last character of the string in the current selection in the
 * haystack isn’t found anywhere in the needle, you can move where you’re
 * searching forward by the entire length of the needle.
 *
 * If the last character of the string in the current selection in the
 * haystack IS found somewhere in the needle, but it’s not a match with the
 * last character in the needle, then you can move where you’re searching
 * forward by the number of indexes that character is from the end of your
 * needle string.
 *
 * If the last character of the string in the current selection in the
 * haystack matches the last character in the needle string, the you
 * iterate backwards from right of left over the needle string, checking
 * for matches. If they all match, you found it! If you get a mismatch,
 * you move where you’re searching forward again.
 *
 * Performance improves with the length of the search string, because
 * that means you can potentially skip more characters each time a bad
 * match occurs.
 *
 * This algorithm is appropriate as a general purpose string search algorithm.
 *
 * Best case performance: Ω(n/m), where n is the length of the string to search and m is the length of the string to find
 * Average case performance: 0(n)
 * Worst case performance: O(n*m), where n is the length of the string to search and m is the length of the string to find
 */

// TODO: Actually implement this. Right now it's just a naive search.

export const boyerMooreHorspoolSearch = (haystack, needle, showLogs) => {
  if (typeof haystack !== 'string' || typeof needle !== 'string') {
    /* istanbul ignore next */
    showLogs && console.log('bad input, exiting early')
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
