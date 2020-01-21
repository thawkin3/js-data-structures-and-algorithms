import { LinkedList } from './linked-list'
import { Node } from './node'

describe('LinkedList', () => {
  it('can be instantiated with the `new` keyword', () => {
    expect(() => new LinkedList()).not.toThrow()
  })

  describe('head', () => {
    it('can return a null head pointer', () => {
      const linkedList1 = new LinkedList()
      expect(linkedList1.head).toBe(null)
    })

    it('can return a node head pointer', () => {
      const linkedList1 = new LinkedList()
      linkedList1.insertAtBeginning(42)
      expect(linkedList1.head).toEqual(new Node(42, null))
    })
  })

  describe('insertAtBeginning', () => {
    it('can have new items added to the beginning of it', () => {
      const linkedList1 = new LinkedList()
      expect(linkedList1.size()).toEqual(0)
      expect(linkedList1.head).toBe(null)

      expect(() => linkedList1.insertAtBeginning(42)).not.toThrow()
      expect(linkedList1.size()).toEqual(1)
      expect(linkedList1.head).toEqual(new Node(42, null))

      expect(() => linkedList1.insertAtBeginning(100)).not.toThrow()
      expect(linkedList1.size()).toEqual(2)
      expect(linkedList1.head).toEqual(new Node(100, new Node(42, null)))
    })

    it('can have items with the same value added to the beginning of it', () => {
      const linkedList1 = new LinkedList()
      linkedList1.insertAtBeginning(42)
      linkedList1.insertAtBeginning(42)
      linkedList1.insertAtBeginning(42)
      expect(linkedList1.size()).toEqual(3)
      expect(linkedList1.head).toEqual(
        new Node(42, new Node(42, new Node(42, null)))
      )
    })
  })

  describe('insertAtEnd', () => {
    it('can have new items added to the end of it', () => {
      const linkedList1 = new LinkedList()
      expect(linkedList1.size()).toEqual(0)
      expect(linkedList1.head).toBe(null)

      expect(() => linkedList1.insertAtEnd(42)).not.toThrow()
      expect(linkedList1.size()).toEqual(1)
      expect(linkedList1.head).toEqual(new Node(42, null))

      expect(() => linkedList1.insertAtEnd(100)).not.toThrow()
      expect(linkedList1.size()).toEqual(2)
      expect(linkedList1.head).toEqual(new Node(42, new Node(100, null)))
    })

    it('can have items with the same value added to the end of it', () => {
      const linkedList1 = new LinkedList()
      linkedList1.insertAtEnd(42)
      linkedList1.insertAtEnd(42)
      linkedList1.insertAtEnd(42)
      expect(linkedList1.size()).toEqual(3)
      expect(linkedList1.head).toEqual(
        new Node(42, new Node(42, new Node(42, null)))
      )
    })
  })

  describe('insertAt', () => {
    it('can have new items added at a specified position in the middle of the list', () => {
      const linkedList1 = new LinkedList()
      linkedList1.insertAtBeginning(42)
      linkedList1.insertAtBeginning(10)
      linkedList1.insertAtBeginning('a')
      expect(linkedList1.size()).toEqual(3)

      expect(() => linkedList1.insertAt('hey', 1)).not.toThrow()
      expect(linkedList1.size()).toEqual(4)
      expect(linkedList1.head.next).toEqual(
        new Node('hey', new Node(10, new Node(42, null)))
      )
    })

    it('can have new items added at the beginning when there is no head (empty list)', () => {
      const linkedList1 = new LinkedList()
      expect(linkedList1.size()).toEqual(0)

      expect(() => linkedList1.insertAt('hey', 3)).not.toThrow()
      expect(linkedList1.size()).toEqual(1)
      expect(linkedList1.head).toEqual(new Node('hey', null))
    })

    it('can have new items added at the beginning when an index of 0 is specified', () => {
      const linkedList1 = new LinkedList()
      linkedList1.insertAtBeginning(42)

      expect(() => linkedList1.insertAt('hey', 0)).not.toThrow()
      expect(linkedList1.size()).toEqual(2)
      expect(linkedList1.head).toEqual(new Node('hey', new Node(42, null)))
    })

    it('adds items to the end of the list if the specified index is equal to the list length', () => {
      const linkedList1 = new LinkedList()
      linkedList1.insertAtBeginning(42)
      linkedList1.insertAtBeginning(10)
      linkedList1.insertAtBeginning('a')
      expect(linkedList1.size()).toEqual(3)

      expect(() => linkedList1.insertAt('hey', 4)).not.toThrow()
      expect(linkedList1.size()).toEqual(4)
      expect(linkedList1.head).toEqual(
        new Node('a', new Node(10, new Node(42, new Node('hey', null))))
      )
    })

    it('adds items to the end of the list if the specified index is longer than the list length', () => {
      const linkedList1 = new LinkedList()
      linkedList1.insertAtBeginning(42)
      linkedList1.insertAtBeginning(10)
      linkedList1.insertAtBeginning('a')
      expect(linkedList1.size()).toEqual(3)

      expect(() => linkedList1.insertAt('hey', 100)).not.toThrow()
      expect(linkedList1.size()).toEqual(4)
      expect(linkedList1.head).toEqual(
        new Node('a', new Node(10, new Node(42, new Node('hey', null))))
      )
    })

    it('can have items with the same value added at the specified index', () => {
      const linkedList1 = new LinkedList()
      linkedList1.insertAt(42, 1)
      linkedList1.insertAt(42, 1)
      linkedList1.insertAt(42, 1)
      expect(linkedList1.size()).toEqual(3)
      expect(linkedList1.head).toEqual(
        new Node(42, new Node(42, new Node(42, null)))
      )
    })
  })

  describe('getAt', () => {
    it('returns null for an empty linked list', () => {
      const linkedList1 = new LinkedList()
      expect(linkedList1.getAt(0)).toBe(null)
      expect(linkedList1.head).toBe(null)
      expect(linkedList1.size()).toBe(0)
    })

    it('handles non-existent indexes to get when the linked list is empty', () => {
      const linkedList1 = new LinkedList()
      expect(linkedList1.getAt(100)).toBe(null)
      expect(linkedList1.head).toBe(null)
      expect(linkedList1.size()).toBe(0)
    })

    it('gets the node at the specified index for a linked list that has a single node', () => {
      const linkedList1 = new LinkedList()
      linkedList1.insertAtBeginning(42)
      expect(linkedList1.getAt(0)).toEqual(new Node(42, null))
      expect(linkedList1.head).toEqual(new Node(42, null))
      expect(linkedList1.size()).toBe(1)
    })

    it('handles non-existent indexes to get for a linked list that has a single node', () => {
      const linkedList1 = new LinkedList()
      linkedList1.insertAtBeginning(42)
      expect(linkedList1.getAt(100)).toEqual(null)
      expect(linkedList1.head).toEqual(new Node(42, null))
      expect(linkedList1.size()).toBe(1)
    })

    it('gets the node at the specified index for a linked list that has multiple nodes', () => {
      const linkedList1 = new LinkedList()
      linkedList1.insertAtBeginning(42)
      linkedList1.insertAtBeginning(10)
      linkedList1.insertAtBeginning('a')
      expect(linkedList1.head).toEqual(
        new Node('a', new Node(10, new Node(42, null)))
      )
      expect(linkedList1.size()).toBe(3)

      expect(linkedList1.getAt(0)).toEqual(
        new Node('a', new Node(10, new Node(42, null)))
      )
      expect(linkedList1.getAt(1)).toEqual(new Node(10, new Node(42, null)))
      expect(linkedList1.getAt(2)).toEqual(new Node(42, null))
      expect(linkedList1.getAt(3)).toEqual(null)
    })

    it('handles non-existent indexes to get for a linked list that has multiple nodes', () => {
      const linkedList1 = new LinkedList()
      linkedList1.insertAtBeginning(42)
      linkedList1.insertAtBeginning(10)
      linkedList1.insertAtBeginning('a')
      expect(linkedList1.getAt(100)).toEqual(null)
      expect(linkedList1.head).toEqual(
        new Node('a', new Node(10, new Node(42, null)))
      )
      expect(linkedList1.size()).toBe(3)
    })
  })

  describe('deleteFirstNode', () => {
    it('returns null for an empty linked list', () => {
      const linkedList1 = new LinkedList()
      expect(linkedList1.deleteFirstNode()).toBe(null)
      expect(linkedList1.head).toBe(null)
      expect(linkedList1.size()).toBe(0)
    })

    it('deletes the first node for a linked list that has a single node', () => {
      const linkedList1 = new LinkedList()
      linkedList1.insertAtBeginning(42)
      expect(linkedList1.deleteFirstNode()).toBe(null)
      expect(linkedList1.head).toBe(null)
      expect(linkedList1.size()).toBe(0)
    })

    it('deletes the first node for a linked list that has multiple nodes', () => {
      const linkedList1 = new LinkedList()
      linkedList1.insertAtBeginning(42)
      linkedList1.insertAtBeginning(10)
      expect(linkedList1.deleteFirstNode()).toEqual(new Node(42, null))
      expect(linkedList1.head).toEqual(new Node(42, null))
      expect(linkedList1.size()).toBe(1)
    })
  })

  describe('deleteLastNode', () => {
    it('returns null for an empty linked list', () => {
      const linkedList1 = new LinkedList()
      expect(linkedList1.deleteLastNode()).toBe(null)
      expect(linkedList1.head).toBe(null)
      expect(linkedList1.size()).toBe(0)
    })

    it('deletes the last node for a linked list that has a single node', () => {
      const linkedList1 = new LinkedList()
      linkedList1.insertAtBeginning(42)
      expect(linkedList1.deleteLastNode()).toBe(null)
      expect(linkedList1.head).toBe(null)
      expect(linkedList1.size()).toBe(0)
    })

    it('deletes the last node for a linked list that has multiple nodes', () => {
      const linkedList1 = new LinkedList()
      linkedList1.insertAtBeginning(42)
      linkedList1.insertAtBeginning(10)
      expect(linkedList1.deleteLastNode()).toEqual(new Node(10, null))
      expect(linkedList1.head).toEqual(new Node(10, null))
      expect(linkedList1.size()).toBe(1)
    })

    it('deletes the last node for a linked list that has lots of nodes', () => {
      const linkedList1 = new LinkedList()
      linkedList1.insertAtBeginning(42)
      linkedList1.insertAtBeginning(10)
      linkedList1.insertAtBeginning('a')
      linkedList1.insertAtBeginning(50)
      linkedList1.insertAtBeginning('hey')
      expect(linkedList1.deleteLastNode()).toEqual(
        new Node('hey', new Node(50, new Node('a', new Node(10, null))))
      )
      expect(linkedList1.head).toEqual(
        new Node('hey', new Node(50, new Node('a', new Node(10, null))))
      )
      expect(linkedList1.size()).toBe(4)
    })
  })

  describe('deleteAt', () => {
    it('returns null for an empty linked list', () => {
      const linkedList1 = new LinkedList()
      expect(linkedList1.deleteAt(0)).toBe(null)
      expect(linkedList1.head).toBe(null)
      expect(linkedList1.size()).toBe(0)
    })

    it('handles non-existent indexes to delete when the linked list is empty', () => {
      const linkedList1 = new LinkedList()
      expect(linkedList1.deleteAt(100)).toBe(null)
      expect(linkedList1.head).toBe(null)
      expect(linkedList1.size()).toBe(0)
    })

    it('deletes the node at the specified index for a linked list that has a single node', () => {
      const linkedList1 = new LinkedList()
      linkedList1.insertAtBeginning(42)
      expect(linkedList1.deleteAt(0)).toBe(null)
      expect(linkedList1.head).toBe(null)
      expect(linkedList1.size()).toBe(0)
    })

    it('handles non-existent indexes to delete for a linked list that has a single node', () => {
      const linkedList1 = new LinkedList()
      linkedList1.insertAtBeginning(42)
      expect(linkedList1.deleteAt(100)).toEqual(new Node(42, null))
      expect(linkedList1.head).toEqual(new Node(42, null))
      expect(linkedList1.size()).toBe(1)
    })

    it('deletes the node at the specified index for a linked list that has multiple nodes', () => {
      const linkedList1 = new LinkedList()
      linkedList1.insertAtBeginning(42)
      linkedList1.insertAtBeginning(10)
      linkedList1.insertAtBeginning('a')
      expect(linkedList1.deleteAt(1)).toEqual(new Node('a', new Node(42, null)))
      expect(linkedList1.head).toEqual(new Node('a', new Node(42, null)))
      expect(linkedList1.size()).toBe(2)
    })

    it('handles non-existent indexes to delete for a linked list that has multiple nodes', () => {
      const linkedList1 = new LinkedList()
      linkedList1.insertAtBeginning(42)
      linkedList1.insertAtBeginning(10)
      linkedList1.insertAtBeginning('a')
      expect(linkedList1.deleteAt(100)).toEqual(
        new Node('a', new Node(10, new Node(42, null)))
      )
      expect(linkedList1.head).toEqual(
        new Node('a', new Node(10, new Node(42, null)))
      )
      expect(linkedList1.size()).toBe(3)
    })
  })

  describe('reverse', () => {
    it('can correctly reverse a list', () => {
      const linkedList1 = new LinkedList()
      linkedList1.insertAtBeginning(1)
      linkedList1.insertAtBeginning(2)
      linkedList1.insertAtBeginning(3)
      linkedList1.insertAtBeginning(4)

      expect(linkedList1.head).toEqual(
        new Node(4, new Node(3, new Node(2, new Node(1, null))))
      )
      expect(linkedList1.size()).toBe(4)

      linkedList1.reverse()

      expect(linkedList1.head).toEqual(
        new Node(1, new Node(2, new Node(3, new Node(4, null))))
      )
      expect(linkedList1.size()).toBe(4)
    })

    it('can handle an empty list', () => {
      const linkedList1 = new LinkedList()
      expect(() => linkedList1.reverse()).not.toThrow()
    })

    it('can handle a list of only one node', () => {
      const linkedList1 = new LinkedList()
      linkedList1.insertAtBeginning(1)
      expect(linkedList1.size()).toBe(1)
      expect(linkedList1.head).toEqual(new Node(1, null))

      linkedList1.reverse()

      expect(linkedList1.size()).toBe(1)
      expect(linkedList1.head).toEqual(new Node(1, null))
    })
  })

  describe('traverse', () => {
    it('calls the callback function once for each node in the list', () => {
      const linkedList1 = new LinkedList()
      linkedList1.insertAtBeginning(1)
      linkedList1.insertAtBeginning(2)
      linkedList1.insertAtBeginning(3)

      const mockCallback = jest.fn()
      linkedList1.traverse(mockCallback)

      expect(mockCallback).toHaveBeenCalledTimes(3)
    })

    it('does not call the callback function if the list is empty', () => {
      const linkedList1 = new LinkedList()

      const mockCallback = jest.fn()
      linkedList1.traverse(mockCallback)

      expect(mockCallback).not.toHaveBeenCalled()
    })

    it('traverses the list starting at the beginning', () => {
      const linkedList1 = new LinkedList()
      linkedList1.insertAtBeginning(1)
      linkedList1.insertAtBeginning(2)
      linkedList1.insertAtBeginning(3)

      const nodeValues = []
      const callback = node => nodeValues.push(node.val)
      linkedList1.traverse(callback)

      expect(nodeValues).toEqual([3, 2, 1])
    })

    it('does not throw if no callback is provided', () => {
      const linkedList1 = new LinkedList()
      linkedList1.insertAtBeginning(1)
      linkedList1.insertAtBeginning(2)
      linkedList1.insertAtBeginning(3)

      expect(() => linkedList1.traverse()).not.toThrow()
    })
  })

  describe('isEmpty', () => {
    it('returns true if the linked list is empty', () => {
      const linkedList1 = new LinkedList()
      expect(linkedList1.isEmpty()).toBe(true)
    })

    it('returns false if the linked list is not empty', () => {
      const linkedList1 = new LinkedList()
      linkedList1.insertAtBeginning(42)
      expect(linkedList1.isEmpty()).toBe(false)
    })
  })

  describe('size', () => {
    it('returns the correct number of elements in the linked list', () => {
      const linkedList1 = new LinkedList()
      expect(linkedList1.size()).toBe(0)

      linkedList1.insertAtBeginning(42)
      expect(linkedList1.size()).toBe(1)

      linkedList1.insertAtBeginning(10)
      expect(linkedList1.size()).toBe(2)

      linkedList1.insertAtBeginning('a')
      expect(linkedList1.size()).toBe(3)

      linkedList1.deleteFirstNode()
      expect(linkedList1.size()).toBe(2)

      linkedList1.deleteFirstNode()
      expect(linkedList1.size()).toBe(1)

      linkedList1.deleteFirstNode()
      expect(linkedList1.size()).toBe(0)
    })
  })

  describe('enumerate', () => {
    it('returns an array of values for the entire linked list starting at the head', () => {
      const linkedList1 = new LinkedList()
      linkedList1.insertAtBeginning(42)
      linkedList1.insertAtBeginning(10)
      linkedList1.insertAtBeginning('a')
      expect(linkedList1.enumerate()).toEqual(['a', 10, 42])
    })

    it('returns an empty array when an empty linked list is enumerated', () => {
      const linkedList1 = new LinkedList()
      expect(linkedList1.enumerate()).toEqual([])
    })
  })

  describe('clear', () => {
    it('removes all elements and sets the linked list size to 0 and head to null when emptied', () => {
      const linkedList1 = new LinkedList()
      linkedList1.insertAtBeginning(42)
      linkedList1.insertAtBeginning(10)
      linkedList1.insertAtBeginning('a')
      linkedList1.clear()
      expect(linkedList1.size()).toEqual(0)
      expect(linkedList1.head).toEqual(null)
    })
  })
})
