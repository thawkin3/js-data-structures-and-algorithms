import { union } from './union'
import { Set } from '../../../../data-structures/set/src/set'

describe('union', () => {
  it('creates a third set from the two given sets', () => {
    const set1 = new Set()
    set1.add(42)
    set1.add(10)

    const set2 = new Set()
    set2.add('a')
    set2.add('b')
    set2.add('c')

    const set3 = union(set1, set2)

    expect(set3.size()).toBe(5)
    expect(set3.enumerate()).toEqual([42, 10, 'a', 'b', 'c'])
  })

  it('only adds unique values', () => {
    const set1 = new Set()
    set1.add(42)
    set1.add(10)
    set1.add('a')

    const set2 = new Set()
    set1.add(42)
    set2.add('a')
    set2.add('b')
    set2.add('c')

    const set3 = union(set1, set2)

    expect(set3.size()).toBe(5)
    expect(set3.enumerate()).toEqual([42, 10, 'a', 'b', 'c'])
  })

  it('does not modify the original two sets', () => {
    const set1 = new Set()
    set1.add(42)
    set1.add(10)

    const set2 = new Set()
    set2.add('a')
    set2.add('b')
    set2.add('c')

    const set3 = union(set1, set2)

    expect(set3.size()).toBe(5)
    expect(set3.enumerate()).toEqual([42, 10, 'a', 'b', 'c'])

    expect(set1.size()).toBe(2)
    expect(set1.enumerate()).toEqual([42, 10])

    expect(set2.size()).toBe(3)
    expect(set2.enumerate()).toEqual(['a', 'b', 'c'])
  })

  it('can handle creating the union of two empty sets', () => {
    const set1 = new Set()
    const set2 = new Set()
    const set3 = union(set1, set2)

    expect(set3.size()).toBe(0)
    expect(set3.enumerate()).toEqual([])
  })
})
