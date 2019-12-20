/**
 * Linked List - list of nodes, with each node pointing to the next
 *
 * Methods and properties:
 *
 * - insertAtBeginning: Constant — O(1)
 * - insertAtEnd: Linear — O(n)
 * - insertAt: Linear — O(n)
 * - isEmpty: Constant — O(1)
 * - size: Constant — O(1)
 * - enumerate: Linear - O(n)
 * - clear: Constant - O(1)
 */

import { Node } from './node'

export class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  insertAtBeginning(val) {
    const newNode = new Node(val)
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this.head
  }

  insertAtEnd(val) {
    const newNode = new Node(val)

    // If this is the first node added, it is the head
    if (!this.head) {
      this.head = newNode
      this.length++
      return this.head
    }

    // If there are nodes in this linked list,
    // iterate thru the nodes and then add this
    // new node to the end of the list so it becomes the tail
    let currentNode = this.head
    while (currentNode.next !== null) {
      currentNode = currentNode.next
    }
    currentNode.next = newNode
    this.length++
    return this.head
  }

  insertAt(val, index) {}

  isEmpty() {
    return this.length === 0
  }

  size() {
    return this.length
  }

  enumerate() {}

  clear() {
    this.head = null
    this.length = 0
  }
}
