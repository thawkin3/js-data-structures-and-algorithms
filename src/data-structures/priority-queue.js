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

// TODO: This was just copied code from the Queue class. Still need to handle the priorities
export class PriorityQueue {
  constructor() {
    this.items = []
    this.length = 0
  }

  enqueue(value, priority) {
    // handle inserting the new item in the right place according to priority
    for (let i = 0; i < this.length; i++) {
      if (priority < this.items[i].priority) {
        this.items.splice(i, 0, { value, priority })
        this.length++
        return value
      }
    }

    // if we've iterated through the entire priority queue,
    // then just add the new value at the end
    this.items.push({ value, priority })
    this.length++
    return value
  }

  dequeue() {
    if (this.length) {
      const { value } = this.items.shift()
      this.length--
      return value
    } else {
      return null
    }
  }

  peek() {
    return this.items[0] ? this.items[0].value : null
  }

  isEmpty() {
    return this.length === 0
  }

  size() {
    return this.length
  }

  enumerate() {
    const priorityQueueValues = []
    for (let i = 0; i < this.length; i++) {
      priorityQueueValues.push(this.items[i].value)
    }
    return priorityQueueValues
  }

  clear() {
    this.length = 0
    return (this.items = [])
  }
}
