/**
 * Priority Queue - highest priority get dequeued first, like a list of calls to 911 dispatchers
 *
 * Methods and properties:
 *
 * - enqueue: Constant — O(1)
 * - dequeue: Constant — O(1)
 * - peek: Constant — O(1)
 * - isEmpty: Constant — O(1)
 * - size: Constant — O(1)
 * - enumerate: Linear - O(n)
 * - clear: Constant - O(1)
 */

// TODO: This was just copied code from the Queue class. Still need to handle the priorities
export class PriorityQueue {
  constructor() {
    this.items = []
    this.length = 0
  }

  enqueue(val, priority) {
    this.length++
    this.items.push(val)
    return val
  }

  dequeue() {
    if (this.length) {
      this.length--
      return this.items.shift()
    } else {
      return null
    }
  }

  peek() {
    return this.items[0] || null
  }

  isEmpty() {
    return this.length === 0
  }

  size() {
    return this.length
  }

  enumerate() {
    return this.items
  }

  clear() {
    return (this.items = [])
  }
}
