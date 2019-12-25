/**
 * Node - Contains a value and a pointer to the next node and to the previous node
 *
 * Meant to be used with a doubly linked list
 *
 * Methods and properties:
 *
 * - val: any value
 * - next: pointer to the next node (or null)
 * - prev: pointer to the previous node (or null)
 */
export class Node {
  constructor(val, next = null, prev = null) {
    this.val = val
    this.next = next
    this.prev = prev
  }
}
