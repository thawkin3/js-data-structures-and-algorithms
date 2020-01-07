/**
 * Intersection
 *
 * Compares two sets and produces a third set that contains all of the
 * intersecting/matching values that are found in both sets
 *
 * Ex. Intersection of { 1, 2, 3 } and { 2, 3, 4 } is { 2, 3 }
 *
 * Performance: Quadratic - O(n * m), where n is the length of set 1 and m is the length of set 2
 * Note: this is sort of like O(n^2) performance
 */

import { Set } from '../../../../data-structures/set/src/set'

export const intersection = (set1, set2) => {
  const intersectionSet = new Set()

  set1.enumerate().forEach(val => {
    if (set2.has(val)) {
      intersectionSet.add(val)
    }
  })

  set2.enumerate().forEach(val => {
    if (set1.has(val)) {
      intersectionSet.add(val)
    }
  })

  return intersectionSet
}
