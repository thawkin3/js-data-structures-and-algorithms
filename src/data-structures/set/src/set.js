/**
 * Set - A collection of unique items (no duplicates allowed)
 *
 * Methods and properties:
 *
 * - add: Constant — O(1)
 * - remove: Linear — O(n)
 * - has: Linear — O(n)
 * - isEmpty: Constant — O(1)
 * - size: Constant — O(1)
 * - enumerate: Linear - O(n)
 * - clear: Constant - O(1)
 */

export class Set {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(val) {
    if (this.items.indexOf(val) === -1) {
      this.items.push(val)
      this.length++
    }
    return val
  }

  remove(val) {
    const index = this.items.indexOf(val)
    if (index !== -1) {
      this.items.splice(index, 1)
      this.length--
    }
    return val
  }

  has(val) {
    return this.items.indexOf(val) !== -1
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
