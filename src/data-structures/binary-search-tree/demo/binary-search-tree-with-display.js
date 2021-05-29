import { BinarySearchTree } from '../src/binary-search-tree'
import { Node } from '../src/node'

// This class is made specifically to work with https://www.npmjs.com/package/react-tree-graph
// The methods for `insert`, `remove`, and `clear` are overridden so as to
// also update the data that the visualizer tool uses.
export class BinarySearchTreeWithDisplay extends BinarySearchTree {
  constructor() {
    super()
    this.root = null
    this.treeVisualizerData = {}
  }

  insert(val) {
    const newNode = new Node(val)

    // handle adding the first node
    if (this.root === null) {
      this.root = newNode
      this.treeVisualizerData = {
        name: newNode.val,
        children: [],
      }
      return this.root
    }

    // adding a node to an existing tree
    this._insertNode(this.root, newNode, this.treeVisualizerData)

    return newNode
  }

  // helper method for recursively finding the correct place to insert the new node
  _insertNode(currentNode, newNode, currentTreeVisualizerDataNode) {
    if (currentNode.val > newNode.val && currentNode.left === null) {
      currentNode.left = newNode
      currentTreeVisualizerDataNode.children.unshift({
        name: newNode.val,
        children: [],
      })
      return newNode
    } else if (currentNode.val > newNode.val) {
      return this._insertNode(
        currentNode.left,
        newNode,
        currentTreeVisualizerDataNode.children[0]
      )
    } else if (
      (currentNode.val < newNode.val || currentNode.val === newNode.val) &&
      currentNode.right === null
    ) {
      currentNode.right = newNode
      currentTreeVisualizerDataNode.children.push({
        name: newNode.val,
        children: [],
      })
      return newNode
    } else {
      return this._insertNode(
        currentNode.right,
        newNode,
        currentTreeVisualizerDataNode.children[1] ||
          currentTreeVisualizerDataNode.children[0]
      )
    }
  }

  remove(val) {
    // the root is re-initialized with the root of a modified tree
    this.root = this._removeNode(this.root, val, this.treeVisualizerData, null)
    return this.root
  }

  _removeNode(
    currentNode,
    key,
    currentTreeVisualizerDataNode,
    currentTreeVisualizerDataNodeParent
  ) {
    // if the root is null then tree is empty
    if (currentNode === null) {
      this.treeVisualizerData = {}
      return null
    }

    // if the value to be deleted is less than the root's value, then move to the left subtree
    if (key < currentNode.val) {
      currentNode.left = this._removeNode(
        currentNode.left,
        key,
        currentTreeVisualizerDataNode.children[0],
        currentTreeVisualizerDataNode
      )
      return currentNode
    }

    // if the value to be deleted is greater than the root's value, then move to the right subtree
    if (key > currentNode.val) {
      currentNode.right = this._removeNode(
        currentNode.right,
        key,
        currentTreeVisualizerDataNode.children[1] ||
          currentTreeVisualizerDataNode.children[0],
        currentTreeVisualizerDataNode
      )
      return currentNode
    }

    // if the value to be deleted is equal to the root's data, then delete this node.
    // the node could have 0, 1, or 2 children

    // deleting a node with no children
    if (currentNode.left === null && currentNode.right === null) {
      currentNode = null
      currentTreeVisualizerDataNodeParent.children =
        currentTreeVisualizerDataNodeParent.children.filter(
          childNode => childNode.name !== currentTreeVisualizerDataNode.name
        )
      return currentNode
    }

    // deleting a node with one child (right)
    if (currentNode.left === null) {
      currentNode = currentNode.right
      currentTreeVisualizerDataNodeParent.children =
        currentTreeVisualizerDataNode.children
      return currentNode
    }

    // deleting a node with one child (left)
    if (currentNode.right === null) {
      currentNode = currentNode.left
      currentTreeVisualizerDataNodeParent.children =
        currentTreeVisualizerDataNode.children
      return currentNode
    }

    // deleting a node with two children.
    // the minimum node of the right subtree is stored in a temporary variable
    const temp = this._findMinNode(currentNode.right)
    currentNode.val = temp.val
    currentTreeVisualizerDataNode.name = temp.val

    currentNode.right = this._removeNode(
      currentNode.right,
      temp.val,
      currentTreeVisualizerDataNode.children[1] ||
        currentTreeVisualizerDataNode.children[0],
      currentTreeVisualizerDataNode
    )
    return currentNode
  }

  clear() {
    this.root = null
    this.treeVisualizerData = {}
    return this.root
  }
}
