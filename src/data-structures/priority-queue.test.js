import { PriorityQueue } from './priority-queue'

describe('PriorityQueue', () => {
  it('can be instantiated with the `new` keyword', () => {
    expect(() => new PriorityQueue()).not.toThrow()
  })

  describe('enqueue', () => {
    // TODO
    it('can have items added to it', () => {
      const priorityQueue1 = new PriorityQueue()
      priorityQueue1.enqueue(42)
      expect(priorityQueue1.size()).toBe(1)

      priorityQueue1.enqueue(10)
      expect(priorityQueue1.size()).toBe(2)
    })

    // TODO
    it('returns the item that is added to the priority queue', () => {
      const priorityQueue1 = new PriorityQueue()
      expect(priorityQueue1.enqueue(42)).toBe(42)
      expect(priorityQueue1.enqueue(10)).toBe(10)
    })
  })

  describe('dequeue', () => {
    // TODO
    it('can have items removed from it', () => {
      const priorityQueue1 = new PriorityQueue()
      priorityQueue1.enqueue(42)
      priorityQueue1.enqueue(10)
      priorityQueue1.enqueue('a')
      expect(priorityQueue1.size()).toBe(3)

      priorityQueue1.dePriorityqueue()
      expect(priorityQueue1.size()).toBe(2)

      priorityQueue1.dePriorityqueue()
      expect(priorityQueue1.size()).toBe(1)

      priorityQueue1.dePriorityqueue()
      expect(priorityQueue1.size()).toBe(0)
    })

    it('does not throw when trying to remove items from an empty queue', () => {
      const priorityQueue1 = new PriorityQueue()
      expect(() => priorityQueue1.dePriorityqueue()).not.toThrow()
    })

    // TODO
    it('returns the item that is removed from the priority queue', () => {
      const priorityQueue1 = new PriorityQueue()
      expect(priorityQueue1.dePriorityqueue()).toBe(null)

      priorityQueue1.enqueue(42)
      expect(priorityQueue1.dePriorityqueue()).toBe(42)
    })
  })

  describe('peek', () => {
    // TODO
    it('returns the top element in the priority queue without modifying the priority queue', () => {
      const priorityQueue1 = new PriorityQueue()
      priorityQueue1.enqueue(42)
      priorityQueue1.enqueue(10)

      expect(priorityQueue1.size()).toBe(2)
      expect(priorityQueue1.peek()).toBe(42)
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
      priorityQueue1.enqueue(42)
      expect(priorityQueue1.isEmpty()).toBe(false)
    })
  })

  describe('size', () => {
    // TODO
    it('returns the correct number of elements in the priority queue', () => {
      const priorityQueue1 = new PriorityQueue()
      expect(priorityQueue1.size()).toBe(0)

      priorityQueue1.enqueue(42)
      expect(priorityQueue1.size()).toBe(1)

      priorityQueue1.enqueue(10)
      expect(priorityQueue1.size()).toBe(2)

      priorityQueue1.enqueue('a')
      expect(priorityQueue1.size()).toBe(3)

      priorityQueue1.dePriorityqueue()
      expect(priorityQueue1.size()).toBe(2)

      priorityQueue1.dePriorityqueue()
      expect(priorityQueue1.size()).toBe(1)

      priorityQueue1.dePriorityqueue()
      expect(priorityQueue1.size()).toBe(0)
    })
  })

  describe('enumerate', () => {
    // TODO
    it('returns the entire priority queue in the correct prioritized order', () => {
      const priorityQueue1 = new PriorityQueue()
      priorityQueue1.enqueue(42)
      priorityQueue1.enqueue(10)
      priorityQueue1.enqueue('a')
      expect(priorityQueue1.enumerate()).toEqual([42, 10, 'a'])
    })
  })

  describe('clear', () => {
    // TODO
    it('removes all elements from the priority queue', () => {
      const priorityQueue1 = new PriorityQueue()
      priorityQueue1.enqueue(42)
      priorityQueue1.enqueue(10)
      priorityQueue1.enqueue('a')
      expect(priorityQueue1.clear()).toEqual([])
    })
  })
})
