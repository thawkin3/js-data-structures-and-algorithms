import React, { Component, createRef } from 'react'
import { Node } from '../src/node'
import './node.demo.css'

// TODO: This was copied from the Node for a singly linked list.
// Still need to implement for a doubly linked list.

const NodeItem = ({ node }) => {
  return (
    <div className="node">
      <div>
        <b>Value:</b> {node.val}
      </div>
      <div>
        <b>Previous:</b>{' '}
        <pre>{JSON.stringify(node.prev, undefined, 2) || 'null'}</pre>
      </div>
      <div>
        <b>Next:</b>{' '}
        <pre>{JSON.stringify(node.next, undefined, 2) || 'null'}</pre>
      </div>
    </div>
  )
}

export class NodeVisualizer extends Component {
  state = {
    nodes: [],
    item: '',
    next: '',
    prev: '',
  }

  textInputRef = createRef()

  handleItemChange = e => {
    this.setState({ item: e.target.value })
  }

  handlePrevChange = e => {
    this.setState({ prev: e.target.value })
  }

  handleNextChange = e => {
    this.setState({ next: e.target.value })
  }

  addItem = e => {
    e.preventDefault()
    const { item, next, prev } = this.state
    if (item) {
      const node = new Node(
        item,
        JSON.parse(next || null),
        JSON.parse(prev || null)
      )
      this.setState(
        prevState => ({
          nodes: [...prevState.nodes, node],
          item: '',
          next: '',
          prev: '',
        }),
        () => this.textInputRef.current && this.textInputRef.current.focus()
      )
    }
  }

  removeItem = () => {
    this.setState(prevState => ({ nodes: prevState.nodes.slice(1) }))
  }

  clearNodes = () => {
    this.setState({ nodes: [] })
  }

  render() {
    const { nodes, item, next, prev } = this.state

    return (
      <div className="nodeDemo">
        <h1>Node Demo</h1>
        <p>
          NOTE: This demo simply shows a collection of nodes that have pointers
          to previous and next nodes. This is not an actual doubly linked list.
        </p>
        <form onSubmit={this.addItem}>
          <label>
            <span>Node Value:</span>
            <input
              value={item}
              onChange={this.handleItemChange}
              ref={this.textInputRef}
              className="ti input newItemTextInput"
            />
          </label>
          <br />
          <label>
            <span>Node Previous Pointer:</span>
            <select
              value={prev}
              onChange={this.handlePrevChange}
              className="input nodePrevTextInput"
            >
              <option key="null-value" value="">
                null
              </option>
              {nodes.map((node, index) => (
                <option key={index} value={JSON.stringify(node)}>
                  {JSON.stringify(node, undefined, 2)}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label>
            <span>Node Next Pointer:</span>
            <select
              value={next}
              onChange={this.handleNextChange}
              className="input nodeNextTextInput"
            >
              <option key="null-value" value="">
                null
              </option>
              {nodes.map((node, index) => (
                <option key={index} value={JSON.stringify(node)}>
                  {JSON.stringify(node, undefined, 2)}
                </option>
              ))}
            </select>
          </label>
          <br />
          <button className="button outline" type="submit">
            Add Item to Node List
          </button>
          <br />
          <button
            className="button outline"
            type="button"
            onClick={this.removeItem}
          >
            Remove Item from Node List
          </button>
          <br />
          <button
            className="button outline"
            type="button"
            onClick={this.clearNodes}
          >
            Clear Node List
          </button>
        </form>
        <div>
          <p>Node List Contents:</p>
          <div className="nodeContainer">
            {nodes.map((node, index) => {
              return <NodeItem node={node} key={index} />
            })}
          </div>
        </div>
      </div>
    )
  }
}
