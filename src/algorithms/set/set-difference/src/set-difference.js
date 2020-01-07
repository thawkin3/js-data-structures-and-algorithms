/**
 * Set Difference
 *
 * Compares two sets and returns all items of the first set that are not members of the second set
 *
 * Ex. Set difference of { 2, 3, 4 } and { 3, 4, 5 } is { 2 }
 *
 * Performance: Quadratic - O(n * m), where n is the length of set 1 and m is the length of set 2
 * Note: this is sort of like O(n^2) performance
 */

import { Set } from '../../../../data-structures/set/src/set'

export const setDifference = (set1, set2) => {
  const setDifferenceSet = new Set()

  set1.enumerate().forEach(val => {
    if (!set2.has(val)) {
      setDifferenceSet.add(val)
    }
  })

  return setDifferenceSet
}
