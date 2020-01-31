/**
 * Queue - FIFO, like a checkout line at a grocery store
 *
 * NOTE: This queue is implemented with a DoublyLinkedList as its underlying data structure.
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

import { DoublyLinkedList } from '../../doubly-linked-list/src/doubly-linked-list'

export class QueueFromDoublyLinkedList {
  constructor() {
    this.queue = new DoublyLinkedList()
  }

  enqueue(val) {
    this.queue.insertAtEnd(val)
    return val
  }

  dequeue() {
    const dequeuedNode = this.queue.getAt(0)
    this.queue.deleteFirstNode()
    return dequeuedNode ? dequeuedNode.val : null
  }

  peek() {
    const peekedNode = this.queue.getAt(0)
    return peekedNode ? peekedNode.val : null
  }

  isEmpty() {
    return this.queue.isEmpty()
  }

  size() {
    return this.queue.size()
  }

  enumerate() {
    return this.queue.enumerate()
  }

  clear() {
    this.queue.clear()
    // for consistency with the Queue that uses an array as its underlying data structure
    return []
  }
}
