import { Node } from './node'

export class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  list() {
    return null
  }

  insertAtBeginning(val) {
    const newNode = new Node(val)
    newNode.next = this.head
    this.head = newNode
    this.size++
    return this.head
  }

  insertAtEnd(val) {
    const newNode = new Node(val)

    // If this is the first node added, it is the head
    if (!this.head) {
      this.head = newNode
      this.size++
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
    this.size++
    return this.head
  }
}
