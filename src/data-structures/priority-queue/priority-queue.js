/**
 * Priority Queue - highest priority get dequeued first, like a list of calls to 911 dispatchers
 *
 * NOTE: For this implementation, we'll assume a lower number means a higher priority.
 * i.e. An item with priority 1 would be dequeued before an item with priority 3
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

export class PriorityQueue {
  constructor() {
    this.items = []
    this.length = 0
  }

  enqueue(value, priority = 0) {
    // handle inserting the new item in the right place according to priority
    for (let i = 0; i < this.length; i++) {
      if (priority < this.items[i].priority) {
        const item = { value, priority }
        this.items.splice(i, 0, item)
        this.length++
        return item
      }
    }

    // if we've iterated through the entire priority queue,
    // then just add the new value at the end
    const item = { value, priority }
    this.items.push(item)
    this.length++
    return item
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
