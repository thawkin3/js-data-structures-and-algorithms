import { StackFromLinkedList } from './stack-from-linked-list'

describe('StackFromLinkedList', () => {
  it('can be instantiated with the `new` keyword', () => {
    expect(() => new StackFromLinkedList()).not.toThrow()
  })

  describe('push', () => {
    it('can have items added to it', () => {
      const stack1 = new StackFromLinkedList()
      stack1.push(42)
      expect(stack1.size()).toBe(1)

      stack1.push(10)
      expect(stack1.size()).toBe(2)
    })

    it('returns the item that is added to the stack', () => {
      const stack1 = new StackFromLinkedList()
      expect(stack1.push(42)).toBe(42)
      expect(stack1.push(10)).toBe(10)
    })

    it('can have items added to it with the same value', () => {
      const stack1 = new StackFromLinkedList()
      stack1.push(42)
      stack1.push(42)
      stack1.push(42)
      expect(stack1.size()).toBe(3)
      expect(stack1.enumerate()).toEqual([42, 42, 42])
    })
  })

  describe('pop', () => {
    it('can have items removed from it', () => {
      const stack1 = new StackFromLinkedList()
      stack1.push(42)
      stack1.push(10)
      stack1.push('a')
      expect(stack1.size()).toBe(3)

      stack1.pop()
      expect(stack1.size()).toBe(2)

      stack1.pop()
      expect(stack1.size()).toBe(1)

      stack1.pop()
      expect(stack1.size()).toBe(0)
    })

    it('does not throw when trying to remove items from an empty stack', () => {
      const stack1 = new StackFromLinkedList()
      expect(() => stack1.pop()).not.toThrow()
    })

    it('returns the item that is removed from the stack', () => {
      const stack1 = new StackFromLinkedList()
      expect(stack1.pop()).toBe(null)

      stack1.push(42)
      expect(stack1.pop()).toBe(42)
    })
  })

  describe('peek', () => {
    it('returns the top element in the stack without modifying the stack', () => {
      const stack1 = new StackFromLinkedList()
      stack1.push(42)
      stack1.push(10)

      expect(stack1.size()).toBe(2)
      expect(stack1.peek()).toBe(10)
      expect(stack1.size()).toBe(2)
    })

    it('returns null if the stack is empty', () => {
      const stack1 = new StackFromLinkedList()
      expect(stack1.peek()).toBe(null)
    })
  })

  describe('isEmpty', () => {
    it('returns true if the stack is empty', () => {
      const stack1 = new StackFromLinkedList()
      expect(stack1.isEmpty()).toBe(true)
    })

    it('returns false if the stack is not empty', () => {
      const stack1 = new StackFromLinkedList()
      stack1.push(42)
      expect(stack1.isEmpty()).toBe(false)
    })
  })

  describe('size', () => {
    it('returns the correct number of elements in the stack', () => {
      const stack1 = new StackFromLinkedList()
      expect(stack1.size()).toBe(0)

      stack1.push(42)
      expect(stack1.size()).toBe(1)

      stack1.push(10)
      expect(stack1.size()).toBe(2)

      stack1.push('a')
      expect(stack1.size()).toBe(3)

      stack1.pop()
      expect(stack1.size()).toBe(2)

      stack1.pop()
      expect(stack1.size()).toBe(1)

      stack1.pop()
      expect(stack1.size()).toBe(0)
    })
  })

  describe('enumerate', () => {
    it('returns the entire stack in the correct LIFO order', () => {
      const stack1 = new StackFromLinkedList()
      stack1.push(42)
      stack1.push(10)
      stack1.push('a')
      expect(stack1.enumerate()).toEqual(['a', 10, 42])
    })

    it('returns an empty array when an empty stack is enumerated', () => {
      const stack1 = new StackFromLinkedList()
      expect(stack1.enumerate()).toEqual([])
    })
  })

  describe('clear', () => {
    it('removes all elements from the stack', () => {
      const stack1 = new StackFromLinkedList()
      stack1.push(42)
      stack1.push(10)
      stack1.push('a')
      expect(stack1.clear()).toEqual([])
    })

    it('sets the stack size to 0 when emptied', () => {
      const stack1 = new StackFromLinkedList()
      stack1.push(42)
      stack1.push(10)
      stack1.push('a')
      stack1.clear()
      expect(stack1.size()).toEqual(0)
    })
  })
})
