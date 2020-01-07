/**
 * Symmetric Difference
 *
 * Compares two sets and returns all of the items that exist in only one of the two sets
 * The symmetric difference is the set difference of the union and intersection of the input sets
 *
 * Ex. Symmetric difference of { 2, 3, 4 } and { 3, 4, 5 } is { 2, 5 }
 *
 * Performance: Quadratic - O(n * m), where n is the length of set 1 and m is the length of set 2
 * Note: this is sort of like O(n^2) performance
 */

import { setDifference } from '../../set-difference/src/set-difference'
import { intersection } from '../../intersection/src/intersection'
import { union } from '../../union/src/union'

export const symmetricDifference = (set1, set2) => {
  const intersectionSet = intersection(set1, set2)
  const unionSet = union(set1, set2)
  return setDifference(unionSet, intersectionSet)
}
