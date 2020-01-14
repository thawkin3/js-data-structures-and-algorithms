import { PriorityQueue } from './priority-queue'

describe('PriorityQueue', () => {
  it('can be instantiated with the `new` keyword', () => {
    expect(() => new PriorityQueue()).not.toThrow()
  })

  describe('enqueue', () => {
    it('can have items added to it', () => {
      const priorityQueue1 = new PriorityQueue()
      priorityQueue1.enqueue(42, 1)
      expect(priorityQueue1.size()).toBe(1)

      priorityQueue1.enqueue(10, 2)
      expect(priorityQueue1.size()).toBe(2)
    })

    it('returns the item that is added to the priority queue', () => {
      const priorityQueue1 = new PriorityQueue()
      expect(priorityQueue1.enqueue(42, 1)).toEqual({ value: 42, priority: 1 })
      expect(priorityQueue1.enqueue(10, 2)).toEqual({ value: 10, priority: 2 })
    })

    it('adds items in the correct order according to priority', () => {
      const priorityQueue1 = new PriorityQueue()
      expect(priorityQueue1.enqueue(42, 1)).toEqual({ value: 42, priority: 1 })
      expect(priorityQueue1.enqueue(10, 2)).toEqual({ value: 10, priority: 2 })
      expect(priorityQueue1.enqueue('a', 1)).toEqual({
        value: 'a',
        priority: 1,
      })
      expect(priorityQueue1.enumerate()).toEqual([
        { value: 42, priority: 1 },
        { value: 'a', priority: 1 },
        { value: 10, priority: 2 },
      ])
    })

    it('can have items with the same value and priority added to it', () => {
      const priorityQueue1 = new PriorityQueue()
      priorityQueue1.enqueue(42, 1)
      priorityQueue1.enqueue(42, 1)
      priorityQueue1.enqueue(42, 1)
      expect(priorityQueue1.size()).toBe(3)
      expect(priorityQueue1.enumerate()).toEqual([
        { value: 42, priority: 1 },
        { value: 42, priority: 1 },
        { value: 42, priority: 1 },
      ])
    })

    it('defaults the priority to 0 if no priority is provided', () => {
      const priorityQueue1 = new PriorityQueue()
      expect(priorityQueue1.enqueue(42)).toEqual({ value: 42, priority: 0 })
    })
  })

  describe('dequeue', () => {
    it('can have items removed from it', () => {
      const priorityQueue1 = new PriorityQueue()
      priorityQueue1.enqueue(42, 2)
      priorityQueue1.enqueue(10, 3)
      priorityQueue1.enqueue('a', 1)
      expect(priorityQueue1.size()).toBe(3)
      expect(priorityQueue1.enumerate()).toEqual([
        { value: 'a', priority: 1 },
        { value: 42, priority: 2 },
        { value: 10, priority: 3 },
      ])

      priorityQueue1.dequeue()
      expect(priorityQueue1.size()).toBe(2)
      expect(priorityQueue1.enumerate()).toEqual([
        { value: 42, priority: 2 },
        { value: 10, priority: 3 },
      ])

      priorityQueue1.dequeue()
      expect(priorityQueue1.size()).toBe(1)
      expect(priorityQueue1.enumerate()).toEqual([{ value: 10, priority: 3 }])

      priorityQueue1.dequeue()
      expect(priorityQueue1.size()).toBe(0)
      expect(priorityQueue1.enumerate()).toEqual([])
    })

    it('does not throw when trying to remove items from an empty queue', () => {
      const priorityQueue1 = new PriorityQueue()
      expect(() => priorityQueue1.dequeue()).not.toThrow()
    })

    it('returns the item that is removed from the priority queue', () => {
      const priorityQueue1 = new PriorityQueue()
      expect(priorityQueue1.dequeue()).toBe(null)

      priorityQueue1.enqueue(42, 1)
      expect(priorityQueue1.dequeue()).toEqual({ value: 42, priority: 1 })
    })
  })

  describe('peek', () => {
    it('returns the top element in the priority queue without modifying the priority queue', () => {
      const priorityQueue1 = new PriorityQueue()
      priorityQueue1.enqueue(42, 100)
      priorityQueue1.enqueue(10, 5)

      expect(priorityQueue1.size()).toBe(2)
      expect(priorityQueue1.peek()).toEqual({ value: 10, priority: 5 })
      expect(priorityQueue1.size()).toBe(2)
    })

    it('returns null if the priority queue is empty', () => {
      const priorityQueue1 = new PriorityQueue()
      expect(priorityQueue1.peek()).toBe(null)
    })
  })

  describe('isEmpty', () => {
    it('returns true if the priority queue is empty', () => {
      const priorityQueue1 = new PriorityQueue()
      expect(priorityQueue1.isEmpty()).toBe(true)
    })

    it('returns false if the priority queue is not empty', () => {
      const priorityQueue1 = new PriorityQueue()
      priorityQueue1.enqueue(42, 3)
      expect(priorityQueue1.isEmpty()).toBe(false)
    })
  })

  describe('size', () => {
    it('returns the correct number of elements in the priority queue', () => {
      const priorityQueue1 = new PriorityQueue()
      expect(priorityQueue1.size()).toBe(0)

      priorityQueue1.enqueue(42, 5)
      expect(priorityQueue1.size()).toBe(1)

      priorityQueue1.enqueue(10, 3)
      expect(priorityQueue1.size()).toBe(2)

      priorityQueue1.enqueue('a', 4)
      expect(priorityQueue1.size()).toBe(3)

      priorityQueue1.dequeue()
      expect(priorityQueue1.size()).toBe(2)

      priorityQueue1.dequeue()
      expect(priorityQueue1.size()).toBe(1)

      priorityQueue1.dequeue()
      expect(priorityQueue1.size()).toBe(0)
    })
  })

  describe('enumerate', () => {
    it('returns the entire priority queue in the correct prioritized order', () => {
      const priorityQueue1 = new PriorityQueue()
      priorityQueue1.enqueue(42, 2)
      priorityQueue1.enqueue(10, 3)
      priorityQueue1.enqueue('a', 1)
      expect(priorityQueue1.enumerate()).toEqual([
        { value: 'a', priority: 1 },
        { value: 42, priority: 2 },
        { value: 10, priority: 3 },
      ])
    })

    it('returns an empty array when an empty priority queue is enumerated', () => {
      const priorityQueue1 = new PriorityQueue()
      expect(priorityQueue1.enumerate()).toEqual([])
    })
  })

  describe('clear', () => {
    it('removes all elements from the priority queue', () => {
      const priorityQueue1 = new PriorityQueue()
      priorityQueue1.enqueue(42, 1)
      priorityQueue1.enqueue(10, 2)
      priorityQueue1.enqueue('a', 3)
      expect(priorityQueue1.clear()).toEqual([])
    })

    it('sets the priority queue size to 0 when emptied', () => {
      const priorityQueue1 = new PriorityQueue()
      priorityQueue1.enqueue(42, 1)
      priorityQueue1.enqueue(10, 2)
      priorityQueue1.enqueue('a', 3)
      priorityQueue1.clear()
      expect(priorityQueue1.size()).toEqual(0)
    })
  })
})
