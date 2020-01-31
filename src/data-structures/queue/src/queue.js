/**
 * Queue - FIFO, like a checkout line at a grocery store
 *
 * NOTE: This queue is implemented with an array as its underlying data structure.
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

export class Queue {
  constructor() {
    this.items = []
    this.length = 0
  }

  enqueue(val) {
    this.items.push(val)
    this.length++
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
    this.length = 0
    this.items = []
    return this.items
  }
}
