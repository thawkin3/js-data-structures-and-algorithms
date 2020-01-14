import { BinarySearchTree } from './binary-search-tree'

describe('BinarySearchTree', () => {
  describe('instantiating', () => {
    it('can be instantiated with the `new` keyword', () => {
      expect(() => new BinarySearchTree()).not.toThrow()
    })

    it('creates a root node as null', () => {
      const bst1 = new BinarySearchTree()
      expect(bst1.root).toBe(null)
    })
  })

  describe('insert', () => {
    it('can have new items added to the beginning of an empty tree', () => {
      const bst1 = new BinarySearchTree()
      expect(() => bst1.insert(42)).not.toThrow()
      expect(bst1.root.val).toEqual(42)
      expect(bst1.root.left).toEqual(null)
      expect(bst1.root.right).toEqual(null)
    })

    it('can have new items added to the end of the tree', () => {
      const bst1 = new BinarySearchTree()
      expect(() => bst1.insert(42)).not.toThrow()
      expect(() => bst1.insert(100)).not.toThrow()
      expect(() => bst1.insert(5)).not.toThrow()
      expect(() => bst1.insert(102)).not.toThrow()
      expect(() => bst1.insert(3)).not.toThrow()

      expect(bst1.root.val).toEqual(42)
      expect(bst1.root.left.val).toEqual(5)
      expect(bst1.root.left.left.val).toEqual(3)
      expect(bst1.root.right.val).toEqual(100)
      expect(bst1.root.right.right.val).toEqual(102)

      // Tree after inserting the values:
      //          42
      //         /  \
      //        5   100
      //       /      \
      //      3       102
    })

    it('sends the node that was added as the return value', () => {
      const bst1 = new BinarySearchTree()
      expect(bst1.insert(42).val).toEqual(42)
      expect(bst1.insert(100).val).toEqual(100)
      expect(bst1.insert(5).val).toEqual(5)
      expect(bst1.insert(102).val).toEqual(102)
      expect(bst1.insert(3).val).toEqual(3)
    })

    it('can have items with the same value added to it', () => {
      const bst1 = new BinarySearchTree()
      bst1.insert(42)
      bst1.insert(42)
      bst1.insert(42)
      expect(bst1.root.val).toEqual(42)
      expect(bst1.root.right.val).toEqual(42)
      expect(bst1.root.right.right.val).toEqual(42)

      // Tree state:
      //    42
      //     \
      //      42
      //       \
      //        42
    })
  })

  describe('contains', () => {
    it('returns true if the specified value exists in the tree', () => {
      const bst1 = new BinarySearchTree()
      bst1.insert(42)
      bst1.insert(100)
      bst1.insert(2)
      bst1.insert(9001)

      expect(bst1.contains(42)).toBe(true)
      expect(bst1.contains(100)).toBe(true)
      expect(bst1.contains(2)).toBe(true)
      expect(bst1.contains(9001)).toBe(true)
    })

    it('returns false if the specified value does not exist in the tree', () => {
      const bst1 = new BinarySearchTree()
      bst1.insert(42)
      bst1.insert(100)
      bst1.insert(2)
      bst1.insert(9001)

      expect(bst1.contains(123)).toBe(false)
    })

    it('returns false if the binary search tree is empty', () => {
      const bst1 = new BinarySearchTree()
      expect(bst1.contains(123)).toBe(false)
    })
  })

  describe('remove', () => {
    it('returns null for an empty binary search tree', () => {
      const bst1 = new BinarySearchTree()
      expect(bst1.remove(0)).toBe(null)
      expect(bst1.root).toBe(null)
    })

    it('deletes the specified value for a binary search tree that has a single node', () => {
      const bst1 = new BinarySearchTree()
      bst1.insert(42)
      expect(bst1.remove(42)).toBe(null)
      expect(bst1.root).toBe(null)
    })

    it('handles non-existent values to delete for a binary search tree that has a single node', () => {
      const bst1 = new BinarySearchTree()
      bst1.insert(42)
      expect(bst1.remove(100)).toEqual({ val: 42, left: null, right: null })
      expect(bst1.root.val).toBe(42)
      expect(bst1.root.left).toBe(null)
      expect(bst1.root.right).toBe(null)
    })

    it('can delete the root node for a binary search tree that has three nodes', () => {
      const bst1 = new BinarySearchTree()
      bst1.insert(42)
      bst1.insert(10)
      bst1.insert(100)

      // Before removing the 42 value:
      //          42
      //         /  \
      //       10   100

      expect(bst1.remove(42)).toEqual({
        val: 100,
        left: { val: 10, left: null, right: null },
        right: null,
      })

      // After removing the 42 value:
      //         100
      //         /
      //       10
    })

    it('can delete the left node for a binary search tree that has three nodes', () => {
      const bst1 = new BinarySearchTree()
      bst1.insert(42)
      bst1.insert(10)
      bst1.insert(100)

      // Before removing the 10 value:
      //          42
      //         /  \
      //       10   100

      expect(bst1.remove(10)).toEqual({
        val: 42,
        left: null,
        right: { val: 100, left: null, right: null },
      })

      // After removing the 10 value:
      //          42
      //            \
      //            100
    })

    it('can delete the right node for a binary search tree that has three nodes', () => {
      const bst1 = new BinarySearchTree()
      bst1.insert(42)
      bst1.insert(10)
      bst1.insert(100)

      // Before removing the 100 value:
      //          42
      //         /  \
      //       10   100

      expect(bst1.remove(100)).toEqual({
        val: 42,
        left: { val: 10, left: null, right: null },
        right: null,
      })

      // After removing the 100 value:
      //          42
      //         /
      //       10
    })

    it('handles non-existent values to delete for a binary search tree that has three nodes', () => {
      const bst1 = new BinarySearchTree()
      bst1.insert(42)
      bst1.insert(10)
      bst1.insert(100)
      expect(bst1.remove(9001)).toEqual({
        val: 42,
        left: { val: 10, left: null, right: null },
        right: { val: 100, left: null, right: null },
      })
    })

    it('can delete a node that has one right child', () => {
      const bst1 = new BinarySearchTree()
      bst1.insert(42)
      bst1.insert(10)
      bst1.insert(100)
      bst1.insert(102)

      // Before removing the 100 value:
      //          42
      //         /  \
      //        10  100
      //              \
      //              102

      expect(bst1.remove(100)).toEqual({
        val: 42,
        left: { val: 10, left: null, right: null },
        right: { val: 102, left: null, right: null },
      })

      // After removing the 100 value:
      //          42
      //         /  \
      //        10  102
    })

    it('can delete a node that has one left child', () => {
      const bst1 = new BinarySearchTree()
      bst1.insert(42)
      bst1.insert(10)
      bst1.insert(100)
      bst1.insert(2)

      // Before removing the 10 value:
      //          42
      //         /  \
      //        10  100
      //       /
      //      2

      expect(bst1.remove(10)).toEqual({
        val: 42,
        left: { val: 2, left: null, right: null },
        right: { val: 100, left: null, right: null },
      })

      // After removing the 10 value:
      //          42
      //         /  \
      //        2   100
    })

    it('can delete a node that has two children, somewhere in the middle of the tree', () => {
      const bst1 = new BinarySearchTree()
      bst1.insert(42)
      bst1.insert(10)
      bst1.insert(100)
      bst1.insert(2)
      bst1.insert(102)
      bst1.insert(80)
      bst1.insert(81)
      bst1.insert(79)
      bst1.insert(78)

      // Before removing the 100 value:
      //          42
      //         /  \
      //        10  100
      //       /    / \
      //      2   80  102
      //          / \
      //         79  81
      //        /
      //       78

      expect(bst1.remove(100)).toEqual({
        val: 42,
        left: {
          val: 10,
          left: { val: 2, left: null, right: null },
          right: null,
        },
        right: {
          val: 102,
          left: {
            val: 80,
            left: {
              val: 79,
              left: { val: 78, left: null, right: null },
              right: null,
            },
            right: { val: 81, left: null, right: null },
          },
          right: null,
        },
      })

      // After removing the 100 value:
      //          42
      //         /  \
      //        10  102
      //       /     /
      //      2     80
      //           / \
      //          79  81
      //         /
      //        78
    })

    it('can delete a node that has two children, somewhere in the middle of the tree 2', () => {
      const bst1 = new BinarySearchTree()
      bst1.insert(42)
      bst1.insert(10)
      bst1.insert(100)
      bst1.insert(2)
      bst1.insert(102)
      bst1.insert(80)
      bst1.insert(90)
      bst1.insert(79)
      bst1.insert(78)
      bst1.insert(85)
      bst1.insert(84)

      // Before removing the 80 value:
      //          42
      //         /  \
      //        10  100
      //       /    / \
      //      2   80  102
      //          / \
      //         79  90
      //        /    /
      //       78   85
      //           /
      //          84

      bst1.remove(80)

      expect(bst1.root.val).toBe(42)
      expect(bst1.root.left.val).toBe(10)
      expect(bst1.root.right.val).toBe(100)
      expect(bst1.root.left.left.val).toBe(2)
      expect(bst1.root.right.right.val).toBe(102)
      expect(bst1.root.right.left.val).toBe(84)
      expect(bst1.root.right.left.right.val).toBe(90)
      expect(bst1.root.right.left.right.left.val).toBe(85)
      expect(bst1.root.right.left.left.val).toBe(79)
      expect(bst1.root.right.left.left.left.val).toBe(78)

      expect(bst1.root).toEqual({
        val: 42,
        left: {
          val: 10,
          left: { val: 2, left: null, right: null },
          right: null,
        },
        right: {
          val: 100,
          left: {
            val: 84,
            left: {
              val: 79,
              left: {
                val: 78,
                left: null,
                right: null,
              },
              right: null,
            },
            right: {
              val: 90,
              left: {
                val: 85,
                left: null,
                right: null,
              },
              right: null,
            },
          },
          right: {
            val: 102,
            left: null,
            right: null,
          },
        },
      })

      // After removing the 80 value:
      //          42
      //         /  \
      //        10  100
      //       /    / \
      //      2   84  102
      //          / \
      //        79  90
      //       /    /
      //      78   85
    })
    it('can delete a value in the tree when there are duplicate values in the tree', () => {
      const bst1 = new BinarySearchTree()
      bst1.insert(42)
      bst1.insert(42)
      bst1.insert(42)

      // Before removing the 42 value:
      //          42
      //            \
      //             42
      //               \
      //                42

      expect(bst1.remove(42)).toEqual({
        val: 42,
        left: null,
        right: { val: 42, left: null, right: null },
      })

      // After removing the 42 value:
      //         42
      //           \
      //            42
    })
  })

  describe('isEmpty', () => {
    it('returns true if the binary search tree is empty', () => {
      const bst1 = new BinarySearchTree()
      expect(bst1.isEmpty()).toBe(true)
    })

    it('returns false if the binary search tree is not empty', () => {
      const bst1 = new BinarySearchTree()
      bst1.insert(42)
      expect(bst1.isEmpty()).toBe(false)
    })
  })

  describe('traversal', () => {
    describe('inOrderTraversal', () => {
      it('calls the callback provided once for each node in the tree', () => {
        const myCallback = jest.fn()
        const bst1 = new BinarySearchTree()
        expect(myCallback).toHaveBeenCalledTimes(0)
        myCallback.mockClear()

        bst1.insert(42)
        bst1.inOrderTraversal(bst1.root, myCallback)
        expect(myCallback).toHaveBeenCalledTimes(1)
        myCallback.mockClear()

        bst1.insert(10)
        bst1.inOrderTraversal(bst1.root, myCallback)
        expect(myCallback).toHaveBeenCalledTimes(2)
        myCallback.mockClear()

        bst1.insert(100)
        bst1.inOrderTraversal(bst1.root, myCallback)
        expect(myCallback).toHaveBeenCalledTimes(3)
        myCallback.mockClear()
      })

      it('visits the nodes in the correct order (1. left subtree, 2. root, 3. right subtree)', () => {
        const visitedNodes = []
        const myCallback = node => visitedNodes.push(node.val)
        const bst1 = new BinarySearchTree()
        bst1.insert(42)
        bst1.insert(10)
        bst1.insert(100)
        bst1.inOrderTraversal(bst1.root, myCallback)
        expect(visitedNodes.join(', ')).toEqual('10, 42, 100')
      })

      it('does not throw when no callback method is provided as an argument', () => {
        const bst1 = new BinarySearchTree()
        bst1.insert(42)
        bst1.insert(10)
        bst1.insert(100)
        expect(() => bst1.inOrderTraversal(bst1.root)).not.toThrow()
      })

      it('does not throw when no root node is provided as an argument', () => {
        const myCallback = jest.fn()
        const bst1 = new BinarySearchTree()
        bst1.insert(42)
        bst1.insert(10)
        bst1.insert(100)
        expect(() => bst1.inOrderTraversal(undefined, myCallback)).not.toThrow()
        expect(myCallback).toHaveBeenCalledTimes(3)
      })
    })

    describe('preOrderTraversal', () => {
      it('calls the callback provided once for each node in the tree', () => {
        const myCallback = jest.fn()
        const bst1 = new BinarySearchTree()
        expect(myCallback).toHaveBeenCalledTimes(0)
        myCallback.mockClear()

        bst1.insert(42)
        bst1.preOrderTraversal(bst1.root, myCallback)
        expect(myCallback).toHaveBeenCalledTimes(1)
        myCallback.mockClear()

        bst1.insert(10)
        bst1.preOrderTraversal(bst1.root, myCallback)
        expect(myCallback).toHaveBeenCalledTimes(2)
        myCallback.mockClear()

        bst1.insert(100)
        bst1.preOrderTraversal(bst1.root, myCallback)
        expect(myCallback).toHaveBeenCalledTimes(3)
        myCallback.mockClear()
      })

      it('visits the nodes in the correct order (1. root, 2. left subtree, 3. right subtree)', () => {
        const visitedNodes = []
        const myCallback = node => visitedNodes.push(node.val)
        const bst1 = new BinarySearchTree()
        bst1.insert(42)
        bst1.insert(10)
        bst1.insert(100)
        bst1.preOrderTraversal(bst1.root, myCallback)
        expect(visitedNodes.join(', ')).toEqual('42, 10, 100')
      })

      it('does not throw when no callback method is provided as an argument', () => {
        const bst1 = new BinarySearchTree()
        bst1.insert(42)
        bst1.insert(10)
        bst1.insert(100)
        expect(() => bst1.preOrderTraversal(bst1.root)).not.toThrow()
      })

      it('does not throw when no root node is provided as an argument', () => {
        const myCallback = jest.fn()
        const bst1 = new BinarySearchTree()
        bst1.insert(42)
        bst1.insert(10)
        bst1.insert(100)
        expect(() =>
          bst1.preOrderTraversal(undefined, myCallback)
        ).not.toThrow()
        expect(myCallback).toHaveBeenCalledTimes(3)
      })
    })

    describe('postOrderTraversal', () => {
      it('calls the callback provided once for each node in the tree', () => {
        const myCallback = jest.fn()
        const bst1 = new BinarySearchTree()
        expect(myCallback).toHaveBeenCalledTimes(0)
        myCallback.mockClear()

        bst1.insert(42)
        bst1.postOrderTraversal(bst1.root, myCallback)
        expect(myCallback).toHaveBeenCalledTimes(1)
        myCallback.mockClear()

        bst1.insert(10)
        bst1.postOrderTraversal(bst1.root, myCallback)
        expect(myCallback).toHaveBeenCalledTimes(2)
        myCallback.mockClear()

        bst1.insert(100)
        bst1.postOrderTraversal(bst1.root, myCallback)
        expect(myCallback).toHaveBeenCalledTimes(3)
        myCallback.mockClear()
      })

      it('visits the nodes in the correct order (1. left subtree, 2. right subtree, 3. root)', () => {
        const visitedNodes = []
        const myCallback = node => visitedNodes.push(node.val)
        const bst1 = new BinarySearchTree()
        bst1.insert(42)
        bst1.insert(10)
        bst1.insert(100)
        bst1.postOrderTraversal(bst1.root, myCallback)
        expect(visitedNodes.join(', ')).toEqual('10, 100, 42')
      })

      it('does not throw when no callback method is provided as an argument', () => {
        const bst1 = new BinarySearchTree()
        bst1.insert(42)
        bst1.insert(10)
        bst1.insert(100)
        expect(() => bst1.postOrderTraversal(bst1.root)).not.toThrow()
      })

      it('does not throw when no root node is provided as an argument', () => {
        const myCallback = jest.fn()
        const bst1 = new BinarySearchTree()
        bst1.insert(42)
        bst1.insert(10)
        bst1.insert(100)
        expect(() =>
          bst1.postOrderTraversal(undefined, myCallback)
        ).not.toThrow()
        expect(myCallback).toHaveBeenCalledTimes(3)
      })
    })
  })

  describe('clear', () => {
    it("removes all elements and sets the binary search tree's root to null when emptied", () => {
      const bst1 = new BinarySearchTree()
      bst1.insert(42)
      bst1.insert(10)
      bst1.clear()
      expect(bst1.root).toEqual(null)
    })
  })
})
