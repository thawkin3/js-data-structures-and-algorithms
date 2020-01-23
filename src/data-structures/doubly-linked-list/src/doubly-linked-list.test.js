import { DoublyLinkedList } from './doubly-linked-list'
import { Node } from './node'

describe('DoublyLinkedList', () => {
  it('can be instantiated with the `new` keyword', () => {
    expect(() => new DoublyLinkedList()).not.toThrow()
  })

  describe('head', () => {
    it('can return a null head pointer when the list is empty', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      expect(doublyLinkedList1.head).toBe(null)
    })

    it('can return a node head pointer when the list has nodes in it', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtBeginning(42)
      expect(doublyLinkedList1.head).toEqual(new Node(42, null, null))
    })
  })

  describe('tail', () => {
    it('can return a null tail pointer when the list is empty', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      expect(doublyLinkedList1.tail).toBe(null)
    })

    it('can return a node tail pointer when the list has nodes in it', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtBeginning(42)
      expect(doublyLinkedList1.tail).toEqual(new Node(42, null, null))
    })
  })

  describe('insertAtBeginning', () => {
    it('can have new items added to the beginning of it', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      expect(doublyLinkedList1.size()).toEqual(0)
      expect(doublyLinkedList1.head).toBe(null)

      expect(() => doublyLinkedList1.insertAtBeginning(42)).not.toThrow()
      expect(doublyLinkedList1.size()).toEqual(1)
      expect(doublyLinkedList1.head).toEqual(new Node(42, null, null))

      expect(() => doublyLinkedList1.insertAtBeginning(100)).not.toThrow()
      expect(doublyLinkedList1.size()).toEqual(2)
      expect(doublyLinkedList1.head.val).toEqual(100)
      expect(doublyLinkedList1.head.next.val).toEqual(42)
      expect(doublyLinkedList1.head.prev).toEqual(null)
    })

    it('can have items with the same value added to the beginning of it', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtBeginning(42)
      doublyLinkedList1.insertAtBeginning(42)
      doublyLinkedList1.insertAtBeginning(42)
      expect(doublyLinkedList1.size()).toEqual(3)
      expect(doublyLinkedList1.head.val).toEqual(42)
      expect(doublyLinkedList1.head.next.val).toEqual(42)
      expect(doublyLinkedList1.head.next.next.val).toEqual(42)
    })
  })

  describe('insertAtEnd', () => {
    it('can have new items added to the end of it', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      expect(doublyLinkedList1.size()).toEqual(0)
      expect(doublyLinkedList1.head).toBe(null)

      expect(() => doublyLinkedList1.insertAtEnd(42)).not.toThrow()
      expect(doublyLinkedList1.size()).toEqual(1)
      expect(doublyLinkedList1.head).toEqual(new Node(42, null, null))

      expect(() => doublyLinkedList1.insertAtEnd(100)).not.toThrow()
      expect(doublyLinkedList1.size()).toEqual(2)
      expect(doublyLinkedList1.head.val).toEqual(42)
      expect(doublyLinkedList1.head.next.val).toEqual(100)
      expect(doublyLinkedList1.head.prev).toEqual(null)
    })

    it('can have items with the same value added to the end of it', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtEnd(42)
      doublyLinkedList1.insertAtEnd(42)
      doublyLinkedList1.insertAtEnd(42)
      expect(doublyLinkedList1.size()).toEqual(3)
      expect(doublyLinkedList1.head.val).toEqual(42)
      expect(doublyLinkedList1.head.next.val).toEqual(42)
      expect(doublyLinkedList1.head.next.next.val).toEqual(42)
    })
  })

  describe('insertAt', () => {
    it('can have new items added at a specified position in the middle of the list', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtBeginning(42)
      doublyLinkedList1.insertAtBeginning(10)
      doublyLinkedList1.insertAtBeginning('a')
      expect(doublyLinkedList1.size()).toEqual(3)

      expect(() => doublyLinkedList1.insertAt('hey', 1)).not.toThrow()
      expect(doublyLinkedList1.size()).toEqual(4)
      expect(doublyLinkedList1.head.next.val).toEqual('hey')
      expect(doublyLinkedList1.head.next.next.val).toEqual(10)
      expect(doublyLinkedList1.head.next.prev.val).toEqual('a')
    })

    it('can have new items added at the beginning when there is no head (empty list)', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      expect(doublyLinkedList1.size()).toEqual(0)

      expect(() => doublyLinkedList1.insertAt('hey', 3)).not.toThrow()
      expect(doublyLinkedList1.size()).toEqual(1)
      expect(doublyLinkedList1.head).toEqual(new Node('hey', null, null))
    })

    it('can have new items added at the beginning when an index of 0 is specified', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtBeginning(42)

      expect(() => doublyLinkedList1.insertAt('hey', 0)).not.toThrow()
      expect(doublyLinkedList1.size()).toEqual(2)
      expect(doublyLinkedList1.head.val).toEqual('hey')
      expect(doublyLinkedList1.head.next.val).toEqual(42)
      expect(doublyLinkedList1.head.prev).toEqual(null)
    })

    it('adds items to the end of the list if the specified index is equal to the list length', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtBeginning(42)
      doublyLinkedList1.insertAtBeginning(10)
      doublyLinkedList1.insertAtBeginning('a')
      expect(doublyLinkedList1.size()).toEqual(3)

      expect(() => doublyLinkedList1.insertAt('hey', 4)).not.toThrow()
      expect(doublyLinkedList1.size()).toEqual(4)
      expect(doublyLinkedList1.tail.val).toEqual('hey')
      expect(doublyLinkedList1.tail.next).toEqual(null)
      expect(doublyLinkedList1.tail.prev.val).toEqual(42)
    })

    it('adds items to the end of the list if the specified index is longer than the list length', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtBeginning(42)
      doublyLinkedList1.insertAtBeginning(10)
      doublyLinkedList1.insertAtBeginning('a')
      expect(doublyLinkedList1.size()).toEqual(3)

      expect(() => doublyLinkedList1.insertAt('hey', 100)).not.toThrow()
      expect(doublyLinkedList1.size()).toEqual(4)
      expect(doublyLinkedList1.tail.val).toEqual('hey')
      expect(doublyLinkedList1.tail.next).toEqual(null)
      expect(doublyLinkedList1.tail.prev.val).toEqual(42)
    })

    it('can have items with the same value added at the specified index', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAt(42, 1)
      doublyLinkedList1.insertAt(42, 1)
      doublyLinkedList1.insertAt(42, 1)
      expect(doublyLinkedList1.size()).toEqual(3)
      expect(doublyLinkedList1.head.val).toEqual(42)
      expect(doublyLinkedList1.head.next.val).toEqual(42)
      expect(doublyLinkedList1.head.next.next.val).toEqual(42)
    })
  })

  describe('getAt', () => {
    it('returns null for an empty doubly linked list', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      expect(doublyLinkedList1.getAt(0)).toBe(null)
      expect(doublyLinkedList1.head).toBe(null)
      expect(doublyLinkedList1.tail).toBe(null)
      expect(doublyLinkedList1.size()).toBe(0)
    })

    it('handles non-existent indexes to get when the doubly linked list is empty', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      expect(doublyLinkedList1.getAt(100)).toBe(null)
      expect(doublyLinkedList1.head).toBe(null)
      expect(doublyLinkedList1.tail).toBe(null)
      expect(doublyLinkedList1.size()).toBe(0)
    })

    it('gets the node at the specified index for a doubly linked list that has a single node', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtBeginning(42)
      expect(doublyLinkedList1.getAt(0)).toEqual(new Node(42, null, null))
      expect(doublyLinkedList1.head).toEqual(new Node(42, null, null))
      expect(doublyLinkedList1.tail).toEqual(new Node(42, null, null))
      expect(doublyLinkedList1.size()).toBe(1)
    })

    it('handles non-existent indexes to get for a doubly linked list that has a single node', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtBeginning(42)
      expect(doublyLinkedList1.getAt(100)).toEqual(null)
      expect(doublyLinkedList1.head).toEqual(new Node(42, null, null))
      expect(doublyLinkedList1.tail).toEqual(new Node(42, null, null))
      expect(doublyLinkedList1.size()).toBe(1)
    })

    it('gets the node at the specified index for a doubly linked list that has multiple nodes', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtBeginning(42)
      doublyLinkedList1.insertAtBeginning(10)
      doublyLinkedList1.insertAtBeginning('a')
      expect(doublyLinkedList1.head.val).toEqual('a')
      expect(doublyLinkedList1.head.next.val).toEqual(10)
      expect(doublyLinkedList1.head.prev).toEqual(null)
      expect(doublyLinkedList1.size()).toBe(3)

      expect(doublyLinkedList1.getAt(0).val).toEqual('a')
      expect(doublyLinkedList1.getAt(0).next.val).toEqual(10)
      expect(doublyLinkedList1.getAt(0).prev).toEqual(null)

      expect(doublyLinkedList1.getAt(1).val).toEqual(10)
      expect(doublyLinkedList1.getAt(1).next.val).toEqual(42)
      expect(doublyLinkedList1.getAt(1).prev.val).toEqual('a')

      expect(doublyLinkedList1.getAt(2).val).toEqual(42)
      expect(doublyLinkedList1.getAt(2).next).toEqual(null)
      expect(doublyLinkedList1.getAt(2).prev.val).toEqual(10)

      expect(doublyLinkedList1.getAt(3)).toEqual(null)
    })

    it('handles non-existent indexes to get for a doubly linked list that has multiple nodes', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtBeginning(42)
      doublyLinkedList1.insertAtBeginning(10)
      doublyLinkedList1.insertAtBeginning('a')
      expect(doublyLinkedList1.getAt(100)).toEqual(null)
      expect(doublyLinkedList1.head.val).toEqual('a')
      expect(doublyLinkedList1.head.next.val).toEqual(10)
      expect(doublyLinkedList1.head.prev).toEqual(null)
      expect(doublyLinkedList1.size()).toBe(3)
    })
  })

  describe('deleteFirstNode', () => {
    it('returns null for an empty doubly linked list', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      expect(doublyLinkedList1.deleteFirstNode()).toBe(null)
      expect(doublyLinkedList1.head).toBe(null)
      expect(doublyLinkedList1.tail).toBe(null)
      expect(doublyLinkedList1.size()).toBe(0)
    })

    it('deletes the first node for a doubly linked list that has a single node', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtBeginning(42)
      expect(doublyLinkedList1.deleteFirstNode()).toBe(null)
      expect(doublyLinkedList1.head).toBe(null)
      expect(doublyLinkedList1.tail).toBe(null)
      expect(doublyLinkedList1.size()).toBe(0)
    })

    it('deletes the first node for a doubly linked list that has multiple nodes', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtBeginning(42)
      doublyLinkedList1.insertAtBeginning(10)
      expect(doublyLinkedList1.deleteFirstNode()).toEqual(
        new Node(42, null, null)
      )
      expect(doublyLinkedList1.head).toEqual(new Node(42, null, null))
      expect(doublyLinkedList1.tail).toEqual(new Node(42, null, null))
      expect(doublyLinkedList1.size()).toBe(1)
    })
  })

  describe('deleteLastNode', () => {
    it('returns null for an empty doubly linked list', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      expect(doublyLinkedList1.deleteLastNode()).toBe(null)
      expect(doublyLinkedList1.head).toBe(null)
      expect(doublyLinkedList1.tail).toBe(null)
      expect(doublyLinkedList1.size()).toBe(0)
    })

    it('deletes the last node for a doubly linked list that has a single node', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtBeginning(42)
      expect(doublyLinkedList1.deleteLastNode()).toBe(null)
      expect(doublyLinkedList1.head).toBe(null)
      expect(doublyLinkedList1.tail).toBe(null)
      expect(doublyLinkedList1.size()).toBe(0)
    })

    it('deletes the last node for a doubly linked list that has multiple nodes', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtBeginning(42)
      doublyLinkedList1.insertAtBeginning(10)
      expect(doublyLinkedList1.deleteLastNode()).toEqual(new Node(10, null))
      expect(doublyLinkedList1.head).toEqual(new Node(10, null, null))
      expect(doublyLinkedList1.tail).toEqual(new Node(10, null, null))
      expect(doublyLinkedList1.size()).toBe(1)
    })

    it('deletes the last node for a doubly linked list that has lots of nodes', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtBeginning(42)
      doublyLinkedList1.insertAtBeginning(10)
      doublyLinkedList1.insertAtBeginning('a')
      doublyLinkedList1.insertAtBeginning(50)
      doublyLinkedList1.insertAtBeginning('hey')
      doublyLinkedList1.deleteLastNode()

      expect(doublyLinkedList1.tail.val).toEqual(10)
      expect(doublyLinkedList1.tail.next).toEqual(null)
      expect(doublyLinkedList1.tail.prev.val).toEqual('a')
      expect(doublyLinkedList1.size()).toBe(4)
    })
  })

  describe('deleteAt', () => {
    it('returns null for an empty doubly linked list', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      expect(doublyLinkedList1.deleteAt(0)).toBe(null)
      expect(doublyLinkedList1.head).toBe(null)
      expect(doublyLinkedList1.tail).toBe(null)
      expect(doublyLinkedList1.size()).toBe(0)
    })

    it('handles non-existent indexes to delete when the doubly linked list is empty', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      expect(doublyLinkedList1.deleteAt(100)).toBe(null)
      expect(doublyLinkedList1.head).toBe(null)
      expect(doublyLinkedList1.tail).toBe(null)
      expect(doublyLinkedList1.size()).toBe(0)
    })

    it('deletes the node at the specified index for a doubly linked list that has a single node', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtBeginning(42)
      expect(doublyLinkedList1.deleteAt(0)).toBe(null)
      expect(doublyLinkedList1.head).toBe(null)
      expect(doublyLinkedList1.tail).toBe(null)
      expect(doublyLinkedList1.size()).toBe(0)
    })

    it('handles non-existent indexes to delete for a doubly linked list that has a single node', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtBeginning(42)
      expect(doublyLinkedList1.deleteAt(100)).toEqual(new Node(42, null, null))
      expect(doublyLinkedList1.head).toEqual(new Node(42, null, null))
      expect(doublyLinkedList1.tail).toEqual(new Node(42, null, null))
      expect(doublyLinkedList1.size()).toBe(1)
    })

    it('deletes the node at the specified index for a doubly linked list that has multiple nodes', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtBeginning(42)
      doublyLinkedList1.insertAtBeginning(10)
      doublyLinkedList1.insertAtBeginning('a')
      doublyLinkedList1.deleteAt(1)

      expect(doublyLinkedList1.head.val).toEqual('a')
      expect(doublyLinkedList1.head.next.val).toEqual(42)
      expect(doublyLinkedList1.head.prev).toEqual(null)

      expect(doublyLinkedList1.tail.val).toEqual(42)
      expect(doublyLinkedList1.tail.next).toEqual(null)
      expect(doublyLinkedList1.tail.prev.val).toEqual('a')

      expect(doublyLinkedList1.size()).toBe(2)
    })

    it('deletes the node at the specified index for a doubly linked list that has multiple nodes when the index is 0', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtBeginning(42)
      doublyLinkedList1.insertAtBeginning(10)
      doublyLinkedList1.insertAtBeginning('a')
      doublyLinkedList1.deleteAt(0)

      expect(doublyLinkedList1.head.val).toEqual(10)
      expect(doublyLinkedList1.head.next.val).toEqual(42)
      expect(doublyLinkedList1.head.prev).toEqual(null)

      expect(doublyLinkedList1.tail.val).toEqual(42)
      expect(doublyLinkedList1.tail.next).toEqual(null)
      expect(doublyLinkedList1.tail.prev.val).toEqual(10)

      expect(doublyLinkedList1.size()).toBe(2)
    })

    it('deletes the node at the specified index for a doubly linked list that has multiple nodes when the index is the last index', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtBeginning(42)
      doublyLinkedList1.insertAtBeginning(10)
      doublyLinkedList1.insertAtBeginning('a')
      doublyLinkedList1.deleteAt(2)

      expect(doublyLinkedList1.head.val).toEqual('a')
      expect(doublyLinkedList1.head.next.val).toEqual(10)
      expect(doublyLinkedList1.head.prev).toEqual(null)

      expect(doublyLinkedList1.tail.val).toEqual(10)
      expect(doublyLinkedList1.tail.next).toEqual(null)
      expect(doublyLinkedList1.tail.prev.val).toEqual('a')

      expect(doublyLinkedList1.size()).toBe(2)
    })

    it('handles non-existent indexes to delete for a doubly linked list that has multiple nodes', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtBeginning(42)
      doublyLinkedList1.insertAtBeginning(10)
      doublyLinkedList1.insertAtBeginning('a')
      doublyLinkedList1.deleteAt(100)

      expect(doublyLinkedList1.head.val).toEqual('a')
      expect(doublyLinkedList1.head.next.val).toEqual(10)
      expect(doublyLinkedList1.head.prev).toEqual(null)

      expect(doublyLinkedList1.getAt(1).val).toEqual(10)
      expect(doublyLinkedList1.getAt(1).next.val).toEqual(42)
      expect(doublyLinkedList1.getAt(1).prev.val).toEqual('a')

      expect(doublyLinkedList1.tail.val).toEqual(42)
      expect(doublyLinkedList1.tail.next).toEqual(null)
      expect(doublyLinkedList1.tail.prev.val).toEqual(10)

      expect(doublyLinkedList1.size()).toBe(3)
    })
  })

  describe('reverse', () => {
    it('can correctly reverse a list', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtBeginning(1)
      doublyLinkedList1.insertAtBeginning(2)
      doublyLinkedList1.insertAtBeginning(3)
      doublyLinkedList1.insertAtBeginning(4)

      expect(doublyLinkedList1.head.prev).toEqual(null)
      expect(doublyLinkedList1.head.val).toEqual(4)
      expect(doublyLinkedList1.head.next.val).toEqual(3)

      expect(doublyLinkedList1.head.next.prev.val).toEqual(4)
      expect(doublyLinkedList1.head.next.next.val).toEqual(2)

      expect(doublyLinkedList1.head.next.next.prev.val).toEqual(3)
      expect(doublyLinkedList1.head.next.next.next.val).toEqual(1)

      expect(doublyLinkedList1.head.next.next.next.prev.val).toEqual(2)
      expect(doublyLinkedList1.head.next.next.next.next).toEqual(null)

      expect(doublyLinkedList1.tail.prev.val).toEqual(2)
      expect(doublyLinkedList1.tail.val).toEqual(1)
      expect(doublyLinkedList1.tail.next).toEqual(null)

      expect(doublyLinkedList1.size()).toBe(4)

      doublyLinkedList1.reverse()

      expect(doublyLinkedList1.head.prev).toEqual(null)
      expect(doublyLinkedList1.head.val).toEqual(1)
      expect(doublyLinkedList1.head.next.val).toEqual(2)

      expect(doublyLinkedList1.head.next.prev.val).toEqual(1)
      expect(doublyLinkedList1.head.next.next.val).toEqual(3)

      expect(doublyLinkedList1.head.next.next.prev.val).toEqual(2)
      expect(doublyLinkedList1.head.next.next.next.val).toEqual(4)

      expect(doublyLinkedList1.head.next.next.next.prev.val).toEqual(3)
      expect(doublyLinkedList1.head.next.next.next.next).toEqual(null)

      expect(doublyLinkedList1.tail.prev.val).toEqual(3)
      expect(doublyLinkedList1.tail.val).toEqual(4)
      expect(doublyLinkedList1.tail.next).toEqual(null)

      expect(doublyLinkedList1.size()).toBe(4)
    })

    it('can handle an empty list', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      expect(() => doublyLinkedList1.reverse()).not.toThrow()
    })

    it('can handle a list of only one node', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtBeginning(1)
      expect(doublyLinkedList1.size()).toBe(1)
      expect(doublyLinkedList1.head).toEqual(new Node(1, null, null))

      doublyLinkedList1.reverse()

      expect(doublyLinkedList1.size()).toBe(1)
      expect(doublyLinkedList1.head).toEqual(new Node(1, null, null))
    })
  })

  describe('traverse', () => {
    it('calls the callback function once for each node in the list', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtBeginning(1)
      doublyLinkedList1.insertAtBeginning(2)
      doublyLinkedList1.insertAtBeginning(3)

      const mockCallback = jest.fn()
      doublyLinkedList1.traverse(mockCallback)

      expect(mockCallback).toHaveBeenCalledTimes(3)
    })

    it('does not call the callback function if the list is empty', () => {
      const doublyLinkedList1 = new DoublyLinkedList()

      const mockCallback = jest.fn()
      doublyLinkedList1.traverse(mockCallback)

      expect(mockCallback).not.toHaveBeenCalled()
    })

    it('traverses the list starting at the beginning', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtBeginning(1)
      doublyLinkedList1.insertAtBeginning(2)
      doublyLinkedList1.insertAtBeginning(3)

      const nodeValues = []
      const callback = node => nodeValues.push(node.val)
      doublyLinkedList1.traverse(callback)

      expect(nodeValues).toEqual([3, 2, 1])
    })

    it('does not throw if no callback is provided', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtBeginning(1)
      doublyLinkedList1.insertAtBeginning(2)
      doublyLinkedList1.insertAtBeginning(3)

      expect(() => doublyLinkedList1.traverse()).not.toThrow()
    })
  })

  describe('traverseReverse', () => {
    it('calls the callback function once for each node in the list', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtBeginning(1)
      doublyLinkedList1.insertAtBeginning(2)
      doublyLinkedList1.insertAtBeginning(3)

      const mockCallback = jest.fn()
      doublyLinkedList1.traverseReverse(mockCallback)

      expect(mockCallback).toHaveBeenCalledTimes(3)
    })

    it('does not call the callback function if the list is empty', () => {
      const doublyLinkedList1 = new DoublyLinkedList()

      const mockCallback = jest.fn()
      doublyLinkedList1.traverseReverse(mockCallback)

      expect(mockCallback).not.toHaveBeenCalled()
    })

    it('traverses the list starting at the end', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtBeginning(1)
      doublyLinkedList1.insertAtBeginning(2)
      doublyLinkedList1.insertAtBeginning(3)

      const nodeValues = []
      const callback = node => nodeValues.push(node.val)
      doublyLinkedList1.traverseReverse(callback)

      expect(nodeValues).toEqual([1, 2, 3])
    })

    it('does not throw if no callback is provided', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtBeginning(1)
      doublyLinkedList1.insertAtBeginning(2)
      doublyLinkedList1.insertAtBeginning(3)

      expect(() => doublyLinkedList1.traverseReverse()).not.toThrow()
    })
  })

  describe('isEmpty', () => {
    it('returns true if the doubly linked list is empty', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      expect(doublyLinkedList1.isEmpty()).toBe(true)
    })

    it('returns false if the doubly linked list is not empty', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtBeginning(42)
      expect(doublyLinkedList1.isEmpty()).toBe(false)
    })
  })

  describe('size', () => {
    it('returns the correct number of elements in the doubly linked list', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      expect(doublyLinkedList1.size()).toBe(0)

      doublyLinkedList1.insertAtBeginning(42)
      expect(doublyLinkedList1.size()).toBe(1)

      doublyLinkedList1.insertAtBeginning(10)
      expect(doublyLinkedList1.size()).toBe(2)

      doublyLinkedList1.insertAtBeginning('a')
      expect(doublyLinkedList1.size()).toBe(3)

      doublyLinkedList1.deleteFirstNode()
      expect(doublyLinkedList1.size()).toBe(2)

      doublyLinkedList1.deleteFirstNode()
      expect(doublyLinkedList1.size()).toBe(1)

      doublyLinkedList1.deleteFirstNode()
      expect(doublyLinkedList1.size()).toBe(0)
    })
  })

  describe('enumerate', () => {
    it('returns an array of values for the entire doubly linked list starting at the head', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtBeginning(42)
      doublyLinkedList1.insertAtBeginning(10)
      doublyLinkedList1.insertAtBeginning('a')
      expect(doublyLinkedList1.enumerate()).toEqual(['a', 10, 42])
    })

    it('returns an empty array when an empty doubly linked list is enumerated', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      expect(doublyLinkedList1.enumerate()).toEqual([])
    })
  })

  describe('clear', () => {
    it('removes all elements and sets the doubly linked list size to 0 and head to null and tail to null when emptied', () => {
      const doublyLinkedList1 = new DoublyLinkedList()
      doublyLinkedList1.insertAtBeginning(42)
      doublyLinkedList1.insertAtBeginning(10)
      doublyLinkedList1.insertAtBeginning('a')
      doublyLinkedList1.clear()
      expect(doublyLinkedList1.size()).toEqual(0)
      expect(doublyLinkedList1.head).toEqual(null)
      expect(doublyLinkedList1.tail).toEqual(null)
    })
  })
})
