import { BinarySearchTree } from './binary-search-tree'

describe('BinarySearchTree', () => {
  describe('instantiating', () => {
    it('can be instantiated with the `new` keyword', () => {
      expect(() => new BinarySearchTree()).not.toThrow()
    })

    it('can return null values for val, left, and right', () => {
      const bst1 = new BinarySearchTree()
      expect(bst1.val).toBe(null)
      expect(bst1.left).toBe(null)
      expect(bst1.right).toBe(null)
    })

    it('can return non-null values for val, left, and right', () => {
      const bst1 = new BinarySearchTree()
      const bst2 = new BinarySearchTree()
      const bst3 = new BinarySearchTree(42, bst1, bst2)
      expect(bst3.val).toBe(42)
      expect(bst3.left).toBe(bst1)
      expect(bst3.right).toBe(bst2)
    })
  })

  describe('insert', () => {
    it('can have new items added to the beginning of the tree', () => {
      const bst1 = new BinarySearchTree()
      expect(() => bst1.insert(42)).not.toThrow()
      expect(bst1.val).toEqual(42)
      expect(bst1.left).toEqual(null)
      expect(bst1.right).toEqual(null)
    })

    it('can have new items added to the end of the tree', () => {
      const bst1 = new BinarySearchTree()
      expect(() => bst1.insert(42)).not.toThrow()
      expect(() => bst1.insert(100)).not.toThrow()
      expect(() => bst1.insert(5)).not.toThrow()
      expect(() => bst1.insert(102)).not.toThrow()
      expect(() => bst1.insert(3)).not.toThrow()

      expect(bst1.val).toEqual(42)
      expect(bst1.left.val).toEqual(5)
      expect(bst1.left.left.val).toEqual(3)
      expect(bst1.right.val).toEqual(100)
      expect(bst1.right.right.val).toEqual(102)
    })

    it('sends the node that was added as the return value', () => {
      const bst1 = new BinarySearchTree()
      expect(bst1.insert(42)).toEqual(new BinarySearchTree(42, null, null))
      expect(bst1.insert(100)).toEqual(new BinarySearchTree(100, null, null))
      expect(bst1.insert(5)).toEqual(new BinarySearchTree(5, null, null))
      expect(bst1.insert(102)).toEqual(new BinarySearchTree(102, null, null))
      expect(bst1.insert(3)).toEqual(new BinarySearchTree(3, null, null))
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
    it('todo', () => {
      const bst1 = new BinarySearchTree()
      bst1.remove(0)
    })

    // it('returns null for an empty binary search tree', () => {
    //   const bst1 = new BinarySearchTree()
    //   expect(bst1.remove(0)).toBe(null)
    //   expect(bst1.val).toBe(null)
    //   expect(bst1.left).toBe(null)
    //   expect(bst1.right).toBe(null)
    // })
    //
    // it('deletes the specified value for a binary search tree that has a single node', () => {
    //   const bst1 = new BinarySearchTree()
    //   bst1.insert(42)
    //   expect(bst1.remove(42)).toBe(42)
    //   expect(bst1.val).toBe(null)
    //   expect(bst1.left).toBe(null)
    //   expect(bst1.right).toBe(null)
    // })
    //
    // it('handles non-existent values to delete for a binary search tree that has a single node', () => {
    //   const bst1 = new BinarySearchTree()
    //   bst1.insert(42)
    //   expect(bst1.remove(100)).toEqual(null)
    //   expect(bst1.val).toBe(42)
    //   expect(bst1.left).toBe(null)
    //   expect(bst1.right).toBe(null)
    // })
    //
    // it('deletes the specified value for a binary search tree that has multiple nodes', () => {
    //   const bst1 = new BinarySearchTree()
    //   bst1.insert(42)
    //   bst1.insert(10)
    //   bst1.insert(100)
    //   expect(bst1.remove(42)).toBe(42)
    // })
    //
    // it('handles non-existent values to delete for a binary search tree that has multiple nodes', () => {
    //   const bst1 = new BinarySearchTree()
    //   bst1.insert(42)
    //   bst1.insert(10)
    //   bst1.insert(100)
    //   expect(bst1.remove(42)).toBe(42)
    // })
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
    it("removes all elements and sets the binary search tree's values for val, left, and right to null when emptied", () => {
      const bst1 = new BinarySearchTree()
      bst1.insert(42)
      bst1.insert(10)
      bst1.insert('a')
      bst1.clear()
      expect(bst1.val).toEqual(null)
      expect(bst1.left).toEqual(null)
      expect(bst1.right).toEqual(null)
    })
  })
})
