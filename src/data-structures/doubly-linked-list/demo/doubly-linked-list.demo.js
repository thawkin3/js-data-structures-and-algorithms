import React, { Component, createRef } from 'react'
import { DoublyLinkedList } from '../src/doubly-linked-list'
import { NodeVisualizer } from './node.demo'
import './doubly-linked-list.demo.css'

export default {
  title: 'Data Structures/Doubly Linked List',
}

const DoublyLinkedListNodeItem = ({ val }) => {
  return <div className="node">{val}</div>
}

class DoublyLinkedListVisualizer extends Component {
  state = {
    doublyLinkedList: new DoublyLinkedList(),
    itemToAdd: '',
    indexToAddAt: 0,
    indexToRemoveAt: 0,
    indexToGetAt: 0,
  }

  itemToAddTextInputRef = createRef()
  indexToAddAtNumberInputRef = createRef()
  indexToRemoveAtNumberInputRef = createRef()
  indexToGetAtNumberInputRef = createRef()

  handleItemChange = e => {
    this.setState({ itemToAdd: e.target.value })
  }

  handleInsertIndexChange = e => {
    this.setState({ indexToAddAt: e.target.value })
  }

  handleRemoveIndexChange = e => {
    this.setState({ indexToRemoveAt: e.target.value })
  }

  handleGetIndexChange = e => {
    this.setState({ indexToGetAt: e.target.value })
  }

  insertAtBeginning = e => {
    e.preventDefault()
    const { itemToAdd, doublyLinkedList } = this.state
    if (itemToAdd) {
      doublyLinkedList.insertAtBeginning(itemToAdd)
      this.setState(
        {
          doublyLinkedList,
          itemToAdd: '',
        },
        () =>
          this.itemToAddTextInputRef.current &&
          this.itemToAddTextInputRef.current.focus()
      )
    }
  }

  insertAtEnd = () => {
    const { itemToAdd, doublyLinkedList } = this.state
    if (itemToAdd) {
      doublyLinkedList.insertAtEnd(itemToAdd)
      this.setState(
        {
          doublyLinkedList,
          itemToAdd: '',
        },
        () =>
          this.itemToAddTextInputRef.current &&
          this.itemToAddTextInputRef.current.focus()
      )
    }
  }

  insertAt = () => {
    const { indexToAddAt, itemToAdd, doublyLinkedList } = this.state
    if (itemToAdd) {
      doublyLinkedList.insertAt(itemToAdd, indexToAddAt)
      this.setState(
        {
          doublyLinkedList,
          itemToAdd: '',
          indexToAddAt: 0,
        },
        () =>
          this.itemToAddTextInputRef.current &&
          this.itemToAddTextInputRef.current.focus()
      )
    }
  }

  deleteFirstNode = () => {
    const { doublyLinkedList } = this.state
    doublyLinkedList.deleteFirstNode()
    this.setState({
      doublyLinkedList,
    })
  }

  deleteLastNode = () => {
    const { doublyLinkedList } = this.state
    doublyLinkedList.deleteLastNode()
    this.setState({
      doublyLinkedList,
    })
  }

  deleteAt = () => {
    const { indexToRemoveAt, doublyLinkedList } = this.state
    doublyLinkedList.deleteAt(indexToRemoveAt)
    this.setState({
      doublyLinkedList,
      indexToRemoveAt: 0,
    })
  }

  clear = () => {
    const { doublyLinkedList } = this.state
    doublyLinkedList.clear()
    this.setState(
      { doublyLinkedList },
      () =>
        this.itemToAddTextInputRef.current &&
        this.itemToAddTextInputRef.current.focus()
    )
  }

  render() {
    const { doublyLinkedList, itemToAdd, indexToAddAt, indexToRemoveAt } =
      this.state

    return (
      <div className="doublyLinkedListDemo">
        <h1>Doubly Linked List Demo</h1>
        <div className="flexContainer">
          <div className="leftColumn">
            <form onSubmit={this.insertAtBeginning}>
              <fieldset>
                <legend>Insertion</legend>
                <label>
                  <span>Node Value to Insert:</span>
                  <input
                    value={itemToAdd}
                    onChange={this.handleItemChange}
                    ref={this.itemToAddTextInputRef}
                    className="ti input newItemTextInput"
                  />
                </label>
                <br />
                <button className="button outline" type="submit">
                  Insert Node at Beginning of List
                </button>
                <br />
                <button
                  className="button outline"
                  type="button"
                  onClick={this.insertAtEnd}
                >
                  Insert Node at End of List
                </button>
                <br />
                <label>
                  <span>Index to Insert at:</span>
                  <input
                    type="number"
                    value={indexToAddAt}
                    onChange={this.handleInsertIndexChange}
                    ref={this.indexToAddAtNumberInputRef}
                    className="ti input indexToAddAtNumberInput"
                  />
                </label>
                <br />
                <button
                  className="button outline"
                  type="button"
                  onClick={this.insertAt}
                >
                  Insert Node at Specified Index
                </button>
              </fieldset>
              <fieldset>
                <legend>Deletion</legend>
                <button
                  className="button outline"
                  type="button"
                  onClick={this.deleteFirstNode}
                >
                  Delete Node at Beginning of List
                </button>
                <br />
                <button
                  className="button outline"
                  type="button"
                  onClick={this.deleteLastNode}
                >
                  Delete Node at End of List
                </button>
                <br />
                <label>
                  <span>Index to Delete at:</span>
                  <input
                    type="number"
                    value={indexToRemoveAt}
                    onChange={this.handleRemoveIndexChange}
                    ref={this.indexToRemoveAtNumberInputRef}
                    className="ti input indexToRemoveAtNumberInput"
                  />
                </label>
                <br />
                <button
                  className="button outline"
                  type="button"
                  onClick={this.deleteAt}
                >
                  Delete Node at Specified Index
                </button>
              </fieldset>
              <button
                className="button outline"
                type="button"
                onClick={this.clear}
              >
                Clear Doubly Linked List
              </button>
            </form>
          </div>
          <div className="rightColumn">
            <h2>Doubly Linked List Contents:</h2>
            <div className="doublyLinkedListContainer">
              {doublyLinkedList.isEmpty() ? (
                <p>(currently empty)</p>
              ) : (
                doublyLinkedList.enumerate().map((val, index) => {
                  return (
                    <DoublyLinkedListNodeItem
                      val={val}
                      key={`${index}-${val}`}
                    />
                  )
                })
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export const doublyLinkedListVisualizer = () => <DoublyLinkedListVisualizer />

export const nodeVisualizer = () => <NodeVisualizer />
