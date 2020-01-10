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

    // handle adding the first node
    if (!this.val) {
      this.val = node.val
      this.left = node.left
      this.right = node.right
      return this
    }

    // adding a node to an existing tree
    function findPlaceForNode(bst) {
      if (bst.val > val && bst.left === null) {
        bst.left = node
        return node
      } else if (bst.val > val) {
        findPlaceForNode(bst.left)
      } else if (bst.val < val && bst.right === null) {
        bst.right = node
        return node
      } else if (bst.val < val) {
        findPlaceForNode(bst.right)
      }
    }

    findPlaceForNode(this)

    return node
  }

  contains(val) {
    let doesTreeContainValue = false

    function findValueInTree(bst) {
      if (bst.val === val) {
        doesTreeContainValue = true
      } else if (bst.left !== null && val < bst.val) {
        findValueInTree(bst.left)
      } else if (bst.right !== null && val > bst.val) {
        findValueInTree(bst.right)
      }
    }

    findValueInTree(this)

    return doesTreeContainValue
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
