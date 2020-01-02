import { Set } from './set'

describe('Set', () => {
  it('can be instantiated with the `new` keyword', () => {
    expect(() => new Set()).not.toThrow()
  })

  describe('add', () => {
    it('can have items added to it', () => {
      const set1 = new Set()
      set1.add(42)
      expect(set1.size()).toBe(1)

      set1.add(10)
      expect(set1.size()).toBe(2)
    })

    it('returns the item that is added to the set', () => {
      const set1 = new Set()
      expect(set1.add(42)).toBe(42)
      expect(set1.add(10)).toBe(10)
    })

    it('does not add duplicate items to the set', () => {
      const set1 = new Set()
      set1.add(42)
      expect(set1.size()).toBe(1)
      set1.add(42)
      expect(set1.size()).toBe(1)
      expect(set1.enumerate()).toEqual([42])
    })
  })

  describe('remove', () => {
    it('can have items removed from it', () => {
      const set1 = new Set()
      set1.add(42)
      set1.add(10)
      set1.add('a')
      expect(set1.size()).toBe(3)

      set1.remove(10)
      expect(set1.size()).toBe(2)

      set1.remove('a')
      expect(set1.size()).toBe(1)

      set1.remove(42)
      expect(set1.size()).toBe(0)
    })

    it('does not throw when trying to remove items from an empty set', () => {
      const set1 = new Set()
      expect(() => set1.remove(42)).not.toThrow()
    })

    it('does not throw when trying to remove an item that does not exist in the set', () => {
      const set1 = new Set()
      set1.add(42)
      expect(() => set1.remove(10)).not.toThrow()
      expect(set1.size()).toBe(1)
    })

    it('returns the item that is removed from the set', () => {
      const set1 = new Set()
      expect(set1.remove(10)).toBe(10)

      set1.add(42)
      expect(set1.remove(42)).toBe(42)
    })
  })

  describe('has', () => {
    it('returns true if the set has the specified item', () => {
      const set1 = new Set()
      set1.add(42)
      expect(set1.has(42)).toBe(true)
    })

    it('returns false if the set does not have the specified item', () => {
      const set1 = new Set()
      set1.add(42)
      expect(set1.has(10)).toBe(false)
    })
  })

  describe('isEmpty', () => {
    it('returns true if the set is empty', () => {
      const set1 = new Set()
      expect(set1.isEmpty()).toBe(true)
    })

    it('returns false if the set is not empty', () => {
      const set1 = new Set()
      set1.add(42)
      expect(set1.isEmpty()).toBe(false)
    })
  })

  describe('size', () => {
    it('returns the correct number of elements in the set', () => {
      const set1 = new Set()
      expect(set1.size()).toBe(0)

      set1.add(42)
      expect(set1.size()).toBe(1)

      set1.add(10)
      expect(set1.size()).toBe(2)

      set1.add('a')
      expect(set1.size()).toBe(3)

      set1.remove(42)
      expect(set1.size()).toBe(2)

      set1.remove(10)
      expect(set1.size()).toBe(1)

      set1.remove('a')
      expect(set1.size()).toBe(0)
    })
  })

  describe('enumerate', () => {
    it('returns the entire set', () => {
      const set1 = new Set()
      set1.add(42)
      set1.add(10)
      set1.add('a')
      expect(set1.enumerate()).toEqual([42, 10, 'a'])
    })

    it('returns an empty array when an empty set is enumerated', () => {
      const set1 = new Set()
      expect(set1.enumerate()).toEqual([])
    })
  })

  describe('clear', () => {
    it('removes all elements from the set', () => {
      const set1 = new Set()
      set1.add(42)
      set1.add(10)
      set1.add('a')
      expect(set1.clear()).toEqual([])
    })

    it('sets the set size to 0 when emptied', () => {
      const set1 = new Set()
      set1.add(42)
      set1.add(10)
      set1.add('a')
      set1.clear()
      expect(set1.size()).toEqual(0)
    })
  })
})
