import { Node } from './node'

describe('Node', () => {
  it('can be instantiated with the `new` keyword', () => {
    expect(() => new Node()).not.toThrow()
  })

  it('can return its value', () => {
    const node1 = new Node(42)
    expect(node1.val).toBe(42)
  })

  it('can return its left pointer', () => {
    const node1 = new Node(42)
    expect(node1.left).toBe(null)
  })

  it('can return its right pointer', () => {
    const node1 = new Node(42)
    expect(node1.right).toBe(null)
  })
})
