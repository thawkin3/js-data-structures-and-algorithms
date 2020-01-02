import { symmetricDifference } from './symmetric-difference'
import { Set } from '../../../../data-structures/set/src/set'

describe('symmetricDifference', () => {
  it('creates a third set from the two given sets, using only values that are present in only one of the sets', () => {
    const set1 = new Set()
    set1.add(2)
    set1.add(3)
    set1.add(4)

    const set2 = new Set()
    set2.add(3)
    set2.add(4)
    set2.add(5)

    const set3 = symmetricDifference(set1, set2)

    expect(set3.size()).toBe(2)
    expect(set3.enumerate()).toEqual([2, 5])
  })

  it('does not modify the original two sets', () => {
    const set1 = new Set()
    set1.add(2)
    set1.add(3)
    set1.add(4)

    const set2 = new Set()
    set2.add(3)
    set2.add(4)
    set2.add(5)

    const set3 = symmetricDifference(set1, set2)

    expect(set3.size()).toBe(2)
    expect(set3.enumerate()).toEqual([2, 5])

    expect(set1.size()).toBe(3)
    expect(set1.enumerate()).toEqual([2, 3, 4])

    expect(set2.size()).toBe(3)
    expect(set2.enumerate()).toEqual([3, 4, 5])
  })

  it('can handle creating the symmetricDifference of two empty sets', () => {
    const set1 = new Set()
    const set2 = new Set()
    const set3 = symmetricDifference(set1, set2)

    expect(set3.size()).toBe(0)
    expect(set3.enumerate()).toEqual([])
  })

  it('returns the same set of items, regardless of the order the sets are provided to the method', () => {
    const set1 = new Set()
    set1.add(2)
    set1.add(3)
    set1.add(4)

    const set2 = new Set()
    set2.add(3)
    set2.add(4)
    set2.add(5)

    const set3 = symmetricDifference(set1, set2)
    expect(set3.size()).toBe(2)
    expect(set3.enumerate()).toEqual([2, 5])

    const set4 = symmetricDifference(set2, set1)
    expect(set4.size()).toBe(2)
    expect(set4.enumerate()).toEqual([5, 2])
  })
})
