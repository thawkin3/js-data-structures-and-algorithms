/**
 * Linked List - list of nodes, with each node pointing to the next
 *
 * Methods and properties:
 *
 * - insertAtBeginning: Constant — O(1)
 * - insertAtEnd: Linear — O(n)
 * - insertAt: Linear — O(n)
 * - getAt: Linear — O(n)
 * - deleteFirstNode: Constant — O(1)
 * - deleteLastNode: Linear — O(n)
 * - deleteAt: Linear — O(n)
 * - reverse: Linear — O(n)
 * - traverse: Linear — O(n)
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

  insertAt(val, index) {
    // if the list is empty
    // i.e. head = null
    if (!this.head) {
      return this.insertAtBeginning(val)
    }

    // if new node needs to be inserted at the front of the list
    // i.e. before the head
    if (index === 0) {
      return this.insertAtBeginning(val)
    }

    // if new node needs to be inserted at the end of the list
    // i.e. after the tail
    if (index >= this.length) {
      return this.insertAtEnd(val)
    }

    // else, use getAt() to find the node that is right before the specified index
    const previous = this.getAt(index - 1)
    let newNode = new Node(val)
    newNode.next = previous.next
    previous.next = newNode
    this.length++
    return this.head
  }

  getAt(index) {
    let counter = 0
    let node = this.head
    while (node) {
      if (counter === index) {
        return node
      }
      counter++
      node = node.next
    }
    return null
  }

  deleteFirstNode() {
    // empty list, so nothing to delete
    if (!this.head) {
      return this.head
    }

    // delete the head node and make the next node the new head
    this.head = this.head.next
    this.length--
    return this.head
  }

  deleteLastNode() {
    // empty list, so nothing to delete
    if (!this.head) {
      return this.head
    }

    // if there is only one node in the list
    if (!this.head.next) {
      this.head = null
      this.length--
      return this.head
    }

    // if there are multiple nodes in the list
    let previous = this.head
    let tail = this.head.next

    while (tail.next !== null) {
      previous = tail
      tail = tail.next
    }

    previous.next = null
    this.length--
    return this.head
  }

  deleteAt(index) {
    // empty list, so nothing to delete
    if (!this.head) {
      return this.head
    }

    // node needs to be deleted from the front of the list
    // i.e. before the head.
    if (index === 0) {
      return this.deleteFirstNode()
    }

    // else, use getAt() to find the node that is right before the specified index
    const previous = this.getAt(index - 1)

    // if the specified index does not map to a node, do nothing
    if (!previous || !previous.next) {
      return this.head
    }

    // if the specified index does map to a node,
    // set the previous node's next value to the next next value,
    // thereby removing the node you want to delete from the list
    previous.next = previous.next.next
    this.length--
    return this.head
  }

  reverse() {
    let currentNode = this.head
    let previousNode = null

    while (currentNode !== null) {
      // save the next pointer before we overwrite currentNode.next!
      const tmp = currentNode.next

      // reverse the next pointer to point at the previous node
      currentNode.next = previousNode

      // step forward in the list
      previousNode = currentNode
      currentNode = tmp
    }

    // set the new head node when the reversal is finished
    this.head = previousNode

    return true
  }

  traverse(callback) {
    if (typeof callback !== 'function') {
      return false
    }

    let currentNode = this.head
    while (currentNode !== null) {
      callback(currentNode)
      currentNode = currentNode.next
    }

    return true
  }

  isEmpty() {
    return this.length === 0
  }

  size() {
    return this.length
  }

  enumerate() {
    const nodes = []
    let node = this.head
    while (node) {
      nodes.push(node.val)
      node = node.next
    }
    return nodes
  }

  clear() {
    this.head = null
    this.length = 0
    return this.head
  }
}
