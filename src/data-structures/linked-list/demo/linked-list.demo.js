import React, { Component, createRef } from 'react'
import { LinkedList } from '../src/linked-list'
import { NodeVisualizer } from './node.demo'
import './linked-list.demo.css'

export default {
  title: 'Data Structures/Linked List',
}

const LinkedListNodeItem = ({ val }) => {
  return <div className="node">{val}</div>
}

class LinkedListVisualizer extends Component {
  state = {
    linkedList: new LinkedList(),
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
    const { itemToAdd, linkedList } = this.state
    if (itemToAdd) {
      linkedList.insertAtBeginning(itemToAdd)
      this.setState(
        {
          linkedList,
          itemToAdd: '',
        },
        () =>
          this.itemToAddTextInputRef.current &&
          this.itemToAddTextInputRef.current.focus()
      )
    }
  }

  insertAtEnd = () => {
    const { itemToAdd, linkedList } = this.state
    if (itemToAdd) {
      linkedList.insertAtEnd(itemToAdd)
      this.setState(
        {
          linkedList,
          itemToAdd: '',
        },
        () =>
          this.itemToAddTextInputRef.current &&
          this.itemToAddTextInputRef.current.focus()
      )
    }
  }

  insertAt = () => {
    const { indexToAddAt, itemToAdd, linkedList } = this.state
    if (itemToAdd) {
      linkedList.insertAt(itemToAdd, indexToAddAt)
      this.setState(
        {
          linkedList,
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
    const { linkedList } = this.state
    linkedList.deleteFirstNode()
    this.setState({
      linkedList,
    })
  }

  deleteLastNode = () => {
    const { linkedList } = this.state
    linkedList.deleteLastNode()
    this.setState({
      linkedList,
    })
  }

  deleteAt = () => {
    const { indexToRemoveAt, linkedList } = this.state
    linkedList.deleteAt(indexToRemoveAt)
    this.setState({
      linkedList,
      indexToRemoveAt: 0,
    })
  }

  clear = () => {
    const { linkedList } = this.state
    linkedList.clear()
    this.setState(
      { linkedList },
      () =>
        this.itemToAddTextInputRef.current &&
        this.itemToAddTextInputRef.current.focus()
    )
  }

  render() {
    const { linkedList, itemToAdd, indexToAddAt, indexToRemoveAt } = this.state

    return (
      <div className="linkedListDemo">
        <h1>Linked List Demo</h1>
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
                Clear Linked List
              </button>
            </form>
          </div>
          <div className="rightColumn">
            <h2>Linked List Contents:</h2>
            <div className="linkedListContainer">
              {linkedList.isEmpty() ? (
                <p>(currently empty)</p>
              ) : (
                linkedList.enumerate().map((val, index) => {
                  return (
                    <LinkedListNodeItem val={val} key={`${index}-${val}`} />
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

export const linkedListVisualizer = () => <LinkedListVisualizer />

export const nodeVisualizer = () => <NodeVisualizer />
