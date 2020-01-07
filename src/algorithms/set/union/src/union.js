/**
 * Union
 *
 * Compares two sets and produces a third set that contains all unique values found in either set
 *
 * Ex. Union of { 1, 2, 3 } and { 3, 4, 5 } is { 1, 2, 3, 4, 5 }
 *
 * Performance: Linear - O(n + m), where n is the length of set 1 and m is the length of set 2
 */

import { Set } from '../../../../data-structures/set/src/set'

export const union = (set1, set2) => {
  const unionSet = new Set()
  set1.enumerate().forEach(val => unionSet.add(val))
  set2.enumerate().forEach(val => unionSet.add(val))
  return unionSet
}
