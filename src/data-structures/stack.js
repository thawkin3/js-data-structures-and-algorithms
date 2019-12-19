/**
 * Stack - LIFO, like a stack of dishes
 *
 * Methods and properties:
 *
 * - push: Constant — O(1)
 * - pop: Constant — O(1)
 * - peek: Constant — O(1)
 * - isEmpty: Constant — O(1)
 * - size: Constant — O(1)
 * - enumerate: Linear - O(n)
 * - clear: Constant - O(1)
 */

export class Stack {
  constructor() {
    this.items = []
    this.length = 0
  }

  push(val) {
    this.length++
    this.items.unshift(val)
    return val
  }

  pop() {
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
