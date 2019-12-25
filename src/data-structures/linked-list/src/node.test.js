import { Node } from './node'

describe('Node', () => {
  it('can be instantiated with the `new` keyword', () => {
    expect(() => new Node()).not.toThrow()
  })

  it('can return its value', () => {
    const node1 = new Node(42)
    expect(node1.val).toBe(42)
  })

  it('can return its next pointer when next is null', () => {
    const node1 = new Node(42)
    expect(node1.next).toBe(null)
  })

  it('can return its next pointer when next is not null', () => {
    const node1 = new Node(42)
    const node2 = new Node(100, node1)
    expect(node2.next).toBe(node1)
  })
})
