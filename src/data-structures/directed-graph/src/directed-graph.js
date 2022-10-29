/**
 * Directed Graph - consists of nodes (vertices) connected by edges. Connections go only one direction.
 *
 * Methods and properties:
 *
 * - addNode: Constant O(1)
 * - addEdge: Constant O(1)
 * - hadNode: Constant O(1)
 * - getNodeNeighbors: Constant O(1)
 * - printGraph: O(V + E)
 * - breadthFirstSearch: O(V + E)
 * - depthFirstSearch: O(V + E)
 */

export class DirectedGraph {
  constructor() {
    this.nodes = new Map()
  }

  addNode(node) {
    this.nodes.set(node, [])
  }

  addEdge(node1, node2) {
    if (this.nodes.has(node1) && this.nodes.has(node2)) {
      this.nodes.get(node1).push(node2)
    } else {
      throw new Error('One or both nodes do not exist in the graph.')
    }
  }

  hasNode(node) {
    return this.nodes.has(node)
  }

  getNodeNeighbors(node) {
    if (this.nodes.has(node)) {
      return this.nodes.get(node)
    }

    throw new Error('Node does not exist in the graph.')
  }

  printGraph() {
    if (this.nodes.size === 0) {
      console.log('')
      return
    }

    let printedMessage = ''
    for (const [node, neighbors] of this.nodes.entries()) {
      printedMessage += `${node} ->`

      neighbors.forEach(neighborNode => {
        printedMessage += ` ${neighborNode}`
      })

      printedMessage += '\n'
    }

    console.log(printedMessage)
  }

  breadthFirstSearch(startingNode, searchingForNode, callback) {
    const visitedNodes = {}
    const nodesToVisitQueue = []

    nodesToVisitQueue.push(startingNode)

    while (nodesToVisitQueue.length > 0) {
      const currentNode = nodesToVisitQueue.shift()

      if (!visitedNodes[currentNode]) {
        visitedNodes[currentNode] = true
        callback(currentNode)

        if (currentNode === searchingForNode) {
          break
        }

        const currentNodeNeighbors = this.nodes.get(currentNode)
        console.log(
          'currentNode:',
          currentNode,
          'currentNodeNeighbors:',
          currentNodeNeighbors.join(', ')
        )

        currentNodeNeighbors.forEach(neighborNode => {
          nodesToVisitQueue.push(neighborNode)
        })
      }
    }
  }

  // eslint-disable-next-line no-unused-vars
  depthFirstSearch(startingNode, searchingForNode, callback) {}
}
