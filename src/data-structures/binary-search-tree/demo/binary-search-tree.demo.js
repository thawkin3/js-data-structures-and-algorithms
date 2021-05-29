import React, { Component, createRef } from 'react'
import Tree from 'react-tree-graph'
import { BinarySearchTreeWithDisplay } from './binary-search-tree-with-display'
import 'react-tree-graph/dist/style.css'
import './binary-search-tree.demo.css'

export default {
  title: 'Data Structures/Binary Search Tree',
}

class BinarySearchTreeVisualizer extends Component {
  state = {
    binarySearchTree: new BinarySearchTreeWithDisplay(),
    itemToAdd: '',
    itemToRemove: '',
  }

  itemToAddNumberInputRef = createRef()
  itemToRemoveNumberInputRef = createRef()

  handleItemToAddChange = e => {
    this.setState({ itemToAdd: e.target.value })
  }

  handleItemToRemoveChange = e => {
    this.setState({ itemToRemove: e.target.value })
  }

  insert = e => {
    e.preventDefault()
    const { itemToAdd, binarySearchTree } = this.state

    if (itemToAdd !== '') {
      binarySearchTree.insert(Number(itemToAdd))
      this.setState(
        {
          binarySearchTree,
          itemToAdd: '',
        },
        () =>
          this.itemToAddNumberInputRef.current &&
          this.itemToAddNumberInputRef.current.focus()
      )
    }
  }

  remove = e => {
    e.preventDefault()
    const { itemToRemove, binarySearchTree } = this.state

    if (itemToRemove !== '') {
      binarySearchTree.remove(Number(itemToRemove))
      this.setState(
        {
          binarySearchTree,
          itemToRemove: '',
        },
        () =>
          this.itemToRemoveNumberInputRef.current &&
          this.itemToRemoveNumberInputRef.current.focus()
      )
    }
  }

  clear = () => {
    const { binarySearchTree } = this.state
    binarySearchTree.clear()
    this.setState(
      { binarySearchTree },
      () =>
        this.itemToAddNumberInputRef.current &&
        this.itemToAddNumberInputRef.current.focus()
    )
  }

  renderTree = () => {
    const { binarySearchTree } = this.state

    return (
      <Tree
        data={binarySearchTree.treeVisualizerData}
        height={300}
        width={Math.random() + 320} // Hack to get this thing to re-render properly
        margins={{
          bottom: 10,
          left: 20,
          right: 50,
          top: 10,
        }}
      />
    )
  }

  render() {
    const { binarySearchTree, itemToAdd, itemToRemove } = this.state

    return (
      <div className="binarySearchTreeDemo">
        <h1>Binary Search Tree Demo</h1>
        <div className="flexContainer">
          <div className="leftColumn">
            <form onSubmit={this.insert}>
              <fieldset>
                <legend>Insertion</legend>
                <label>
                  <span>Node Value to Insert:</span>
                  <input
                    type="number"
                    value={itemToAdd}
                    onChange={this.handleItemToAddChange}
                    ref={this.itemToAddNumberInputRef}
                    className="ti input itemToAddNumberInput"
                  />
                </label>
                <br />
                <button className="button outline" type="submit">
                  Insert Node
                </button>
              </fieldset>
            </form>
            <form onSubmit={this.remove}>
              <fieldset>
                <legend>Deletion</legend>
                <label>
                  <span>Node Value to Delete:</span>
                  <input
                    type="number"
                    value={itemToRemove}
                    onChange={this.handleItemToRemoveChange}
                    ref={this.itemToRemoveNumberInputRef}
                    className="ti input itemToRemoveNumberInput"
                  />
                </label>
                <br />
                <button className="button outline" type="submit">
                  Delete Node with Specified Value
                </button>
              </fieldset>
              <button
                className="button outline"
                type="button"
                onClick={this.clear}
              >
                Clear Binary Search Tree
              </button>
            </form>
          </div>
          <div className="rightColumn">
            <h2>Binary Search Tree Contents:</h2>
            <div className="binarySearchTreeContainer">
              {binarySearchTree.isEmpty() ? (
                <p>(currently empty)</p>
              ) : (
                this.renderTree()
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export const binarySearchTreeVisualizer = () => <BinarySearchTreeVisualizer />
