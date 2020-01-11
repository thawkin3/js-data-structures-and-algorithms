/**
 * Node - Contains a value and a pointer to the left node and to the right node
 *
 * Meant to be used with a binary search tree
 *
 * Methods and properties:
 *
 * - val: any value
 * - left: pointer to the left node (or null)
 * - right: pointer to the right node (or null)
 */
export class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}
