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
 * - inOrderTraversal: average case: Logarithmic - O(log n); worst case: Linear — O(n)
 * - preOrderTraversal: average case: Logarithmic - O(log n); worst case: Linear — O(n)
 * - postOrderTraversal: average case: Logarithmic - O(log n); worst case: Linear — O(n)
 * - clear: Constant - O(1)
 */

import { Node } from './node'

export class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(val) {
    const newNode = new Node(val)

    // handle adding the first node
    if (this.root === null) {
      this.root = newNode
      return this.root
    }

    // adding a node to an existing tree
    this._insertNode(this.root, newNode)

    return newNode
  }

  // helper method for recursively finding the correct place to insert the new node
  _insertNode(currentNode, newNode) {
    if (currentNode.val > newNode.val && currentNode.left === null) {
      currentNode.left = newNode
      return newNode
    } else if (currentNode.val > newNode.val) {
      return this._insertNode(currentNode.left, newNode)
    } else if (
      (currentNode.val < newNode.val || currentNode.val === newNode.val) &&
      currentNode.right === null
    ) {
      currentNode.right = newNode
      return newNode
    } else {
      return this._insertNode(currentNode.right, newNode)
    }
  }

  contains(val) {
    let doesTreeContainValue = false

    if (this.root === null) {
      return doesTreeContainValue
    }

    function findValueInTree(currentNode) {
      if (currentNode.val === val) {
        doesTreeContainValue = true
      } else if (currentNode.left !== null && val < currentNode.val) {
        findValueInTree(currentNode.left)
      } else if (currentNode.right !== null && val > currentNode.val) {
        findValueInTree(currentNode.right)
      }
    }

    findValueInTree(this.root)

    return doesTreeContainValue
  }

  remove(val) {
    // the root is re-initialized with the root of a modified tree
    this.root = this._removeNode(this.root, val)
    return this.root
  }

  _removeNode(currentNode, key) {
    // if the root is null then tree is empty
    if (currentNode === null) {
      return null
    }

    // if the value to be deleted is less than the root's value, then move to the left subtree
    if (key < currentNode.val) {
      currentNode.left = this._removeNode(currentNode.left, key)
      return currentNode
    }

    // if the value to be deleted is greater than the root's value, then move to the right subtree
    if (key > currentNode.val) {
      currentNode.right = this._removeNode(currentNode.right, key)
      return currentNode
    }

    // if the value to be deleted is equal to the root's data, then delete this node.
    // the node could have 0, 1, or 2 children

    // deleting a node with no children
    if (currentNode.left === null && currentNode.right === null) {
      currentNode = null
      return currentNode
    }

    // deleting a node with one child (right)
    if (currentNode.left === null) {
      currentNode = currentNode.right
      return currentNode
    }

    // deleting a node with one child (left)
    if (currentNode.right === null) {
      currentNode = currentNode.left
      return currentNode
    }

    // deleting a node with two children.
    // the minimum node of the right subtree is stored in a temporary variable
    const temp = this._findMinNode(currentNode.right)
    currentNode.val = temp.val

    currentNode.right = this._removeNode(currentNode.right, temp.val)
    return currentNode
  }

  // 1. Traverse the left subtree (i.e. perform inOrderTraversal on the left subtree)
  // 2. Visit the root
  // 3. Traverse the right subtree (i.e. perform inOrderTraversal on the right subtree)
  inOrderTraversal(node = this.root, callback) {
    if (node !== null) {
      this.inOrderTraversal(node.left, callback)
      if (typeof callback === 'function') {
        callback(node)
      }
      this.inOrderTraversal(node.right, callback)
    }
  }

  // 1. Visit the root
  // 2. Traverse the left subtree (i.e. perform preOrderTraversal on the left subtree)
  // 3. Traverse the right subtree (i.e. perform preOrderTraversal on the right subtree)
  preOrderTraversal(node = this.root, callback) {
    if (node !== null) {
      if (typeof callback === 'function') {
        callback(node)
      }
      this.preOrderTraversal(node.left, callback)
      this.preOrderTraversal(node.right, callback)
    }
  }

  // 1. Traverse the left subtree (i.e. perform postOrderTraversal on the left subtree)
  // 2. Traverse the right subtree (i.e. perform postOrderTraversal on the right subtree)
  // 3. Visit the root
  postOrderTraversal(node = this.root, callback) {
    if (node !== null) {
      this.postOrderTraversal(node.left, callback)
      this.postOrderTraversal(node.right, callback)
      if (typeof callback === 'function') {
        callback(node)
      }
    }
  }

  isEmpty() {
    return this.root === null
  }

  clear() {
    this.root = null
    return this.root
  }

  // helper method to find the minimum node in the tree, starting at a specified node
  _findMinNode(node) {
    // if the left of a node is null, then it must be the minimum node
    if (node.left === null) {
      return node
    }
    return this._findMinNode(node.left)
  }
}
