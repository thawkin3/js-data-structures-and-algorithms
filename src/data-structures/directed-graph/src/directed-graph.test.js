import { DirectedGraph } from './directed-graph'

describe('DirectedGraph', () => {
  it('can be instantiated with the `new` keyword', () => {
    expect(() => new DirectedGraph()).not.toThrow()
  })

  describe('addNode', () => {
    it('allows you to add a new node to an empty graph', () => {
      const graph = new DirectedGraph()
      expect(() => graph.addNode('A')).not.toThrow()
    })

    it('allows you to add multiple new nodes to a graph', () => {
      const graph = new DirectedGraph()
      expect(() => graph.addNode('A')).not.toThrow()
      expect(() => graph.addNode('B')).not.toThrow()
      expect(() => graph.addNode('C')).not.toThrow()
    })
  })

  describe('addEdge', () => {
    it('throws an error if you try to add an edge for two nodes that do not exist', () => {
      const graph = new DirectedGraph()
      expect(() => graph.addEdge('A', 'B')).toThrow(
        'One or both nodes do not exist in the graph.'
      )
    })

    it('throws an error if you try to add an edge for two nodes when the first node does not exist', () => {
      const graph = new DirectedGraph()
      graph.addNode('B')
      expect(() => graph.addEdge('A', 'B')).toThrow(
        'One or both nodes do not exist in the graph.'
      )
    })

    it('throws an error if you try to add an edge for two nodes when the second node does not exist', () => {
      const graph = new DirectedGraph()
      graph.addNode('A')
      expect(() => graph.addEdge('A', 'B')).toThrow(
        'One or both nodes do not exist in the graph.'
      )
    })

    it('allows you to add an edge between two existing nodes', () => {
      const graph = new DirectedGraph()
      graph.addNode('A')
      graph.addNode('B')

      expect(() => graph.addEdge('A', 'B')).not.toThrow()
    })

    it('allows you to add multiple edges to the graph', () => {
      const graph = new DirectedGraph()
      graph.addNode('A')
      graph.addNode('B')
      graph.addNode('C')

      expect(() => graph.addEdge('A', 'B')).not.toThrow()
      expect(() => graph.addEdge('A', 'C')).not.toThrow()
      expect(() => graph.addEdge('B', 'C')).not.toThrow()
    })
  })

  describe('hasNode', () => {
    it('returns true if the node exists in the graph', () => {
      const graph = new DirectedGraph()
      graph.addNode('A')

      expect(graph.hasNode('A')).toBe(true)
    })

    it('returns false if the node does not exist in the graph', () => {
      const graph = new DirectedGraph()
      graph.addNode('A')

      expect(graph.hasNode('B')).toBe(false)
    })
  })

  describe('getNodeNeighbors', () => {
    it('throws an error if the node does not exist in the graph', () => {
      const graph = new DirectedGraph()
      expect(() => graph.getNodeNeighbors('A')).toThrow(
        'Node does not exist in the graph.'
      )
    })
  })

  describe('printGraph', () => {
    it('prints an empty string to the console for an empty graph', () => {
      jest.spyOn(console, 'log')
      const graph = new DirectedGraph()
      graph.printGraph()
      expect(console.log).toHaveBeenCalledWith('')
    })

    it('prints a representation of the graph to the console for a graph with nodes and edges', () => {
      jest.spyOn(console, 'log')
      const graph = new DirectedGraph()

      graph.addNode('A')
      graph.addNode('B')
      graph.addNode('C')
      graph.addNode('D')

      graph.addEdge('A', 'B')
      graph.addEdge('A', 'C')
      graph.addEdge('B', 'C')
      graph.addEdge('B', 'D')
      graph.addEdge('C', 'D')

      graph.printGraph()
      expect(console.log).toHaveBeenCalledWith(
        `A -> B C
B -> C D
C -> D
D ->
`
      )
    })
  })

  describe('breadthFirstSearch', () => {})

  describe('depthFirstSearch', () => {})
})
