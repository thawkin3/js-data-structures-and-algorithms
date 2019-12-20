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
  })
})
