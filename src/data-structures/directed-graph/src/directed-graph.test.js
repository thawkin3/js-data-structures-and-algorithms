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

    it('returns an array of node neghbors for an existing node with some neighbors', () => {
      const graph = new DirectedGraph()
      graph.addNode('A')
      graph.addNode('B')
      graph.addNode('C')

      graph.addEdge('A', 'B')
      graph.addEdge('A', 'C')

      expect(graph.getNodeNeighbors('A')).toEqual(['B', 'C'])
    })

    it('returns an empty array of node neghbors for an existing node that does not have any neighbors', () => {
      const graph = new DirectedGraph()
      graph.addNode('A')
      graph.addNode('B')
      graph.addNode('C')

      graph.addEdge('A', 'B')
      graph.addEdge('A', 'C')

      expect(graph.getNodeNeighbors('C')).toEqual([])
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

  describe('breadthFirstSearch', () => {
    it('performs a breadth-first search starting at a given node in a non-tree-like graph', () => {
      // A  ->  B
      // |    / |
      // v  <   v
      // C  ->  D
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

      const visitedNodes = []
      const traversalCallback = node => {
        visitedNodes.push(node)
      }

      graph.breadthFirstSearch('A', 'D', traversalCallback)

      expect(visitedNodes).toEqual(['A', 'B', 'C', 'D'])
    })

    it('performs a breadth-first search starting at a given node at the top of a tree and ending at the bottom right of the tree', () => {
      //                A
      //    B           C           D
      // E     F     G     H     I     J
      const graph = new DirectedGraph()

      graph.addNode('A')
      graph.addNode('B')
      graph.addNode('C')
      graph.addNode('D')
      graph.addNode('E')
      graph.addNode('F')
      graph.addNode('G')
      graph.addNode('H')
      graph.addNode('I')
      graph.addNode('J')

      graph.addEdge('A', 'B')
      graph.addEdge('A', 'C')
      graph.addEdge('A', 'D')

      graph.addEdge('B', 'E')
      graph.addEdge('B', 'F')

      graph.addEdge('C', 'G')
      graph.addEdge('C', 'H')

      graph.addEdge('D', 'I')
      graph.addEdge('D', 'J')

      const visitedNodes = []
      const traversalCallback = node => {
        visitedNodes.push(node)
      }

      graph.breadthFirstSearch('A', 'J', traversalCallback)

      expect(visitedNodes).toEqual([
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
      ])
    })

    it('performs a breadth-first search starting at a given node at the top of a tree and ending midway through the tree without visiting every node', () => {
      //                A
      //    B           C           D
      // E     F     G     H     I     J
      const graph = new DirectedGraph()

      graph.addNode('A')
      graph.addNode('B')
      graph.addNode('C')
      graph.addNode('D')
      graph.addNode('E')
      graph.addNode('F')
      graph.addNode('G')
      graph.addNode('H')
      graph.addNode('I')
      graph.addNode('J')

      graph.addEdge('A', 'B')
      graph.addEdge('A', 'C')
      graph.addEdge('A', 'D')

      graph.addEdge('B', 'E')
      graph.addEdge('B', 'F')

      graph.addEdge('C', 'G')
      graph.addEdge('C', 'H')

      graph.addEdge('D', 'I')
      graph.addEdge('D', 'J')

      const visitedNodes = []
      const traversalCallback = node => {
        visitedNodes.push(node)
      }

      graph.breadthFirstSearch('A', 'F', traversalCallback)

      expect(visitedNodes).toEqual(['A', 'B', 'C', 'D', 'E', 'F'])
    })
  })

  describe('depthFirstSearch', () => {
    it('performs a depth-first search starting at a given node in a non-tree-like graph', () => {
      // A  ->  B
      // |    / |
      // v  <   v
      // C  ->  D
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

      const visitedNodes = []
      const traversalCallback = node => {
        visitedNodes.push(node)
      }

      graph.depthFirstSearch('A', 'D', traversalCallback)

      expect(visitedNodes).toEqual(['A', 'C', 'D'])
    })

    it('performs a depth-first search starting at a given node at the top of a tree and ending at the bottom right of the tree', () => {
      //                A
      //    B           C           D
      // E     F     G     H     I     J
      const graph = new DirectedGraph()

      graph.addNode('A')
      graph.addNode('B')
      graph.addNode('C')
      graph.addNode('D')
      graph.addNode('E')
      graph.addNode('F')
      graph.addNode('G')
      graph.addNode('H')
      graph.addNode('I')
      graph.addNode('J')

      graph.addEdge('A', 'B')
      graph.addEdge('A', 'C')
      graph.addEdge('A', 'D')

      graph.addEdge('B', 'E')
      graph.addEdge('B', 'F')

      graph.addEdge('C', 'G')
      graph.addEdge('C', 'H')

      graph.addEdge('D', 'I')
      graph.addEdge('D', 'J')

      const visitedNodes = []
      const traversalCallback = node => {
        visitedNodes.push(node)
      }

      graph.depthFirstSearch('A', 'J', traversalCallback)

      expect(visitedNodes).toEqual(['A', 'D', 'J'])
    })

    it('performs a depth-first search starting at a given node at the top of a tree and ending midway through the tree without visiting every node', () => {
      //                A
      //    B           C           D
      // E     F     G     H     I     J
      const graph = new DirectedGraph()

      graph.addNode('A')
      graph.addNode('B')
      graph.addNode('C')
      graph.addNode('D')
      graph.addNode('E')
      graph.addNode('F')
      graph.addNode('G')
      graph.addNode('H')
      graph.addNode('I')
      graph.addNode('J')

      graph.addEdge('A', 'B')
      graph.addEdge('A', 'C')
      graph.addEdge('A', 'D')

      graph.addEdge('B', 'E')
      graph.addEdge('B', 'F')

      graph.addEdge('C', 'G')
      graph.addEdge('C', 'H')

      graph.addEdge('D', 'I')
      graph.addEdge('D', 'J')

      const visitedNodes = []
      const traversalCallback = node => {
        visitedNodes.push(node)
      }

      graph.depthFirstSearch('A', 'F', traversalCallback)

      expect(visitedNodes).toEqual([
        'A',
        'D',
        'J',
        'I',
        'C',
        'H',
        'G',
        'B',
        'F',
      ])
    })
  })
})
