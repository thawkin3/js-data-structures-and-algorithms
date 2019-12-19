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
 * - enumerate: O(n)
 */

export class Stack {
  constructor() {
    this.stack = []
    this.length = 0
  }

  push(val) {
    this.length++
    this.stack.unshift(val)
    return val
  }

  pop() {
    if (this.length) {
      this.length--
      return this.stack.shift()
    } else {
      return null
    }
  }

  peek() {
    return this.stack[0] || null
  }

  isEmpty() {
    return this.length === 0
  }

  size() {
    return this.length
  }

  enumerate() {
    return this.stack
  }
}
