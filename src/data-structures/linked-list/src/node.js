/**
 * Node - Contains a value and a pointer to the next node
 *
 * Meant to be used with a singly linked list
 *
 * Methods and properties:
 *
 * - val: any value
 * - next: pointer to the next node (or null)
 */

export class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}
