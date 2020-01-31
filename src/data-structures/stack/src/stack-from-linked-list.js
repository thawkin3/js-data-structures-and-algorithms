/**
 * Stack - LIFO, like a stack of dishes
 *
 * NOTE: This stack is implemented with a LinkedList as its underlying data structure.
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

import { LinkedList } from '../../linked-list/src/linked-list'

export class StackFromLinkedList {
  constructor() {
    this.stack = new LinkedList()
  }

  push(val) {
    this.stack.insertAtBeginning(val)
    return val
  }

  pop() {
    const poppedNode = this.stack.getAt(0)
    this.stack.deleteFirstNode()
    return poppedNode ? poppedNode.val : null
  }

  peek() {
    const peekedNode = this.stack.getAt(0)
    return peekedNode ? peekedNode.val : null
  }

  isEmpty() {
    return this.stack.isEmpty()
  }

  size() {
    return this.stack.size()
  }

  enumerate() {
    return this.stack.enumerate()
  }

  clear() {
    this.stack.clear()
    // for consistency with the Stack that uses an array as its underlying data structure
    return []
  }
}
