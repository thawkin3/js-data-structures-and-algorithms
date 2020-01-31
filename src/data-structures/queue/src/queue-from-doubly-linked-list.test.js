import { QueueFromDoublyLinkedList } from './queue-from-doubly-linked-list'

describe('QueueFromDoublyLinkedList', () => {
  it('can be instantiated with the `new` keyword', () => {
    expect(() => new QueueFromDoublyLinkedList()).not.toThrow()
  })

  describe('enqueue', () => {
    it('can have items added to it', () => {
      const queue1 = new QueueFromDoublyLinkedList()
      queue1.enqueue(42)
      expect(queue1.size()).toBe(1)

      queue1.enqueue(10)
      expect(queue1.size()).toBe(2)
    })

    it('returns the item that is added to the queue', () => {
      const queue1 = new QueueFromDoublyLinkedList()
      expect(queue1.enqueue(42)).toBe(42)
      expect(queue1.enqueue(10)).toBe(10)
    })

    it('can have items with the same value added to it', () => {
      const queue1 = new QueueFromDoublyLinkedList()
      queue1.enqueue(42)
      queue1.enqueue(42)
      queue1.enqueue(42)
      expect(queue1.size()).toBe(3)
      expect(queue1.enumerate()).toEqual([42, 42, 42])
    })
  })

  describe('dequeue', () => {
    it('can have items removed from it', () => {
      const queue1 = new QueueFromDoublyLinkedList()
      queue1.enqueue(42)
      queue1.enqueue(10)
      queue1.enqueue('a')
      expect(queue1.size()).toBe(3)

      queue1.dequeue()
      expect(queue1.size()).toBe(2)

      queue1.dequeue()
      expect(queue1.size()).toBe(1)

      queue1.dequeue()
      expect(queue1.size()).toBe(0)
    })

    it('does not throw when trying to remove items from an empty queue', () => {
      const queue1 = new QueueFromDoublyLinkedList()
      expect(() => queue1.dequeue()).not.toThrow()
    })

    it('returns the item that is removed from the queue', () => {
      const queue1 = new QueueFromDoublyLinkedList()
      expect(queue1.dequeue()).toBe(null)

      queue1.enqueue(42)
      expect(queue1.dequeue()).toBe(42)
    })
  })

  describe('peek', () => {
    it('returns the top element in the queue without modifying the queue', () => {
      const queue1 = new QueueFromDoublyLinkedList()
      queue1.enqueue(42)
      queue1.enqueue(10)

      expect(queue1.size()).toBe(2)
      expect(queue1.peek()).toBe(42)
      expect(queue1.size()).toBe(2)
    })

    it('returns null if the queue is empty', () => {
      const queue1 = new QueueFromDoublyLinkedList()
      expect(queue1.peek()).toBe(null)
    })
  })

  describe('isEmpty', () => {
    it('returns true if the queue is empty', () => {
      const queue1 = new QueueFromDoublyLinkedList()
      expect(queue1.isEmpty()).toBe(true)
    })

    it('returns false if the queue is not empty', () => {
      const queue1 = new QueueFromDoublyLinkedList()
      queue1.enqueue(42)
      expect(queue1.isEmpty()).toBe(false)
    })
  })

  describe('size', () => {
    it('returns the correct number of elements in the queue', () => {
      const queue1 = new QueueFromDoublyLinkedList()
      expect(queue1.size()).toBe(0)

      queue1.enqueue(42)
      expect(queue1.size()).toBe(1)

      queue1.enqueue(10)
      expect(queue1.size()).toBe(2)

      queue1.enqueue('a')
      expect(queue1.size()).toBe(3)

      queue1.dequeue()
      expect(queue1.size()).toBe(2)

      queue1.dequeue()
      expect(queue1.size()).toBe(1)

      queue1.dequeue()
      expect(queue1.size()).toBe(0)
    })
  })

  describe('enumerate', () => {
    it('returns the entire queue in the correct FIFO order', () => {
      const queue1 = new QueueFromDoublyLinkedList()
      queue1.enqueue(42)
      queue1.enqueue(10)
      queue1.enqueue('a')
      expect(queue1.enumerate()).toEqual([42, 10, 'a'])
    })

    it('returns an empty array when an empty queue is enumerated', () => {
      const queue1 = new QueueFromDoublyLinkedList()
      expect(queue1.enumerate()).toEqual([])
    })
  })

  describe('clear', () => {
    it('removes all elements from the queue', () => {
      const queue1 = new QueueFromDoublyLinkedList()
      queue1.enqueue(42)
      queue1.enqueue(10)
      queue1.enqueue('a')
      expect(queue1.clear()).toEqual([])
    })

    it('sets the queue size to 0 when emptied', () => {
      const queue1 = new QueueFromDoublyLinkedList()
      queue1.enqueue(42)
      queue1.enqueue(10)
      queue1.enqueue('a')
      queue1.clear()
      expect(queue1.size()).toEqual(0)
    })
  })
})
