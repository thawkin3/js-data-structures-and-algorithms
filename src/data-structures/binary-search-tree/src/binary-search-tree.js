/**
 * Binary Search Tree - a tree in which every node can have at most two children,
 * with lower values on the left and higher values on the right
 *
 * Methods and properties:
 *
 * - insert: average case: Logarithmic - O(log n); worst case: Linear — O(n)
 * - contains: average case: Logarithmic - O(log n); worst case: Linear — O(n)
 * - remove: average case: Logarithmic - O(log n); worst case: Linear — O(n)
 * - isEmpty: Constant — O(1)
 * - enumerate: average case: Logarithmic - O(log n); worst case: Linear — O(n)
 * - clear: Constant - O(1)
 */

export class BinarySearchTree {
  constructor(val = null, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }

  insert(val) {
    const node = new BinarySearchTree(val)

    function recurse(bst) {
      if (bst.val > val && bst.left === null) {
        bst.left = node
        return node
      } else if (bst.val > val) {
        recurse(bst.left)
      } else if (bst.val < val && bst.right === null) {
        bst.right = node
        return node
      } else if (bst.val < val) {
        recurse(bst.right)
      }
    }

    recurse(this)
  }

  contains(val) {
    let doesContain = false

    function recurse(bst) {
      if (bst.val === val) {
        doesContain = true
      } else if (bst.left !== null && val < bst.val) {
        recurse(bst.left)
      } else if (bst.right !== null && val > bst.val) {
        recurse(bst.right)
      }
    }

    recurse(this)
    return doesContain
  }

  remove(val) {
    // TODO
  }

  isEmpty() {
    return this.val === null
  }

  enumerate() {
    // TODO
  }

  clear() {
    this.val = null
    this.left = null
    this.right = null
    return this
  }
}
