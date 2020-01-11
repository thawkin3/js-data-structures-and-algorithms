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
    it('can have new items added to the beginning of the tree', () => {
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
    })

    it('sends the node that was added as the return value', () => {
      const bst1 = new BinarySearchTree()
      expect(bst1.insert(42).val).toEqual(42)
      expect(bst1.insert(100).val).toEqual(100)
      expect(bst1.insert(5).val).toEqual(5)
      expect(bst1.insert(102).val).toEqual(102)
      expect(bst1.insert(3).val).toEqual(3)
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
      expect(bst1.remove(42)).toEqual({
        val: 100,
        left: { val: 10, left: null, right: null },
        right: null,
      })
    })

    it('can delete the left node for a binary search tree that has three nodes', () => {
      const bst1 = new BinarySearchTree()
      bst1.insert(42)
      bst1.insert(10)
      bst1.insert(100)
      expect(bst1.remove(10)).toEqual({
        val: 42,
        left: null,
        right: { val: 100, left: null, right: null },
      })
    })

    it('can delete the right node for a binary search tree that has three nodes', () => {
      const bst1 = new BinarySearchTree()
      bst1.insert(42)
      bst1.insert(10)
      bst1.insert(100)
      expect(bst1.remove(100)).toEqual({
        val: 42,
        left: { val: 10, left: null, right: null },
        right: null,
      })
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
      expect(bst1.remove(100)).toEqual({
        val: 42,
        left: { val: 10, left: null, right: null },
        right: { val: 102, left: null, right: null },
      })
    })

    it('can delete a node that has one left child', () => {
      const bst1 = new BinarySearchTree()
      bst1.insert(42)
      bst1.insert(10)
      bst1.insert(100)
      bst1.insert(2)
      expect(bst1.remove(10)).toEqual({
        val: 42,
        left: { val: 2, left: null, right: null },
        right: { val: 100, left: null, right: null },
      })
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

      // Before:
      //          42
      //         /  \
      //        10   100
      //       /     / \
      //      2     80  102
      //           / \
      //          79  81
      //         /
      //        78

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

      // After:
      //          42
      //         /  \
      //        10   102
      //       /     /
      //      2     80
      //           / \
      //          79  81
      //         /
      //        78
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

  describe('enumerate', () => {
    it('todo', () => {
      const bst1 = new BinarySearchTree()
      bst1.enumerate()
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
