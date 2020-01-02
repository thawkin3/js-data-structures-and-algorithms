import { setDifference } from './set-difference'
import { Set } from '../../../../data-structures/set/src/set'

describe('setDifference', () => {
  it('creates a third set from the two given sets, using only values that are present in only the first set', () => {
    const set1 = new Set()
    set1.add(42)
    set1.add(10)
    set1.add(5)
    set1.add('a')

    const set2 = new Set()
    set2.add(42)
    set2.add('a')
    set2.add('b')
    set2.add('c')

    const set3 = setDifference(set1, set2)

    expect(set3.size()).toBe(2)
    expect(set3.enumerate()).toEqual([10, 5])
  })

  it('does not modify the original two sets', () => {
    const set1 = new Set()
    set1.add(42)
    set1.add(10)
    set1.add(5)
    set1.add('a')

    const set2 = new Set()
    set2.add(42)
    set2.add('a')
    set2.add('b')
    set2.add('c')

    const set3 = setDifference(set1, set2)

    expect(set3.size()).toBe(2)
    expect(set3.enumerate()).toEqual([10, 5])

    expect(set1.size()).toBe(4)
    expect(set1.enumerate()).toEqual([42, 10, 5, 'a'])

    expect(set2.size()).toBe(4)
    expect(set2.enumerate()).toEqual([42, 'a', 'b', 'c'])
  })

  it('can handle creating the setDifference of two empty sets', () => {
    const set1 = new Set()
    const set2 = new Set()
    const set3 = setDifference(set1, set2)

    expect(set3.size()).toBe(0)
    expect(set3.enumerate()).toEqual([])
  })

  it('handles the order that the sets are provided in correctly', () => {
    const set1 = new Set()
    set1.add(42)
    set1.add('a')

    const set2 = new Set()
    set2.add('a')

    const set3 = setDifference(set1, set2)
    expect(set3.size()).toBe(1)
    expect(set3.enumerate()).toEqual([42])

    const set4 = setDifference(set2, set1)
    expect(set4.size()).toBe(0)
    expect(set4.enumerate()).toEqual([])
  })
})
